const router = require('express').Router()

const models = require('../models')
const Song = require('../models/song')
const { convertDurationMinSecToMs, convertKeyToKeyModeInt, getAudioFeatures, convertIntToKey} = require('../lib/library')

router.get('/', async(req, res) => {

    const songs = await models.song.findAll({
        include: [{
            model: models.musician,
            as: "artist"
        }]
        // {
        //     model: models.genre,
        // }]
    })
    console.log(songs[0])

    songs.map(song => {
        song.key = convertIntToKey(song.key,'forward')
        console.log(song.key)
        if (song.mode == 1) {
            song.key += 'm'
        }

        return song
    })
    res.json({result: songs})
})

router.post('/add', async (req, res) => {
    try {
        const artist = await models.musician.findOne({
            where: {
                enName: req.body.artist
            }

        })

        console.log(artist)


        let saveData = {
            // title: req.body.title,
            // artistId: artist.id,
            // key: req.body.key,
            // myKey: req.body.myKey,
        }



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
        console.log(saveData)


        let response = await Song.create(saveData)

        console.log('this is the response')
        console.log(response)

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

        console.log(artist)
        let saveData = {}

        for (const keyValue in trackInfo) {
            console.log(keyValue)
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




        console.log(trackInfo)

        await models.song.create(saveData)
        res.status(200).json({result: trackInfo})

    } catch (err) {
        res.status(400).json({err})
    }

})
module.exports = router