const models = require('../models')
const router = require('express').Router()

router.post('/', async (req, res) => {

    console.log(req.body)
    res.status(200).json({result: req.body })
})

module.exports = router