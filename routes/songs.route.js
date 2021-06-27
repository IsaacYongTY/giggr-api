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
const {getOrBulkCreateDbItems} = require("../lib/utils/database-functions");



router.get('/', authChecker, async(req, res) => {

    try {
        let {number, category, order} = req.query
        console.log('ininin')
        console.log(req.query)
        console.log(req.user)
        const songs = await getSongs('database1', number, category, order, req.user)
        console.log('working')
        const genres = await models.genre.findAll()
        console.log(genres)
        const moods = await models.mood.findAll()
        const tags = await models.tag.findAll()
        const languages = await models.language.findAll()
        console.log('wo')
        res.status(200).json({songs, languages, genres, moods, tags })

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


router.post('/', authChecker, async (req, res) => {
    try {
        console.log(req.body)
        let saveData = await userInputToSongCols('database1', req.body, req.user)

        let options = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            options.where = {
                userId: req.user.id,
                spotifyLink: saveData.spotifyLink
            }
        }

        let [song] = await models.song.findOrCreate(options)

        const dbComposers = await bulkFindOrCreateMusicians('database1', req.body.composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('database1', req.body.songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('database1', req.body.arrangers)
        const dbGenres = await getOrBulkCreateDbItems('database1', 'genre', req.body.genres)
        const dbMoods = await getOrBulkCreateDbItems('database1', 'mood', req.body.moods)
        const dbTags = await getOrBulkCreateDbItems('database1', 'tag', req.body.tags)

        const dbComposersIdArray = dbComposers.map(element => element[0])
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0])
        const dbArrangersIdArray = dbArrangers.map(element => element[0])
        const dbGenresIdArray = dbGenres.map(element => element[0])
        const dbMoodsIdArray = dbMoods.map(element => element[0])
        const dbTagsIdArray = dbTags.map(element => element[0])


        await song.setComposers(dbComposersIdArray)
        await song.setSongwriters(dbSongwritersIdArray)
        await song.setArrangers(dbArrangersIdArray)
        await song.setGenres(dbGenresIdArray)
        await song.setMoods(dbMoodsIdArray)
        await song.setTags(dbTagsIdArray)

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

router.patch('/:id', authChecker, async (req, res) => {

    try {
        console.log(req.body)
        console.log('here')
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
        console.log(req.body)

        const dbComposers = await bulkFindOrCreateMusicians('database1', composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('database1', songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('database1', arrangers)
        if(req.body.genres) {
            const dbGenres = await getOrBulkCreateDbItems('database1', 'genre', req.body.genres)
            await song.setGenres(dbGenres.map(genre => genre.id))
        }

        if(req.body.tags) {
            const dbTags = await getOrBulkCreateDbItems('database1', 'tag', req.body.tags)

            await song.setTags(dbTags.map(tag => tag.id))
        }

        if(req.body.moods) {
            const dbMoods = await getOrBulkCreateDbItems('database1', 'mood', req.body.moods)
            await song.setMoods(dbMoods.map(mood => mood.id))
        }

        const dbComposersIdArray = dbComposers.map(element => element[0])
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0])
        const dbArrangersIdArray = dbArrangers.map(element => element[0])




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
        console.log(song)
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