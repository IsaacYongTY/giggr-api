const router = require('express').Router()
const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const models = require('../models').database1.models
const multer = require('multer')
const upload = multer({dest: "uploads/"})

const { getSongs, getArtistId, getLanguageId } = require("../lib/database-functions")
const { convertMinSecToMs, convertKeyToKeyModeInt, getAudioFeatures, convertIntToKey} = require('../lib/library')

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

router.post('/add', async (req, res) => {
    try {
        const artist = await models.musician.findOne({
            where: {
                enName: req.body.artist
            }
        })

        let saveData = {}

        let keyMode = convertKeyToKeyModeInt(req.body.key)
        let myKeyMode = convertKeyToKeyModeInt(req.body.myKey)

        for (const key in req.body) {

            switch (key) {
                case 'artist':
                    if (!artist) {
                        console.log('artist not found, create new one')
                        const newArtist = await models.musician.create({ enName: req.body.artist})
                        saveData['artistId'] = newArtist.id
                    }   else {
                        console.log(saveData['artistId'])
                        saveData['artistId'] = parseInt(artist.id);
                    }
                    break;
                case "duration":
                    saveData['durationMs'] = convertDurationMinSecToMs(req.body.duration);
                    break;
                case "key":

                    saveData["key"] = keyMode[0]
                    saveData["mode"] = keyMode[1]
                    break;
                case "myKey":
                    myKeyMode = convertKeyToKeyModeInt(req.body.key)
                    saveData["myKey"] = keyMode[0]
                    break;
                default:
                    saveData[key] = req.body[key]
                    break;
            }

        }

        let response = await models.song.create(saveData)

        res.status(200).json({result: saveData})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/addauto', async (req, res) => {
    try {

        const trackInfo = await getAudioFeatures(req.body.trackId)

        const artist = await models.musician.findOne({
            where: {
                enName: trackInfo.artist
            }
        })

        let saveData = {}

        for (const keyValue in trackInfo) {

            switch (keyValue) {
                case 'artist':
                    console.log(artist)
                    if (!artist) {
                        console.log('artist not found, create new one')
                        const newArtist = await models.musician.create({ enName: trackInfo.artist})
                        saveData['artistId'] = newArtist.id
                    }   else {
                        console.log(saveData['artistId'])
                        saveData['artistId'] = parseInt(artist.id);
                    }
                    break;

                default:
                    saveData[keyValue] = trackInfo[keyValue]
                    console.log(saveData)
                    break;
            }
        }
        await models.song.create(saveData)
        res.status(200).json({result: trackInfo})

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

router.delete('/:id', async(req, res) => {
    try {
        const song = await models.song.findByPk(req.params.id)

        await song.destroy()

        res.status(200).json({message: `Song ${song.title} is deleted from database`})
    } catch (error) {
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

                const saveCsvToDatabase = async (data) => {

                    return data.map((row) => {
                        let {
                            title,
                            artist,
                            key,
                            myKey,
                            tempo,
                            durationMinSec,
                            timeSignature,
                            language,
                            spotifyLink,
                            youtubeLink,
                            otherLink,
                        } = row || {}

                        return {
                            title,
                            artistId: getArtistId(artist),
                            languageId: getLanguageId(language),
                            tempo,
                            timeSignature,
                            durationMs: durationMinSec ? convertMinSecToMs(durationMinSec) : null,
                            spotifyLink,
                            youtubeLink,
                            otherLink,
                            key: key ? convertKeyToKeyModeInt(key)[0] : null,
                            myKey: myKey ? convertKeyToKeyModeInt(key)[0] : null,
                            mode: key ?convertKeyToKeyModeInt(key)[1] : null
                        }
                    })
                }

                saveCsvToDatabase(data)

                const songs = await models.song.bulkCreate(songData)

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

router.post('/csvtest', upload.single("file"), async(req, res) => {

    let data =[]
    await fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', async (row) => {
            data.push(row)


        })
        .on('end', () => {
            console.log("CSV parsed successfully")
            console.log(data)
            fs.unlink(req.file.path, (err) => {
                if(err) console.log(err)
                else {
                    console.log(`${req.file.path} is deleted`)
                    res.status(200).json({result: req.body })
                }
            })


        })


})
module.exports = router