const router = require('express').Router()
const models = require('../models').database1.models

import getLanguages from "../lib/database-utils/get-languages";


router.get('/', async(req, res) => {

    try {
        console.log('in')
        let {number, category, order} = req.query || {}

        console.log(req.query)
        const languages = await getLanguages('database1', number, category, order)

        res.status(200).json({languages})

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