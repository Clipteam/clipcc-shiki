import musicIconURL from './extensions/music/music.png';
import musicInsetIconURL from './extensions/music/music-small.svg';

import penIconURL from './extensions/pen/pen.png';
import penInsetIconURL from './extensions/pen/pen-small.svg';

import videoSensingIconURL from './extensions/videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './extensions/videoSensing/video-sensing-small.svg';

import text2speechIconURL from './extensions/text2speech/text2speech.png';
import text2speechInsetIconURL from './extensions/text2speech/text2speech-small.svg';

import translateIconURL from './extensions/translate/translate.png';
import translateInsetIconURL from './extensions/translate/translate-small.png';
import makeymakeyIconURL from './extensions/makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './extensions/makeymakey/makeymakey-small.svg';

import microbitIconURL from './extensions/microbit/microbit.png';
import microbitInsetIconURL from './extensions/microbit/microbit-small.svg';

import ev3IconURL from './extensions/ev3/ev3.png';
import ev3InsetIconURL from './extensions/ev3/ev3-small.svg';

import wedo2IconURL from './extensions/wedo2/wedo.png';
import wedo2InsetIconURL from './extensions/wedo2/wedo-small.svg';

import boostIconURL from './extensions/boost/boost.png';
import boostInsetIconURL from './extensions/boost/boost-small.svg';
import gdxforIconURL from './extensions/gdxfor/gdxfor.png';
import gdxforInsetIconURL from './extensions/gdxfor/gdxfor-small.svg';
import HTTPIOImage from './extensions/HTTPIO/HTTPIO.png';
import HTTPIOInsetImage from './extensions/HTTPIO/clipcc.httpio-small.svg';

import JSONImage from './extensions/JSON/JSON.png';
import JSONInsetImage from './extensions/JSON/ccjson-small.svg';

const builtinExtensions = [
    {
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        author: 'Scratch Team',
        name: 'Music',
        description: 'Play instruments and drums.'
    },
    {
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        author: 'Scratch Team',
        name: 'Pen',
        description: 'Draw with your sprites.'
    },
    {
        extensionId: 'httpio',
        iconURL: HTTPIOImage,
        insetIconURL: HTTPIOInsetImage,
        author: 'Clip Team',
        name: 'HTTPIO',
        description: 'Feel the charm of Internet!',
        requirement: ['internet']
    },
    {
        extensionId: 'ccjson',
        iconURL: JSONImage,
        insetIconURL: JSONInsetImage,
        author: 'Clip Team',
        name: 'JSON',
        description: 'Useful JSON extension.'
    },
    {
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        author: 'Scratch Team',
        name: 'Video Sensing',
        description: 'Sense motion with the camera.'
    },
    {
        extensionId: 'text2speech',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        author: ['Scratch Team', 'Amazon Web Services'],
        name: 'TTS',
        description: 'Make your projects talk.',
        requirement: ['internet']
    },
    {
        extensionId: 'translate',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        author: ['Scratch Team', 'Google'],
        name: 'Translate',
        description: 'Translate text into many languages.',
        requirement: ['internet']
    }
];

export default builtinExtensions;