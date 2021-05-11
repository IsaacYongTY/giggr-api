const router = require('express').Router()
const csv = require('csv-parser')
const fs = require('fs')
const models = require('../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/"})

const { getSongs, getArtistId, getLanguageId, csvUserInputToSongCols, userInputToSongCols } = require("../lib/database-functions")
const { convertKeyToKeyModeInt, getAudioFeatures, convertDurationToMinSec, convertMinSecToMs, convertIntToKey } = require('../lib/library')

router.get('/', async(req, res) => {

    try {
        let {number, category, order} = req.query

        const songs = await getSongs(number, category, order)

        res.status(200).json({songs})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/', async (req, res) => {
    try {
        const artist = await models.musician.findOne({
            where: {
                enName: req.body.artist
            }
        })


        let saveData = await userInputToSongCols(req.body)

        console.log(saveData)

        let response = await models.song.create(saveData)

        res.status(200).json({result: saveData})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/spotify', async (req, res) => {
    try {


        const trackInfo = await getAudioFeatures(req.body.trackId)

        let {
            title,
            artist,
            key,
            mode,
            tempo,
            spotifyLink,
            durationMs,
            time,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified,
            dateReleased,
            romTitle,
            language,
            firstAlphabet

        } = trackInfo || {}
        let saveData = {}


        // const artistId = await getArtistId(artist)
        const userKey = convertIntToKey(key, mode)

        const result = {
            title,
            artist,
            key: userKey,
            tempo,
            spotifyLink,
            durationMinSec: convertDurationToMinSec(durationMs),
            time,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified,
            dateReleased,
            romTitle,
            language,
            firstAlphabet
        }

        // await models.song.create(saveData)
        res.status(200).json({result})

    } catch (err) {
        res.status(400).json({err})
    }
})

router.patch('/:id', async (req, res) => {

    try {

        let song = await models.song.findByPk(req.params.id)
        let musician = await models.musician.findByPk(song.artistId)

        if(musician.enName !== req.body.artist) {
            musician.enName = req.body.artist
            await musician.save()
        }

        for(const key in req.body) {
            song.dataValues[key] = req.body[key]
        }

        await song.save()

        res.status(200).json({message: "Edit successful", song: song})
    } catch (error) {
        res.status(400).json({error})
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const song = await models.song.findByPk(req.params.id)

        await song.destroy()

        res.status(200).json({message: `Song ${song.title} is deleted from database`})
    } catch (error) {
        res.status(400).json({error})
    }
})

router.post('/fill', async (req, res) => {
    try {

        const trackInfo = await getAudioFeatures(req.body.trackId)
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
        let data = []
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', async (row) => {
                data.push(row)
            })
            .on('end', async () => {
                console.log("CSV parsed successfully")

                const songData = await Promise.all( await csvUserInputToSongCols(data))
                const response = await models.song.bulkCreate(songData)

                fs.unlink(req.file.path, (err) => {
                    if(err) console.log(err)
                    else {
                        console.log(`${req.file.path} is deleted`)
                        res.status(200).json({message: "success"})
                    }
                })
            })

    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router