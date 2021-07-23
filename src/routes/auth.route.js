const router = require('express').Router();
const models = require('../models').database1.models;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { serialize } = require('cookie');

const initializePassport = require('../lib/passport.config');
initializePassport(passport);


router.post('/signup', async (req, res) => {
    try {

        const user = await models.user.create(req.body)

        let payload = {
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id,
                tierId: user.tierId,
                isAdmin: user.isAdmin
            }
        }

        jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: 100000000
        }, (err, token) => {
            // res.cookie('x-auth-token', `Bearer ${token}`)
            res.status(201).send(
                {
                    message: "successfully signed up",
                    token
                })
        })


    } catch (err) {
        // res.statusMessage = "Email has already been taken"
        console.log(err)
        if(err.parent.code === '23505') {
            res.status(400).json({message: "User already exists. Please try again."})
            return
        }
        console.log(err.parent)
        res.status(400).json({ message: 'Sign up failed'})

    }
})

router.post('/login', passport.authenticate('local'),(req,res) => {

    console.log(req.user)
    console.log('authh')
    let payload = {
        user: {
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            id: req.user.id,
            tierId: req.user.tierId,
            isAdmin: req.user.isAdmin
        }
    }

    jwt.sign(payload, process.env.SESSION_SECRET, {
        expiresIn: 100000000
    }, (err, token) => {

        // res.cookie('x-auth-token', `Bearer ${token}`)

        res.status(200).send(
            {
                message: "successfully logged in",
                token
            })
    })
})



module.exports = router