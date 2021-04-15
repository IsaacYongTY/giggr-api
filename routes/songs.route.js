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
    res.json({result: songs.slice(0,20)})
})

router.post('/add', async (req, res) => {
    console.log('in')

    try {


        const artist = await models.musician.findOne({
            where: {
                enName: req.body.artist
            }

        })

        console.log(artist)
        if (!artist) {
            console.log('artist not found, create new one')

        }

        let saveData = {
            // title: req.body.title,
            // artistId: artist.id,
            // key: req.body.key,
            // myKey: req.body.myKey,


        }

        let keyMode = convertKeyToKeyModeInt(req.body.key)
        let myKeyMode = convertKeyToKeyModeInt(req.body.myKey)

        let lastId = await Song.findAll({})
        console.log(lastId)
        console.log(keyMode)
        for (const key in req.body) {


            switch (key) {
                case 'artist':
                    saveData['artistId'] = parseInt(artist.id);
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
    console.log(req.body.trackId)
    const trackInfo = await getAudioFeatures(req.body.trackId)

    console.log(trackInfo)
    res.status(200).json({result: trackInfo})

})
module.exports = router