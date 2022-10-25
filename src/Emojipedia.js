import React from 'react';
import Card from './components/Card';

const data = [
    {
        id: 1,
        emoji: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/flexed-biceps_1f4aa.png',
        name: 'Tense Biceps',
        meaning:
            '“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.',
    },
    {
        id: 2,
        emoji: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/folded-hands_1f64f.png',
        name: 'Person With Folded Hands',
        meaning:
            'Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.',
    },
    {
        id: 3,
        emoji: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/rolling-on-the-floor-laughing_1f923.png',
        name: 'Rolling On The Floor, Laughing',
        meaning:
            'This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.',
    },
    {
        id: 4,
        emoji: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/melting-face_1fae0.png',
        name: 'Melting Face',
        meaning:
            'A yellow smiley face melting into a puddle. This quality lends this emoji to sarcasm. Can be used literally to talk about extreme heat. Can also be used metaphorically to talk about embarrassment, shame, or a slowly sinking sense of dread.',
    },
];

const Emojipedia = () => {
    return (
        <>
            {data.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </>
    );
};

export default Emojipedia;
