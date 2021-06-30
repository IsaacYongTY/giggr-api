const router = require('express').Router()
const db = require('../../models')
const fs = require('fs')
const models = require('../../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const authChecker = require('../../middlewares/checkAuth')

const { getSongs, csvDataToSongCols, userInputToSongCols, bulkFindOrCreateMusicians, getDatabaseSongs } = require("../../lib/utils/database-functions")
const { getAudioFeatures, csvToData } = require('../../lib/library')
const convertDurationMinSecToMs = require('../../lib/utils/convert-duration-min-sec-to-ms')
const {getOrBulkCreateDbItems, createItemsRelatedToSong } = require("../../lib/utils/database-functions");

router.get('/', async(req, res) => {
    console.log(Object.keys(db))
    try {

        let { number, category, order } = req.query

        const songs = await getDatabaseSongs(number,category,order)
        console.log('all work')
        const genres = await models.genre.findAll()
        const moods = await models.mood.findAll()
        const tags = await models.tag.findAll()
        const languages = await models.language.findAll()
        console.log(songs)
        res.status(200).json({songs, languages, genres, moods, tags })

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
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/', async (req, res) => {
    try {
        let { composers, songwriters, arrangers } = req.body || {}
        let saveData = await userInputToSongCols('master', req.body, req.user)

        let options = {
            defaults: saveData
        }

        if(saveData.spotifyLink) {
            options.where = {
                spotifyLink: saveData.spotifyLink
            }
        }

        let [ song, isSongCreated ] = await models.song.findOrCreate(options)

        await createItemsRelatedToSong('master', song, req.body)

        if(isSongCreated) {
            res.status(201).json({result: song, message: "Song created successfully"})
        }

        res.status(200).json({result: song, message: "Song already in database"})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})


router.patch('/:id', async (req, res) => {

    try {

        let { title, romTitle, artist, key, mode, durationMinSec, tempo, timeSignature, language, composers,
            initialism, songwriters, arrangers, spotifyLink, youtubeLink, otherLink } = req.body || {}

        let song = await db.master.models.song.findByPk(req.params.id)

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

        const dbComposers = await bulkFindOrCreateMusicians('master', composers)
        const dbComposersIdArray = dbComposers.map(element => element[0])
        await song.setComposers(dbComposersIdArray)

        const dbSongwriters = await bulkFindOrCreateMusicians('master', songwriters)
        const dbSongwritersIdArray = dbSongwriters.map(element => element[0])
        await song.setSongwriters(dbSongwritersIdArray)

        const dbArrangers = await bulkFindOrCreateMusicians('master', arrangers)
        const dbArrangersIdArray = dbArrangers.map(element => element[0])
        await song.setArrangers(dbArrangersIdArray)

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

        let otherData = {
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

router.post('/csv', upload.single('file'), async(req, res) => {
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