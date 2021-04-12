const router = require('express').Router()
const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')
const User = require('../models/user')(sequelize, DataTypes)
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    try {
        console.log(User)
        const user = await User.create(req.body)
        console.log(user)

        res.status(201).send({user})
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body || {}
        const user = await User.findOne( {
            where: {email},
            // attributes: ['firstName', 'lastName', "email"]
        })

        let isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch) {
            throw "Invalid email or password. Please try again."
        }


        res.status(200).send({user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
            }, message: "You are now logged in!"})
    } catch (err) {
        console.log(err)
        res.status(400).send({err: err || "Invalid email or password. Please try again"})
    }
})


module.exports = router