const router = require('express').Router()
const db = require('../models')
const fs = require('fs')
const models = require('../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const authChecker = require('../middlewares/authChecker')

const { getSongs, csvDataToSongCols, userInputToSongCols, bulkFindOrCreateMusicians } = require("../lib/utils/database-functions")
const { getAudioFeatures, csvToData } = require('../lib/library')
const convertDurationMinSecToMs = require('../lib/utils/convert-duration-min-sec-to-ms')



router.get('/', async(req, res) => {

    try {
        let {number, category, order} = req.query

        console.log(req.query)
        const songs = await getSongs('database1', number, category, order)

        res.status(200).json({songs})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


router.get('/:id', async(req, res) => {

    try {

        const song = await models.song.findByPk(req.params.id,{
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
            }]
        })

        res.status(200).json({song})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        let saveData = await userInputToSongCols('database1', req.body)

        let options = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            options.where = {
                spotifyLink: saveData.spotifyLink
            }
        }

        let [song] = await models.song.findOrCreate(options)

        const dbComposers = await bulkFindOrCreateMusicians('database1', req.body.composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('database1', req.body.songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('database1', req.body.arrangers)

        const dbComposersIdArray = dbComposers.map(element => element[0].id)
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0].id)
        const dbArrangersIdArray = dbArrangers.map(element => element[0].id)


        await song.setComposers(dbComposersIdArray)
        await song.setSongwriters(dbSongwritersIdArray)
        await song.setArrangers(dbArrangersIdArray)

        res.status(200).json({result: song})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/spotify', async (req, res) => {
    try {

        const trackInfo = await getAudioFeatures(req.query.trackId)

        // await models.song.create(saveData)
        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }
})

router.patch('/:id', async (req, res) => {

    try {
        console.log(req.body)

        let { title, romTitle, artist, key, mode, durationMinSec, tempo, timeSignature, language, composers,
            initialism, songwriters, arrangers, spotifyLink, youtubeLink, otherLink } = req.body || {}

        let song = await models.song.findByPk(req.params.id)

        console.log(artist.toLowerCase())
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


        const dbComposers = await bulkFindOrCreateMusicians('database1', composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('database1', songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('database1', arrangers)

        const dbComposersIdArray = dbComposers.map(element => element[0].id)
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0].id)
        const dbArrangersIdArray = dbArrangers.map(element => element[0].id)

        await song.setComposers(dbComposersIdArray)
        await song.setSongwriters(dbSongwritersIdArray)
        await song.setArrangers(dbArrangersIdArray)

        let otherData = {
            title, romTitle, tempo, timeSignature, initialism, key, mode, spotifyLink, youtubeLink, otherLink
        }

        for(const props in otherData) {
            if(otherData[props] !== undefined) {
                song[props] = otherData[props]

            }
        }
        console.log('after save')
        console.log(song)
        await song.save()

        res.status(200).json({message: "Edit successful", song: song})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.delete('/:id', authChecker, async(req, res) => {
    try {
        const song = await models.song.findByPk(req.params.id)

        await song.destroy()

        res.status(200).json({message: `Song ${song.title} is deleted from database`})
    } catch (error) {
        res.status(400).json({error})
    }
})

router.post('/spotify', async (req, res) => {
    try {
        const trackInfo = await getAudioFeatures(req.query.trackId)
        console.log(trackInfo)
        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }

})

router.post('/composer/:id', async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)

        let { composerIdArray } = req.body || {}
        const song = await models.song.findByPk(req.params.id)

        await song.addComposers(composerIdArray, { as: "composers"})

        res.status(200).json({message: "added successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})



router.post('/csv', upload.single('file'), async (req, res) => {

    try {
        let data = await csvToData(req.file.path)
        const songData = await Promise.all( await csvDataToSongCols('database1', data))
        const response = await models.song.bulkCreate(songData)

        fs.unlink(req.file.path, (err) => {
            if(err) console.log(err)
            else {
                console.log(`${req.file.path} is deleted`)
                res.status(200).json({message: "success"})
            }
        })

    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router