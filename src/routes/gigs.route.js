const models = require('../models').database1.models
const db = require('../models')
const router = require('express').Router()
const authChecker = require("../middlewares/checkAuth")

router.get('/', authChecker, async (req, res) => {

    const options = {
        where: {},
        order: [
            ['date', 'DESC']
        ]
    }

    if(req.user.id) {
        options.where.userId = req.user.id
    }

    try {
        const gigs = await models.gig.findAll()

        res.status(200).json({gigs})
    } catch (error) {
        res.status(400).json({error})
    }
})
router.post('/', authChecker, async (req, res) => {

    try {

        let { date, time } = req.body || {}

        let cleanedDate = date.split('T')[0]
        let cleanedTime;

        if(time) {
            cleanedTime = req.body.time.split('T')[1]
        }

        let saveData = {...req.body, userId: req.user.id, date: cleanedDate, time: cleanedTime}

        let response = await models.gig.create(saveData)
        console.log(response)

        res.status(200).json({result: req.body })

    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router