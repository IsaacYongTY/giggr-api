import fs from "fs"
import csv from 'csv-parser'

import convertTempo from './utils/convert-tempo'
// @ts-ignore
import containsChinese from 'contains-chinese'
import getRomTitle from './utils/get-rom-title'

import SpotifyWebApi from 'spotify-web-api-node'
import removeBrackets from './utils/remove-brackets'

const getInitialism = (input : string) => removeBrackets(input).split(' ').reduce((acc, word) => acc + word[0].toLowerCase(), '')

const keyIntMap = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

const convertTime = (spotifyTime : string | number) => `${spotifyTime}/4`
console.log('compile1')
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export async function getAudioFeatures(trackId : string) {

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
            dateReleased: album.release_date,
            romTitle: "",
            language: "",
            initialism: ""
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


interface CsvRawSong {
    title: string
}
export function parseCsvToRawData(csvFile : any) : Promise<CsvRawSong[]>{

    return new Promise((resolve, reject) => {
        let data : any[] = []

        fs.createReadStream(csvFile)
            .pipe(csv({
                mapHeaders: ({ header, index}) => header.trim(),
                mapValues: ({ header, index, value}) => value.trim(),

                })
            )
            .on('data', async (row) => {

                if(row.title) {
                    data.push(row)
                }

            })
            .on('end', async () => {
                console.log("CSV parsed successfully")
                resolve(data)
            })
            .on('error', reject)

    })

}
