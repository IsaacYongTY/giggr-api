const router = require('express').Router()
const models = require('../models').database1.models

import getMusicians from "../lib/database-utils/get-musicians";

router.get('/', async(req, res) => {

    try {
        console.log('in')
        let {number, category, order} = req.query || {}

        console.log(req.query)
        const musicians = await getMusicians('database1', number, category, order)

        res.status(200).json({musicians})

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

router.post('/', async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})



router.patch('/:id', async (req, res) => {


})


module.exports = router