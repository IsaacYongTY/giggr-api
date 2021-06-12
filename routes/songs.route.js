const router = require('express').Router()

const fs = require('fs')
const models = require('../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const authChecker = require('../middlewares/authChecker')
const { getSongs, getOrCreateArtist, getOrCreateLanguage, csvDataToSongCols, userInputToSongCols } = require("../lib/database-functions")
const { convertKeyToKeyModeInt, getAudioFeatures, convertDurationToMinSec, convertMinSecToMs, convertKeyModeIntToKey, csvToData } = require('../lib/library')

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

router.post('/', async (req, res) => {
    try {

        let saveData = await userInputToSongCols('database1', req.body)

        let response = await models.song.create(saveData)
        console.log("success")
        res.status(200).json({result: response})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/spotify', async (req, res) => {
    try {

        const trackInfo = await getAudioFeatures(req.query.trackId)

        let {
            title,
            artist,
            key,
            mode,
            tempo,
            spotifyLink,
            durationMs,
            timeSignature,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified,
            dateReleased,
            romTitle,
            language,
            initialism

        } = trackInfo || {}
        console.log(trackInfo)
        // const artistId = await getArtistId(artist)
        const userKey = convertKeyModeIntToKey(key, mode)

        const result = {
            title,
            artist,
            key: userKey,
            tempo,
            spotifyLink,
            durationMs,
            timeSignature,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified,
            dateReleased,
            romTitle,
            language,
            initialism
        }

        // await models.song.create(saveData)
        res.status(200).json({result})

    } catch (err) {
        res.status(400).json({err})
    }
})

router.patch('/:id', async (req, res) => {

    try {
        console.log('in')
        let { title, romTitle, artist, key, durationMinSec, tempo, timeSignature, language } = req.body || {}
        let song = await models.song.findByPk(req.params.id)
        let musician = await models.musician.findByPk(song.artistId)

        if(musician.name !== artist) {
            musician.name = artist
            await musician.save()
        }

        if(durationMinSec) {
            song.durationMs = convertMinSecToMs(durationMinSec)
        }

        // if(key) {
        //     let keyMode = convertKeyToKeyModeInt(key)
        //     song.key = keyMode[0]
        //     song.mode = keyMode[1]
        // }


        if(language) {
            let { id: languageId } = await getOrCreateLanguage('database1', language)
            song.languageId = languageId
        }

        console.log(req.body)
        let otherData = {
            title, romTitle, tempo, timeSignature
        }

        for(const props in otherData) {
            if(otherData[props]) {
                song[props] = otherData[props]
            }
        }
        console.log(song)
        await song.save()


        res.status(200).json({message: "Edit successful", song: song})
    } catch (error) {
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