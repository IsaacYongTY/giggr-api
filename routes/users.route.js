const models = require('../models').database1.models
const router = require('express').Router()
const { getSongs } = require('../lib/utils/database-functions')
//
// router.get('/', async (req, res) => {
//
//     const users = await models.user.findAll({
//         include: [{
//             model: models.tier
//         }]
//     })
//     console.log(users)
//     res.status(200).json({result: users })
// })

router.get('/', async(req, res) => {

    try {
        console.log('in here')
        let {number, category, order} = req.query

        const songs = await getSongs('database1', number, category, order, req.user)

        const musicians = await models.musician.findAll()
        const genres = await models.genre.findAll()
        const moods = await models.mood.findAll()
        const tags = await models.tag.findAll()
        const languages = await models.language.findAll()
        console.log('wo')
        console.log(songs)
        res.status(200).json({songs, musicians, languages, genres, moods, tags })

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

module.exports = router