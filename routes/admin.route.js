const router = require('express').Router()
const { csvToData } = require('../lib/library')
const { csvDataToSongCols, getOrBulkCreateDbItems } = require('../lib/database-functions')
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const db = require('../models')
const models = db.master.models
const fs = require('fs')
const authChecker = require('../middlewares/authChecker')
const { getSongs, getLanguages, userInputToSongCols, bulkFindOrCreateMusicians, bulkFindOrCreateMusiciansFromString, getMusicians } = require('../lib/database-functions')
const { getAudioFeatures, convertKeyToKeyModeInt, convertKeyModeIntToKey, convertMinSecToMs } = require('../lib/library')

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

        let saveData = await userInputToSongCols('master', req.body)

        let options = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            options.where = {
                spotifyLink: saveData.spotifyLink
            }
        }

        let [ song ] = await models.song.findOrCreate(options)

        const dbComposers = await bulkFindOrCreateMusicians('master', req.body.composers)
        const dbSongwriters = await bulkFindOrCreateMusicians('master', req.body.songwriters)
        const dbArrangers = await bulkFindOrCreateMusicians('master', req.body.arrangers)

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
        let { title, romTitle, artist, key, durationMinSec, tempo, timeSignature, language, composers, songwriters, arrangers } = req.body || {}
        let song = await models.song.findByPk(req.params.id)

        let musician = await models.musician.findByPk(song.artistId)

        if(musician.name !== artist) {
            musician.name = artist
            await musician.save()
        }


        song.durationMs = convertMinSecToMs(durationMinSec)


        const options = {
            where: { name: language},
            defaults: language
        }

        let [ dbLanguage, created] = await models.language.findOrCreate(options)
        console.log(dbLanguage)
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
    const artistsNameArray = Array.from(new Set(data.map(song => song.artist).filter(artist => Boolean(artist))))
    const languagesNameArray = Array.from(new Set(data.map(song => song.language).filter(language => Boolean(language))))
    const composersNameArray = Array.from(new Set(data.map(song => song.composers).filter(composer => Boolean(composer))))
    const songwritersNameArray = Array.from(new Set(data.map(song => song.songwriters).filter(songwriter => Boolean(songwriter))))
    const arrangersNameArray = Array.from(new Set(data.map(song => song.arrangers).filter(arranger => Boolean(arranger))))

    const allDbArtists = await getOrBulkCreateDbItems('master', 'musician', artistsNameArray)
    const allDbComposers = await bulkFindOrCreateMusiciansFromString('master', composersNameArray)
    const allDbSongwriters = await bulkFindOrCreateMusiciansFromString('master', songwritersNameArray)
    const allDbArrangers = await bulkFindOrCreateMusiciansFromString('master', arrangersNameArray)
    const allDbLanguages = await getOrBulkCreateDbItems('master', 'language', languagesNameArray)


    data = data.map(song => (
        {
            ...song,
            artistId: allDbArtists.find(dbArtist => dbArtist.name === song.artist).id,
            languageId: allDbLanguages.find(dbLanguage => dbLanguage.name === song.language).id
        }
    ))

    const saveData = await Promise.all( await csvDataToSongCols('master', data))

    let songs = await models.song.bulkCreate(saveData)


    const promiseArray = saveData.map(async (element, index) => {

        if(element.songwriters) {
            const songwritersIdArray = element.songwriters.split(',').map(songwriter => allDbSongwriters.find(dbSongwriter => dbSongwriter[0].name === songwriter.trim())[0].id)
            await songs[index].setSongwriters(songwritersIdArray)
        }


        if(element.composers) {
            const composersIdArray = element.composers.split(',').map(composer => allDbComposers.find(dbComposer => dbComposer[0].name === composer.trim())[0].id)
            await songs[index].setComposers(composersIdArray)

        }

        if(element.arrangers) {
            const arrangersIdArray = element.arrangers.split(',').map(arranger => allDbArrangers.find(dbArranger => dbArranger[0].name === arranger.trim())[0].id)
            await songs[index].setArrangers(arrangersIdArray)
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