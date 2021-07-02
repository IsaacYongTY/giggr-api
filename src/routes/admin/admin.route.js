const router = require('express').Router()
const db = require('../../models')
const { getLanguages, getMusicians } = require("../../lib/utils/database-functions");

router.get('/musicians', async(req, res) => {

    try {

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

module.exports = router