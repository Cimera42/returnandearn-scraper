import React from "react";
import './TileList.scss';
import f from '../../img/Fusion360_2020-01-04_12-33-43.png';
import f2 from '../../img/prusa-slicer_2020-01-04_12-49-18.png';
import f3 from '../../img/ss2016-04-28at11_40_10.jpg';
import f4 from '../../img/ss2016-11-18at03_04_37.jpg';
import f5 from '../../img/BlockHop_2017-06-26_23-28-15.png';
import f6 from '../../img/firefox_2018-01-30_23-46-42.png';
import f7 from '../../img/solvespace_2018-02-21_23-48-32.png';
import f8 from '../../img/firefox_2018-04-08_18-07-45.png';
import { Link } from "react-router-dom";

const TileList: React.FC = () => {
    const items = [
        {
            name: 'Clamp',
            date: '8/1/2020',
            description: '',
            img: f,
            contain: false
        },
        {
            name: 'Clamp',
            date: '8/1/2020',
            description: 'Long ass description text goes here so I can explain what the project is. Apparently this text is not long enough yet so I need to make it even longer so that it actually wraps onto a new line so i can see what it looks lke when such an event occurs, in which case i will evaluate what has occurred and make it work unto the way i wish it to',
            img: f2,
            contain: false
        },
        {
            name: 'Clamp',
            date: '8/1/2020',
            description: '',
            img: f3,
            contain: false
        },
        {
            name: 'hackmud',
            date: '8/1/2020',
            description: '',
            img: f4,
            contain: true
        },
        {
            name: 'physics',
            date: '8/1/2020',
            description: '',
            img: f5,
            contain: false
        },
        {
            name: 'stellar mapping',
            date: '8/1/2020',
            description: '',
            img: f6,
            contain: false
        },
        {
            name: 'fan holder #1',
            date: '8/1/2020',
            description: 'One of the first models for my 3d printer I made myself. Works, but no way to secure the fan or duct so they tend to fall off quite frequently',
            img: f7,
            contain: false
        },
        {
            name: 'pcb',
            date: '8/1/2020',
            description: '',
            img: f8,
            contain: false
        },
    ];
    return (
        <div>
            <h1 className="page-title">Graph Viewer</h1>
            <div className="tile-list">
                {items.map((v, i) => {
                    return (
                        <Link to={`/page/${i}`}>
                            <div className="tile-item" key={i}>
                                <div className="tile-item-sizer">
                                    <div className="thumbnail">
                                        <div className={v.contain ? 'contain' : ''} style={{backgroundImage: `url(${v.img})`}}></div>
                                    </div>
                                    <div className="details">
                                        <div className="row">
                                            <span>{v.date}</span>
                                            <h3>{v.name}</h3>
                                        </div>
                                        {v.description}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TileList;
