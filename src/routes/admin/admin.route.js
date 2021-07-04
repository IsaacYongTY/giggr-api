const router = require('express').Router()
const db = require('../../models')
import getLanguages from "../../lib/database-utils/get-languages";
import getMusicians from "../../lib/database-utils/get-musicians";

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