const router = require('express').Router()
const { csvToData } = require('../lib/library')
const { csvDataToSongCols, getOrBulkCreateDbItems } = require('../lib/utils/database-functions')
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const db = require('../models')
const models = db.master.models
const fs = require('fs')
const authChecker = require('../middlewares/authChecker')
const { getSongs, getLanguages, userInputToSongCols, bulkFindOrCreateMusicians, getMusicians } = require('../lib/utils/database-functions')
const { getAudioFeatures } = require('../lib/library')
const convertDurationMinSecToMs = require('../lib/utils/convert-duration-min-sec-to-ms')
const {Op} = require("sequelize");

router.get('/songs', async(req, res) => {
    console.log(Object.keys(db))
    try {

        let { number, category, order } = req.query

        const songs = await getSongs('master', number, category, order)

        res.status(200).json({songs})

    } catch (error) {
        res.status(400).json({error})
    }
})

router.get('/musicians', async(req, res) => {

    try {
        console.log('in')
        let {number, category, order} = req.query || {}

        console.log(req.query)
        const musicians = await getMusicians('master', number, category, order)

        res.status(200).json({musicians})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.get('/languages', async(req, res) => {

    try {
        console.log('languages in')
        let {number, category, order} = req.query || {}

        console.log(req.query)
        const musicians = await getLanguages('master', number, category, order)

        res.status(200).json({musicians})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})
router.delete('/songs/:id', authChecker, async(req, res) => {
    try {
        const song = await models.song.findByPk(req.params.id)

        await song.destroy()

        res.status(200).json({message: `Song ${song.title} is deleted from database`})
    } catch (error) {
        res.status(400).json({error})
    }
})

router.post('/songs', async (req, res) => {
    try {
        let { composers, songwriters, arrangers } = req.body || {}
        let saveData = await userInputToSongCols('master', req.body)

        let options = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            options.where = {
                spotifyLink: saveData.spotifyLink
            }
        }

        let [ song, isSongCreated ] = await models.song.findOrCreate(options)

        let dbComposers, dbSongwriters, dbArrangers;
        if(composers) {
            dbComposers = await bulkFindOrCreateMusicians('master', composers)
            await song.setComposers(dbComposers)
        }

        if(songwriters) {
            dbSongwriters = await bulkFindOrCreateMusicians('master', songwriters)
            await song.setSongwriters(dbSongwriters)
        }

        if(arrangers) {
            dbArrangers = await bulkFindOrCreateMusicians('master', arrangers)
            await song.setArrangers(dbArrangers)
        }

        if(isSongCreated) {
            res.status(201).json({result: song, message: "Song created successfully"})
        }

        res.status(200).json({result: song, message: "Song already in database"})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/songs/spotify', async (req, res) => {
    try {
        const trackInfo = await getAudioFeatures(req.query.trackId)

        // await models.song.create(saveData)
        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }
})

router.patch('/songs/:id', async (req, res) => {

    try {
        console.log(req.body)
        let { title, romTitle, artist, key, mode, durationMinSec, tempo, timeSignature, language, composers, songwriters, arrangers } = req.body || {}
        let song = await models.song.findByPk(req.params.id)

        let musician = await models.musician.findByPk(song.artistId)

        if(musician.name !== artist) {
            musician.name = artist
            await musician.save()
        }


        song.durationMs = convertDurationMinSecToMs(durationMinSec)


        const options = {
            where: { name: language},
            defaults: language
        }

        let [ dbLanguage, created] = await models.language.findOrCreate(options)

        song.languageId = dbLanguage.id


        const dbComposers = await bulkFindOrCreateMusicians('master', composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('master', songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('master', arrangers)

        const dbComposersIdArray = dbComposers.map(element => element[0].id)
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0].id)
        const dbArrangersIdArray = dbArrangers.map(element => element[0].id)


        await song.setComposers(dbComposersIdArray)
        await song.setSongwriters(dbSongwritersIdArray)
        await song.setArrangers(dbArrangersIdArray)

        let otherData = {
            title, romTitle, tempo, timeSignature, key, mode
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

router.post('/songs/csv', upload.single('file'), async(req, res) => {
    let data = await csvToData(req.file.path)
    const artistsNameArray = Array.from(new Set(data.map(song => song.artist).filter(artist => Boolean(artist))))
    const languagesNameArray = Array.from(new Set(data.map(song => song.language).filter(language => Boolean(language))))

    const allDbArtists = await getOrBulkCreateDbItems('master', 'musician', artistsNameArray)
    const allDbLanguages = await getOrBulkCreateDbItems('master', 'language', languagesNameArray)

    data = data.map(song => (
        {
            ...song,
            artistId: allDbArtists.findIndex(dbArtist => dbArtist.name === song.artist) > -1
                ?
                allDbArtists.find(dbArtist => dbArtist.name === song.artist).id
                :
                null,
            languageId: allDbLanguages.find(dbLanguage => dbLanguage.name === song.language)
                ?
                allDbLanguages.find(dbLanguage => dbLanguage.name === song.language).id
                :
                null,
        }
    ))

    const saveData = await Promise.all( await csvDataToSongCols('master', data))

    let songs = await models.song.bulkCreate(saveData)

let delimiter = /[,、]/g
    const promiseArray = saveData.map(async (element, index) => {

        if(element.songwriters) {
            let options = element.songwriters.split(delimiter).map(songwriter => ({name: songwriter }))
            let foundSongwriters = await models.musician.findAll({ where:
                    {   [Op.or]: options}})
            await songs[index].setSongwriters(foundSongwriters)
        }


        if(element.composers) {
            const options = element.composers.split(delimiter).map(composer => ({name: composer}))
            const foundComposers = await models.musician.findAll({ where:
                    {   [Op.or]: options}})
            await songs[index].setComposers(foundComposers)

        }

        if(element.arrangers) {
            const options = element.arrangers.split(delimiter).map(arranger => ({name: arranger}))
            let foundArrangers = await models.musician.findAll({ where:
                    {   [Op.or]: options}})
            await songs[index].setArrangers(foundArrangers)
        }

    })


   await Promise.all(promiseArray)

    fs.unlink(req.file.path, (err) => {
        if(err) console.log(err)
        else {
            console.log(`${req.file.path} is deleted`)
            res.status(200).json({message: "success"})
        }
    })
})

module.exports = router