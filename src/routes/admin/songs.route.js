// import fs from 'fs'
// import multer from 'multer'
// import parseCsvToRawData from "../../lib/utils/parse-csv-to-raw-data";
// import convertDurationMinSecToMs from '../../lib/utils/convert-duration-min-sec-to-ms'
// import findOrBulkCreateDbItems from "../../lib/database-utils/find-or-bulk-create-db-items";
// import createItemsRelatedToSong from "../../lib/database-utils/create-items-related-to-songs";
// import userInputToSongCols from "../../lib/database-utils/user-input-to-song-cols";
// import findOrBulkCreateMusicians from "../../lib/database-utils/find-or-bulk-create-musicians";
// import getDatabaseSongs from "../../lib/database-utils/get-database-songs";
//
// const upload = multer({dest: "uploads/", limits: { fileSize: 1024 * 1024}})
// const router = require('express').Router()
// const db = require('../../models')
// const models = require('../../models').database1.models
//
// router.get('/', async(req, res) => {
//     console.log(Object.keys(db))
//     try {
//
//         let { number, category, order } = req.query
//
//         const songs = await getDatabaseSongs(req.query)
//         const genres = await models.genre.findAll()
//         const moods = await models.mood.findAll()
//         const tags = await models.tag.findAll()
//         const languages = await models.language.findAll()
//         res.status(200).json({songs, languages, genres, moods, tags })
//
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({error})
//     }
// })
//
// router.delete('/:id', async(req, res) => {
//     try {
//
//         const song = await models.song.findByPk(req.params.id)
//
//         await song.destroy()
//
//         res.status(200).json({message: `Song ${song.title} is deleted from database`})
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({error})
//     }
// })
//
// router.post('/', async (req, res) => {
//     try {
//         let { composers, songwriters, arrangers } = req.body || {}
//         console.log(req.body)
//         let saveData = await userInputToSongCols(req.body, req.user)
//
//         let options = {
//             defaults: saveData
//         }
//
//         if(saveData.spotifyLink) {
//             options.where = {
//                 spotifyLink: saveData.spotifyLink
//             }
//         }
//
//         let [ song, isSongCreated ] = await models.song.findOrCreate(options)
//
//         await createItemsRelatedToSong('master', song, req.body)
//
//         if(isSongCreated) {
//             res.status(201).json({result: song, message: "Song created successfully"})
//         }
//
//         res.status(200).json({result: song, message: "Song already in database"})
//
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({error})
//     }
// })
//
//
// router.patch('/:id', async (req, res) => {
//
//     try {
//
//         let { title, romTitle, artist, key, mode, durationMinSec, tempo, timeSignature, language, composers,
//             initialism, songwriters, arrangers, spotifyLink, youtubeLink, otherLink, status } = req.body || {}
//
//         let song = await db.master.models.song.findByPk(req.params.id)
//
//         let musicianOptions = {
//             defaults: artist,
//             where: { name: artist }
//         }
//
//         let [ dbMusician ] = await models.musician.findOrCreate(musicianOptions)
//
//         song.artistId = dbMusician.id
//         song.durationMs = convertDurationMinSecToMs(durationMinSec)
//
//
//         if(language) {
//             let options = {
//                 defaults: language.toLowerCase(),
//                 where: { name: language.toLowerCase() }
//             }
//             const [dbLanguage, created] = await models.language.findOrCreate(options)
//
//             song.languageId = dbLanguage.id
//         }
//
//         const dbComposers = await findOrBulkCreateMusicians('master', composers)
//         const dbComposersIdArray = dbComposers.map(element => element[0])
//         await song.setComposers(dbComposersIdArray)
//
//         const dbSongwriters = await findOrBulkCreateMusicians('master', songwriters)
//         const dbSongwritersIdArray = dbSongwriters.map(element => element[0])
//         await song.setSongwriters(dbSongwritersIdArray)
//
//         const dbArrangers = await findOrBulkCreateMusicians('master', arrangers)
//         const dbArrangersIdArray = dbArrangers.map(element => element[0])
//         await song.setArrangers(dbArrangersIdArray)
//
//         if(req.body.genres) {
//             const dbGenres = await findOrBulkCreateDbItems( 'genre', req.body.genres)
//             await song.setGenres(dbGenres.map(genre => genre.id))
//         }
//
//         if(req.body.tags) {
//             const dbTags = await findOrBulkCreateDbItems('tag', req.body.tags)
//
//             await song.setTags(dbTags.map(tag => tag.id))
//         }
//
//         if(req.body.moods) {
//             const dbMoods = await findOrBulkCreateDbItems('mood', req.body.moods)
//             await song.setMoods(dbMoods.map(mood => mood.id))
//         }
//
//         let otherData = {
//             title, romTitle, tempo, timeSignature, initialism, key, mode, spotifyLink, youtubeLink, otherLink
//         }
//
//         for(const props in otherData) {
//             if(otherData[props] !== undefined) {
//                 song[props] = otherData[props]
//
//             }
//         }
//
//
//         await song.save()
//
//         res.status(200).json({message: "Edit successful", song: song})
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({error})
//     }
// })
//
// router.post('/csv', upload.single('file'), async(req, res) => {
//
// })
//
//
// module.exports = router