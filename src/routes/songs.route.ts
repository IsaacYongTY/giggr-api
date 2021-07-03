import findDbCategoriesWithNameArray from "../lib/database-utils/find-db-categories-with-name-array";

const router = require('express').Router()
const db = require('../models')
const fs = require('fs')
const models = require('../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/", limits: { fileSize: 1024 * 1024}})
const { getSongs, userInputToSongCols, createItemsRelatedToSong } = require("../lib/utils/database-functions")

import findDbMusiciansWithNameArray from "../lib/database-utils/find-db-musicians-with-name-array";
const { getOrBulkCreateDbItems } = require("../lib/utils/database-functions");
import convertRawDataToSongCols from "../lib/database-utils/convert-raw-data-to-song-cols";
import { getAudioFeatures, parseCsvToRawData } from '../lib/library'
import convertDurationMinSecToMs from '../lib/utils/convert-duration-min-sec-to-ms'
import convertNestedArraysToStringArray from "../lib/utils/convert-nested-arrays-to-string-array";
import { Request, Response } from "express";

interface RequestWithUser extends Request {
    user: {
        id: number
    }
}
router.get('/', async(req : RequestWithUser, res: Response) => {

    try {
        let {number, category, order} = req.query

        const songs = await getSongs('database1', number, category, order, req.user)

        res.status(200).json({ songs })

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


router.get('/:id', async(req: RequestWithUser, res: Response) => {

    try {

        const song = await models.song.findByPk(req.params.id, {
            include: [{
                model: models.musician,
                as: "artist"
            }, {
                model: models.musician,
                as: "composers",
                attributes: ["id", "name"]
            }, {
                model: models.musician,
                as: "songwriters",
                attributes: ["id", "name"]
            }, {
                model: models.musician,
                as: "arrangers",
                attributes: ["id", "name"]
            }, {
                model: models.language,
                attributes: ["id", "name"]
            }, {
                model: models.genre,
                attributes: ["id", "name"]

            }, {
                model: models.mood,
                attributes: ["id", "name"]
            }, {
                model: models.tag,
                attributes: ["id", "name"]
            }]
        })

        res.status(200).json({song})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


router.post('/', async (req : RequestWithUser, res: Response) => {
    try {
        console.log(req.body)
        console.log(req.user)
        let saveData = await userInputToSongCols('database1', req.body, req.user)
        console.log('here')
        let options = {
            defaults: saveData,
            where: {}
        }

        if(saveData.spotifyLink) {
            options.where = {
                userId: req.user.id,
                spotifyLink: saveData.spotifyLink
            }
        }

        let [song] = await models.song.findOrCreate(options)

        console.log(song)
        await createItemsRelatedToSong('database1', song, req.body, req.user.id)

        res.status(200).json({result: song})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/spotify', async (req : RequestWithUser, res: Response) => {
    try {
        const { trackId } = req.query as {[key: string] : string}

        if(!trackId) {
            return res.status(400).json({error: "No track id provided"})
        }

        const trackInfo = await getAudioFeatures(trackId)
        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }
})

interface Musician {
    [key : string] : any,
    name: string,
    romName: string,
    enName: string
}

interface Song {
    [key: string] : any,
    id: number,
    title: string,
    romTitle: string,
    artist: Musician
    artistId: number,
    tempo: number,
    createdAt: Date,
    updatedAt: Date,
    dateReleased: Date,
    durationMinSec: string,
    durationMs: number,
    timeSignature: string,
    initialism: string,
    key: number,
    myKey?: string,
    languageId: number,
    mode: number,

    spotifyLink: string,
    youtubeLink: string,
    otherLink: string,

    acousticness: number,
    valence: number,
    instrumentalness: number,
    danceability: number,
    energy: number,
    verified: boolean,
    mood: [],
    genre: [],
    tags: [],
    performStatus?: string,
    status?: string,
    // enName: string,

}
router.patch('/:id', async (req : RequestWithUser, res: Response) => {

    try {

        let { title, romTitle, artist, key, mode, durationMinSec, tempo, timeSignature, language, composers,
            initialism, songwriters, arrangers, spotifyLink, youtubeLink, otherLink } = req.body || {}

        let song : Song = await models.song.findByPk(req.params.id)

        let musicianOptions = {
            defaults: artist,
            where: { name: artist }
        }

        let [ dbMusician ] = await models.musician.findOrCreate(musicianOptions)

        song.artistId = dbMusician.id
        song.durationMs = convertDurationMinSecToMs(durationMinSec)

        if(language) {
            let options = {
                defaults: language.toLowerCase(),
                where: { name: language.toLowerCase() }
            }
            const [dbLanguage, created] = await models.language.findOrCreate(options)

            song.languageId = dbLanguage.id
        }
        console.log(req.body)

        await createItemsRelatedToSong('database1', song, req.body, req.user.id)

        let otherData : any = {
            title, romTitle, tempo, timeSignature, initialism, key, mode, spotifyLink, youtubeLink, otherLink
        }

        for(const props in otherData) {
            if(otherData[props] !== undefined) {
                song[props] = otherData[props]
            }
        }

        await song.save()

        res.status(200).json({message: "Edit successful", song: song})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.delete('/:id', async(req: RequestWithUser, res: Response) => {
    try {
        const song = await models.song.findByPk(req.params.id)

        await song.destroy()

        res.status(200).json({message: `Song ${song.title} is deleted from database`})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


interface RequestWithFileUser extends Request{
    file: any
    user: {
        id: number
    }
}

router.post('/csv', upload.single('file'), async (req: RequestWithFileUser, res: Response) => {

    if(!req.file.path) {
        return
    }

    let rawData : any = await parseCsvToRawData(req.file.path)

    const artistsNameArray = convertNestedArraysToStringArray(rawData.map((song: any) => song.artist))
    await getOrBulkCreateDbItems('database1', 'musician', artistsNameArray, req.user.id)

    const languagesNameArray = convertNestedArraysToStringArray(rawData.map((song: any) => song.language))
    await getOrBulkCreateDbItems('database1', 'language', languagesNameArray, req.user.id)

    const composersNameArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.composers))
    await getOrBulkCreateDbItems('database1', 'musician', composersNameArray, req.user.id)

    const songwritersNameArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.songwriters))
    await getOrBulkCreateDbItems('database1', 'musician', songwritersNameArray, req.user.id)

    const arrangersNameArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.arrangers))
    await getOrBulkCreateDbItems('database1', 'musician', arrangersNameArray, req.user.id)

    const genresStringArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.genres))
    await getOrBulkCreateDbItems('database1', 'genre', genresStringArray, req.user.id)

    const moodsStringArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.moods))
    await getOrBulkCreateDbItems('database1', 'mood', moodsStringArray, req.user.id)

    const tagsStringArray = convertNestedArraysToStringArray(rawData.map((song: Song) => song.tags))
    await getOrBulkCreateDbItems('database1', 'tag', tagsStringArray, req.user.id)


    const saveData = await Promise.all( await convertRawDataToSongCols('database1', rawData, req.user.id))

    let songs = await models.song.bulkCreate(saveData)


    const promiseArray = saveData.map(async (row: any, index) => {

        if(row.artist) {
            let foundArtist = await models.musician.findOne({where: { name: row.artist }})
            await songs[index].setArtist(foundArtist)
        }

        if(row.language) {
            let foundLanguage = await models.language.findOne({where: { name: row.language }})
            await songs[index].setLanguage(foundLanguage)
        }

        if(row.songwriters) {
            let foundSongwriters = await findDbMusiciansWithNameArray(row.songwriters)
            await songs[index].setSongwriters(foundSongwriters)
        }


        if(row.composers) {
            let foundComposers = await findDbMusiciansWithNameArray(row.composers)
            await songs[index].setComposers(foundComposers)
        }

        if(row.arrangers) {
            let foundArrangers = await findDbMusiciansWithNameArray(row.arrangers)
            await songs[index].setArrangers(foundArrangers)
        }

        if(row.genres) {
            let foundGenres = await findDbCategoriesWithNameArray(row.genres, "genre")
            await songs[index].setGenres(foundGenres)
        }

        if(row.moods) {
            let foundMoods = await findDbCategoriesWithNameArray(row.moods, 'mood')
            await songs[index].setMoods(foundMoods)
        }

        if(row.tags) {
            let foundTags = await findDbCategoriesWithNameArray(row.tags, 'tag')
            await songs[index].setTags(foundTags)
        }

    })


    await Promise.all(promiseArray)

    fs.unlink(req.file.path, (err: any) => {
        if(err) console.log(err)
        else {
            console.log(`${req.file.path} is deleted`)
            res.status(200).json({message: "success"})
        }
    })
})

module.exports = router