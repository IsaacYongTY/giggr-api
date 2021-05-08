const router = require('express').Router()

const models = require('../models')

const { convertDurationMinSecToMs, convertKeyToKeyModeInt, getAudioFeatures, convertIntToKey} = require('../lib/library')

router.get('/', async(req, res) => {

    let { number, category, order } = req.query

    console.log(models)
    const songs = await models.song.findAll({
        include: [{
            model: models.musician,
            as: "artist"
        }, {
            model: models.musician,
            as: "composers",
            attributes: ["id", "enName"]
        }],
        limit: number,
        order: [
            [category, order]
        ]
        // {
        //     model: models.genre,
        // }]
    })


    songs.map(song => {
        song.key = convertIntToKey(song.key,'forward')

        if (song.mode === 1) {
            song.key += 'm'
        }

        return song
    })
    res.json({ songs})
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
        console.log(saveData)


        let response = await models.song.create(saveData)

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
        console.log(song)
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
module.exports = router