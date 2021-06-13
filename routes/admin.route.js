const router = require('express').Router()
const { csvToData } = require('../lib/library')
const { csvDataToSongCols, getOrBulkCreateDbItems } = require('../lib/database-functions')
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const db = require('../models')
const models = db.master.models
const fs = require('fs')
const authChecker = require('../middlewares/authChecker')
const { getSongs, userInputToSongCols, getOrCreateLanguage } = require('../lib/database-functions')
const { getAudioFeatures, convertKeyToKeyModeInt, convertKeyModeIntToKey, convertDurationToMinSec, convertMinSecToMs } = require('../lib/library')

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

        let saveData = await userInputToSongCols('master', req.body)

        let response;
        let option = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            option.where = {
                spotifyLink: saveData.spotifyLink
            }
        }

        response = await models.song.findOrCreate(option)

        res.status(200).json({result: response})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/songs/spotify', async (req, res) => {
    try {
        console.log(req.query.trackId)
        const trackInfo = await getAudioFeatures(req.query.trackId)

        console.log(trackInfo)
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

        // const artistId = await getArtistId(artist)

        const result = {
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
        }
        console.log(result)
        // await models.song.create(saveData)
        res.status(200).json({result})

    } catch (err) {
        res.status(400).json({err})
    }
})

router.patch('/songs/:id', async (req, res) => {

    try {
        console.log(req.body)
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

        if(key) {
            let keyMode = convertKeyToKeyModeInt(key)
            console.log(keyMode)
            song.key = keyMode[0]
            song.mode = keyMode[1]
        }

        if(language) {
            let { id: languageId } = await getOrCreateLanguage('master',language)
            console.log(languageId)
            song.languageId = languageId
        }

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
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/songs/csv', upload.single('file'), async(req, res) => {
    let data = await csvToData(req.file.path)
    const artistsNameArray = Array.from(new Set(data.map(song => song.artist)))
    const languagesNameArray = Array.from(new Set(data.map(song => song.language)))

    const allDbArtists = await getOrBulkCreateDbItems('master', 'musician', artistsNameArray)
    const allDbLanguages = await getOrBulkCreateDbItems('master', 'language', languagesNameArray)

    data = data.map(song => (
        {
            ...song,
            artistId: allDbArtists.find(dbArtist => dbArtist.name === song.artist).id,
            languageId: allDbLanguages.find(dbLanguage => dbLanguage.name === song.language).id
        }
    ))

    const saveData = await Promise.all( await csvDataToSongCols('master', data))

    await models.song.bulkCreate(saveData)

    fs.unlink(req.file.path, (err) => {
        if(err) console.log(err)
        else {
            console.log(`${req.file.path} is deleted`)
            res.status(200).json({message: "success"})
        }
    })
})

module.exports = router