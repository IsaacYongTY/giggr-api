const models = require('../models').database1.models
const router = require('express').Router()

router.get('/', async (req, res) => {

    const users = await models.user.findAll({
        include: [{
            model: models.tier
        }]
    })
    console.log(users)
    res.status(200).json({result: users })
})

module.exports = router