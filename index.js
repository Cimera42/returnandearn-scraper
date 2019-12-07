const axios = require('axios').default;
const cheerio = require('cheerio');
const fs = require('fs').promises;
const schedule = require('node-schedule');

function nowString()
{
    const date = new Date();
    return "[" + date.toISOString().split('.')[0] + "Z]";
}

/**
 * Fetch return point data by id
 * @param {String} pointId Id of return point
 */
function fetchPointById(pointId) {
    return axios.get('https://returnandearn.org.au/return-points/?locationName=Strathfield')
        .then((response) => {
            const $ = cheerio.load(response.data, {xmlMode: false});

            const script = $('main + script')[0].children[0].data;

            // const globalReturnPointsFeaturesText = script.match(/^\W+var globalReturnPointsFeatures = (\[.*\]);/);
            // const globalReturnPointsFeatures = JSON.parse(globalReturnPointsFeaturesText[1]);
            // console.log(globalReturnPointsFeatures)

            // const globalReturnPointsTypeText = script.match(/ +var globalReturnPointsType = ({.*}).returnPointType;/);
            // const globalReturnPointsType = JSON.parse(globalReturnPointsTypeText[1]);
            // console.log(globalReturnPointsType)

            const globalReturnPointsDataText = script.match(/ +var globalReturnPointsData = +({.*}) +.data;/);
            const globalReturnPointsData = JSON.parse(globalReturnPointsDataText[1]).data;
            return globalReturnPointsData.find((point) => point.id === pointId);
        });
}

/**
 * Fetch return point data and write to file
 * @returns {Promise} Resolves when status data written to file
 */
function fetchAndWrite() {
    const now = new Date();
    const id = '4179'; // Strathfield Council Carpark
    const loggingDir = 'data';
    const filename = `${loggingDir}/${id}.csv`;

    return fetchPointById(id)
        .then((point) => {
            // Milliseconds to seconds
            const timestamp = (now.getTime() / 1000).toFixed(0);
            /**
             * Convert from json value to single character output
             * @param {*} status Return point status value
             * @returns {String} Single character
             */
            function getStatusOutput(status) {
                switch(status) {
                    case 'OPEN':               return '1';
                    case 'SEMI_FULL':          return '2';
                    case 'CLOSED':             return '3';
                    case 'CLOSED_FOR_SERVICE': return '4';
                    case '':                   return '5';
                    case '\r':                 return '6';
                    case null:                 return '7';
                    default:                   return '0';
                }
            }

            /**
             * Write timestamp and return point statuses to logging file
             * @returns {Promise} fs.writeFile
             */
            function writeToFile() {
                return fs.writeFile(
                    filename,
                    `${timestamp},${getStatusOutput(point.cp_status_plastic_and_cans)},${getStatusOutput(point.cp_status_glass)}\n`,
                    {flag: 'a'}
                )
                    .then(() => {
                        console.log(nowString(), `Wrote to '${filename}'`)
                    })
            }

            /**
             * Create logging file if it doesn't exist and add csv headers
             * @returns {Promise} fs.stat
             */
            function createFile() {
                return fs.stat(filename)
                    .then((stats) => {
                        if(stats.isFile()) {
                            return;
                        } else {
                            throw Error(`${filename} is not a file`);
                        }
                    })
                    .catch((err) => {
                        if(err.code === 'ENOENT') {
                            return fs.writeFile(
                                filename,
                                'Timestamp,Plastic,Glass\n'
                            );
                        } else {
                            throw err;
                        }
                    })
            }

            /**
             * Make logging directory if it doesn't exist
             * @returns {Promise} fs.mkdir
             */
            function makeDirectory() {
                return fs.mkdir(loggingDir, {recursive: true});
            }

            return makeDirectory()
                .then(createFile)
                .then(writeToFile)
                .catch((err) => {
                    console.error(nowString(), err);
                });
        });
}

// Do initial fetch on startup
fetchAndWrite();
// Schedule every minute
const job = schedule.scheduleJob({
    second: 0,
    minute: new schedule.Range(0, 59, 1)
}, fetchAndWrite);
