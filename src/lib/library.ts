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
