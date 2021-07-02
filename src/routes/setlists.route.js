const router = require("express").Router()
const models = require('../models')

router.get('/', (req, res) => {

    res.status(200).json({message: 'success'})
})

router.post('/', async (req, res) => {

    let { title, description, userId, songs, songIdArray } = req.body || {}

    let saveData = {
        title,
        description,
        userId,
        songs
    }
    console.log(songs)

    if (songIdArray) {
        console.log("These songs will be added to setlists")
    }

    const setlist = await models.setlist.create(saveData, { include: [models.song]})

    console.log(setlist)


    res.status(200).json({message: "added successfully"})
})

router.post('/addsongs/:id', async (req, res) => {

    const setlist = await models.setlist.findByPk(req.params.id)
    console.log(setlist)
    let { songsIdArray } = req.body || {}
    console.log(songsIdArray)

    await setlist.addSongs(songsIdArray)

    res.status(200).json({message: "songs added successfully"})
})

module.exports = router