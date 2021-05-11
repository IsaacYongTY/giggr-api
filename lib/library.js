const assignPitchClass = require('./assign-pitch-class')
const convertTempo = require('./convert-tempo')
const convertTime = require('./convert-time')

const containsChinese = require('contains-chinese')
const getRomTitle = require('./get-rom-title')

const SpotifyWebApi = require('spotify-web-api-node')
const removeBrackets = require('./remove-brackets')

const getFirstAlphabet = (input) => removeBrackets(input).split(' ').reduce((acc, word) => acc + word[0].toLowerCase(), '')


const convertDurationToMinSec = function (spotifyDuration) {

    let timeInSec = Math.round(spotifyDuration/1000)
    let min = Math.floor(timeInSec/60)
    let sec = Math.round(timeInSec - min * 60)

    return `${min}:${sec < 10 ? sec + '0' : sec}`
}

const convertMinSecToMs = (durationMinSec) => (parseInt(durationMinSec.split(':')[0]) * 60 + parseInt(durationMinSec.split(':')[1])) * 1000

const keyIntMap = {
    0: "C",
    1: "Db",
    2: "D",
    3: "Eb",
    4: "E",
    5: "F",
    6: "Gb",
    7: "G",
    8: "Ab",
    9: "A",
    10: "Bb",
    11: "B",
}

const keyIntMap2 = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

const convertKeyToKeyModeInt = function (keyString) {

    let note;
    let mode = 0;

    if (keyString[keyString.length - 1] === 'm') {
        mode = 1
        note = keyString.slice(0, keyString.length - 1)
    } else {
        note = keyString
    }

    if(!keyIntMap2.includes(note)) return undefined

    return [keyIntMap2.indexOf(note), mode]

}


// const convertIntToKey = function (key, mode, direction) {
//
//     if (direction === 'forward') {
//         return keyIntMap[key]
//     }
//
//     if(direction === 'backward') {
//         for(const keyValue in keyIntMap) {
//             if(keyValue === key) {
//                 return keyValue
//             }
//         }
//     }
//
//     if (!direction) {
//         return "please give a direction, forward or backward"
//     }
// }

convertIntToKey = function(key, mode) {
    let result = keyIntMap[key]

    if(mode === 1) {
        result += 'm'
    }
    return result
}


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

const getAudioFeatures = async(trackId) => {

    try {
        const code = await spotifyApi.clientCredentialsGrant()

        await spotifyApi.setAccessToken(code.body.access_token)

        let data = await spotifyApi.getAudioFeaturesForTrack(trackId)
        const trackInfo = await spotifyApi.getTrack(trackId)

        let {
            key,
            mode,
            tempo,
            time_signature,
            duration_ms,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
        } = data.body
        let { artists, name, album, external_urls: { spotify } } = trackInfo.body

        const processedTrackData = {
            title: name,
            artist: artists[0].name,
            key,
            mode,
            tempo: convertTempo(tempo, time_signature),
            spotifyLink: spotify,
            durationMs: duration_ms,
            durationMinSec: convertDurationToMinSec(duration_ms),
            time: convertTime(time_signature),
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified: false,
            dateReleased: album.release_date
        };

        const isChinese = containsChinese(processedTrackData.title)

        if (isChinese) {
            processedTrackData.romTitle = getRomTitle(processedTrackData.title)
            processedTrackData.language = 'mandarin'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.romTitle)
        } else {
            processedTrackData.language = 'english'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.title)
        }

        return processedTrackData

    } catch (e) {
        return e
    }
}

function addGenresToDatabase(genresString) {
    console.log(genresString.split(',').map(genre => genre.trim()))
    return genresString.split(',').map(genre => genre.trim())
}

module.exports = {
    convertMinSecToMs,
    convertDurationToMinSec,
    convertKeyToKeyModeInt,
    convertIntToKey,
    getAudioFeatures,
    addGenresToDatabase
}