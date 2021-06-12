const assignPitchClass = require('./assign-pitch-class')
const convertTempo = require('./convert-tempo')
const convertTime = require('./convert-time')
const fs = require("fs")
const csv = require('csv-parser')
const containsChinese = require('contains-chinese')
const getRomTitle = require('./get-rom-title')

const SpotifyWebApi = require('spotify-web-api-node')
const removeBrackets = require('./remove-brackets')

const getInitialism = (input) => removeBrackets(input).split(' ').reduce((acc, word) => acc + word[0].toLowerCase(), '')

const keyIntMap = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

function convertMinSecToMs(durationMinSec) {
    return parseInt(durationMinSec.split(':')[0]) * 60 + parseInt(durationMinSec.split(':')[1]) * 1000
}


const convertKeyToKeyModeInt = function (keyString) {

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
            timeSignature: convertTime(time_signature),
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
            processedTrackData.initialism = getInitialism(processedTrackData.romTitle)
        } else {
            processedTrackData.language = 'english'
            processedTrackData.initialism = getInitialism(processedTrackData.title)
        }

        console.log(processedTrackData)
        return processedTrackData

    } catch (e) {
        return e
    }
}

function addGenresToDatabase(genresString) {
    return genresString.split(',').map(genre => genre.trim())
}

function csvToData(csvFile) {

    return new Promise((resolve, reject) => {
        let data = []

        fs.createReadStream(csvFile)
            .pipe(csv())
            .on('data', async (row) => {
                data.push(row)
            })
            .on('end', async () => {
                console.log("CSV parsed successfully")
                resolve(data)
            })
            .on('error', reject)

    })

}
module.exports = {
    convertMinSecToMs,
    convertKeyToKeyModeInt,
    getAudioFeatures,
    addGenresToDatabase,
    csvToData,
}