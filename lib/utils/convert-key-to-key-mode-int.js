
const keyIntMap = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

module.exports = function convertKeyToKeyModeInt(keyString) {

    let note;
    let mode = 1;

    if (keyString[keyString.length - 1] === 'm') {
        mode = 0
        note = keyString.slice(0, keyString.length - 1)
    } else {
        note = keyString
    }

    //enharmonic
    if(note === 'C#') {
        note = 'Db'
    }

    if(note === 'F#') {
        note = 'Gb'
    }

    if(note === 'G#') {
        note = 'Ab'
    }

    if(!keyIntMap.includes(note)) return undefined

    return [keyIntMap.indexOf(note), mode]
}

