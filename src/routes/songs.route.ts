import fs from 'fs'
import multer from 'multer'
import userInputToSongCols from "../lib/database-utils/user-input-to-song-cols";
import findOrBulkCreateDbItems from "../lib/database-utils/find-or-bulk-create-db-items";
import createItemsRelatedToSong from "../lib/database-utils/create-items-related-to-songs";
import getSongs from "../lib/database-utils/get-songs";
import findDbMusiciansWithNameArray from "../lib/database-utils/find-db-musicians-with-name-array";
import findDbCategoriesWithNameArray from "../lib/database-utils/find-db-categories-with-name-array";
import convertRawDataToSongCols from "../lib/database-utils/convert-raw-data-to-song-cols";
import processRawSpotifyTrackData from "../lib/utils/get-audio-features"
import parseCsvToRawData from "../lib/utils/parse-csv-to-raw-data";
import convertDurationMinSecToMs from '../lib/utils/convert-duration-min-sec-to-ms'
import convertNestedArraysToStringArray from "../lib/utils/convert-nested-arrays-to-string-array";
import { Request, Response } from "express";
import {getDataFromSpotify} from "../lib/utils/get-data-from-spotify";
import {Op} from "sequelize";
import removeDuplicateFromStringArray from "../lib/utils/remove-duplicates-from-string-array";
import bulkDeleteSongsFromDatabase from "../lib/database-utils/bulk-delete-songs-from-database";
import Song from "../lib/types/Song";
import findOrBulkCreateMusicians from "../lib/database-utils/find-or-bulk-create-musicians";
import setMusicianRole from "../lib/database-utils/set-musician-role";
const router = require('express').Router()
const upload = multer({dest: "uploads/", limits: { fileSize: 1024 * 1024}})
const db = require('../models')
const models = require('../models').database1.models

interface RequestWithUser extends Request {
    user: {
        id: number
    }
}

router.get('/', async(req : RequestWithUser, res: Response) => {

    try {

        let queryObject = {
            number: req.query.number as string,
            category: req.query.category as string,
            order: req.query.order as string,
        }

        console.log('in')
        const songs = await getSongs(queryObject, req.user.id)

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

        let saveData = await userInputToSongCols(req.body, req.user.id)

        interface SequelizeOption {
            defaults: any,
            where?: any
        }
        let options : SequelizeOption = {
            defaults: saveData,
        }

        if(saveData.spotifyLink) {
            options.where = {
                [Op.and]: [ {
                    userId: req.user.id
                }, {
                    spotifyLink: saveData.spotifyLink
                }]

            }

            let [song, created] = await models.song.findOrCreate(options)

            await createItemsRelatedToSong(song, req.body, req.user.id)

            return res.status(200).json({result: song})
        }

        let song = await models.song.create(saveData)
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
        const { audioFeatures, singleTrack } = await getDataFromSpotify(trackId)
        const trackInfo = await processRawSpotifyTrackData(audioFeatures, singleTrack)

        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }
})



router.put('/:id', async (req : RequestWithUser, res: Response) => {

    try {

        let { title, romTitle, artist, key, myKey, mode, durationMinSec, tempo, timeSignature, language,
            initialism, spotifyLink, youtubeLink, otherLink, dateReleased, status } = req.body || {}

        console.log(req.body)
        let song : Song = await models.song.findByPk(req.params.id)

        let musicianOptions = {
            defaults: { name: artist, userId: req.user.id },
            where: { name: artist, userId: req.user.id }
        }

        let [ dbMusician ] = await models.musician.findOrCreate(musicianOptions)

        song.artistId = dbMusician.id
        song.durationMs = convertDurationMinSecToMs(durationMinSec)

        if(language) {
            let options = {
                defaults: { name: language, userId: req.user.id },
                where: { name: language, userId: req.user.id }
            }
            const [dbLanguage, created] = await models.language.findOrCreate(options)

            song.languageId = dbLanguage.id
        }

        await createItemsRelatedToSong(song, req.body, req.user.id)

        let otherData : any = {
            title, romTitle, tempo, timeSignature, initialism, key, myKey, mode, spotifyLink, youtubeLink, otherLink, dateReleased, status
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


router.delete("/", async (req : RequestWithUser, res: Response) => {

    const { idArray } : { idArray : any[] } = req.body || {}
    const isArrayAllNumbers = idArray?.every(id => typeof id === "number" )

    try {
        if(!isArrayAllNumbers) {
            res.status(400).json({ error: "All elements in the array must be a number!" })
            return
        }

        await bulkDeleteSongsFromDatabase(idArray)
        res.status(200).json({idArray})
    } catch(err) {
        console.log(err)
        res.status(400).json({error: "something went wrong"})
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

    if(!req.file?.path) {
        return res.status(400).json({error: "File path doesn't exist"})
    }

    let rawData : any = await parseCsvToRawData(req.file.path)

    const artistsNameArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: any) => song.artist))
    )

    await findOrBulkCreateMusicians(artistsNameArray, req.user.id)


    const languagesNameArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: any) => song.language))
    )
    await findOrBulkCreateDbItems('language', languagesNameArray, req.user.id)

    const composersNameArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.composers))
    )
    await findOrBulkCreateMusicians(composersNameArray, req.user.id)

    const songwritersNameArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.songwriters))
    )
    await findOrBulkCreateMusicians(songwritersNameArray, req.user.id)

    const arrangersNameArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.arrangers))
    )
    await findOrBulkCreateMusicians(arrangersNameArray, req.user.id)

    const genresStringArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.genres))
    )
    await findOrBulkCreateDbItems('genre', genresStringArray, req.user.id)

    const moodsStringArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.moods))
    )
    await findOrBulkCreateDbItems('mood', moodsStringArray, req.user.id)

    const tagsStringArray = removeDuplicateFromStringArray(
        convertNestedArraysToStringArray(rawData.map((song: Song) => song.tags))
    )
    await findOrBulkCreateDbItems('tag', tagsStringArray, req.user.id)


    const saveData = convertRawDataToSongCols(rawData, req.user.id)

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