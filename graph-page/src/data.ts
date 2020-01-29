import f from './img/Fusion360_2020-01-04_12-33-43.png';
import f2 from './img/prusa-slicer_2020-01-04_12-49-18.png';
import f3 from './img/ss2016-04-28at11_40_10.jpg';
import f4 from './img/ss2016-11-18at03_04_37.jpg';
import f5 from './img/BlockHop_2017-06-26_23-28-15.png';
import f6 from './img/firefox_2018-01-30_23-46-42.png';
import f7 from './img/solvespace_2018-02-21_23-48-32.png';
import f8 from './img/firefox_2018-04-08_18-07-45.png';

import { Part, TextPartType, ImagePartType, CodePartType, SideBySidePartType, ItemFormat } from './data_types';

const items: Array<ItemFormat> =  [
    {
        name: 'Clamp',
        date: '8/1/2020',
        description: '',
        img: f,
        contain: false,
        parts: [
            {
                type: 'text',
                text: "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-­‐two million miles is an utterly insignificant little blue green planet whose ape-­‐descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea. This planet hasʹor rather hadʹa problem, which was this: most of the people on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movements of small green pieces of paper, which is odd because on the whole it wasn't the small green pieces of paper that were unhappy. And so the problem remained; lots of the people were mean, and most of them were miserable, even the ones with digital watches. Many were increasingly of the opinion that they'd all made a big mistake in coming down from the trees in the first place. And some said that even the trees had been a bad move, and that no one should ever have left the oceans. And then, one Thursday, nearly two thousand years afterone man had been nailed to a tree for saying how great it would be to be nice to people for a change, one girl sitting on her own in a small cafe in Rickmansworth suddenly realized what it was that had been going wrong all this time, and she finally knew how the world could be made a good and happy place. This time it was right, it would work, and no one would have to get nailed to anything. Sadly, however, before she could get to a phone to tell anyone about it, a terribly stupid catastrophe occurred, and the idea was lost forever. This is not her story.",
            } as TextPartType,
            {
                type: 'code',
                language: 'javascript',
                text:
`import React from 'react';
export default {
    type: 'code',
    language: 'javascript',
    text: "import React from 'react'",
},`,
            } as CodePartType,
            {
                type: 'image',
                src: f,
            } as ImagePartType,
            {
                type: 'side',
                left: {
                    type: 'image',
                    src: f2,
                } as ImagePartType,
                right: {
                    type: 'code',
                    language: 'html',
                    text:
`<html>
    <body>
        <img src=${f2}/>
    </body>
</html>`,
                } as CodePartType,
            } as SideBySidePartType,
            {
                type: 'text',
                text: "But it is the story of that terrible stupid catastrophe and some of its consequences. It is also the story of a book, a book called The Hitch Hiker's Guide to the Galaxyʹnot an Earth book, never published on Earth, and until the terrible catastrophe occurred, never seen or heard of by any Earthman. Nevertheless, a wholly remarkable book. In fact it was probably the most remarkable book ever to come out of the great publishing houses of Ursa Minorʹof which no Earthman had ever heard either. Not only is it a wholly remarkable book, it is also a highly successful oneʹmore popular than the Celestial Home Care Omnibus, better selling than Fifty More Things to do in Zero Gravity, and more controversial than Oolon Colluphid's trilogy of philosophical blockbusters Where God Went Wrong, Some More of God's Greatest Mistakes and Who is this God Person Anyway? In many of the more relaxed civilizations on the Outer Eastern Rim ofthe Galaxy, the Hitch Hiker's Guide has already supplanted the great Encyclopedia Galactica as the standard repository of all knowledge and wisdom, for though it has many omissions and contains much that is apocryphal, or at least wildly inaccurate, it scores over the older, more pedestrian work in two important respects. First, it is slightly cheaper; and secondly it has the words DON'T PANIC inscribed in large friendly letters on its cover. But the story of this terrible, stupid Thursday, the story of its extraordinary consequences, and the story of how these consequences are inextricably intertwined with this remarkable book begins very simply. It begins with a house.",
            } as TextPartType
        ],
    },
    {
        name: 'Clamp',
        date: '8/1/2020',
        description: 'Long ass description text goes here so I can explain what the project is. Apparently this text is not long enough yet so I need to make it even longer so that it actually wraps onto a new line so i can see what it looks lke when such an event occurs, in which case i will evaluate what has occurred and make it work unto the way i wish it to',
        img: f2,
        contain: false,
        parts: [],
    },
    {
        name: 'Clamp',
        date: '8/1/2020',
        description: '',
        img: f3,
        contain: false,
        parts: [],
    },
    {
        name: 'hackmud',
        date: '8/1/2020',
        description: '',
        img: f4,
        contain: true,
        parts: [],
    },
    {
        name: 'physics',
        date: '8/1/2020',
        description: '',
        img: f5,
        contain: false,
        parts: [],
    },
    {
        name: 'stellar mapping',
        date: '8/1/2020',
        description: '',
        img: f6,
        contain: false,
        parts: [],
    },
    {
        name: 'fan holder #1',
        date: '8/1/2020',
        description: 'One of the first models for my 3d printer I made myself. Works, but no way to secure the fan or duct so they tend to fall off quite frequently',
        img: f7,
        contain: false,
        parts: [],
    },
    {
        name: 'pcb',
        date: '8/1/2020',
        description: '',
        img: f8,
        contain: false,
        parts: [],
    },
];

export default items;
