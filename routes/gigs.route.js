const models = require('../models')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
    try {
        console.log('gett')
        const gigs = await models.gig.findAll({
            order: [
                ['date', 'DESC']
            ]
        })


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

        // let saveData = {...req.body, userId: decoded.user.id}


        let cleanedDate = req.body.date.split('T')[0]
        let cleanedTime = req.body.time.split('T')[1]
        let saveData = {...req.body, userId: decoded.user.id, date: cleanedDate, time: cleanedTime}
        console.log(saveData)




        let response = await models.gig.create(saveData)

        console.log(response)

        res.status(200).json({result: req.body })

    } catch (error) {
        res.status(400).json({error})
    }

})



module.exports = router