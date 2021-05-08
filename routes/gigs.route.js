const models = require('../models').database1.models
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const authChecker = require("../middlewares/authChecker")

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

        const gigs = await models.gig.findAll(options)

        res.status(200).json({gigs})
    } catch (error) {
        res.status(400).json({error})
    }
})
router.post('/', async (req, res) => {

    try {
        console.log(req.body)
        console.log(req.cookies.auth_token)

        const decoded = jwt.verify(req.cookies.auth_token, process.env.SESSION_SECRET)
        console.log(decoded)
        
        let cleanedDate = req.body.date.split('T')[0]
        let cleanedTime = req.body.time.split('T')[1]
        let saveData = {...req.body, userId: decoded.user.id, date: cleanedDate, time: cleanedTime}

        let response = await models.gig.create(saveData)

        console.log(response)

        res.status(200).json({result: req.body })

    } catch (error) {
        res.status(400).json({error})
    }

})



module.exports = router