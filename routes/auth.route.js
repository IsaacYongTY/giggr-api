const router = require('express').Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const initializePassport = require('../lib/passport.config');
initializePassport(passport);

router.post('/signup', async (req, res) => {
    try {
        console.log(User)
        const user = await User.create(req.body)


        let payload = {
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: 100000000
        }, (err, token) => {
            res.cookie('auth_token', token)
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
            res.status(400).json({message: "Email has already been takenzz"})
            return
        }
        console.log(err.parent)
        res.status(400).json({ message: 'Sign up failed'})

    }
})

router.post('/login', passport.authenticate('local'),(req,res) => {
    console.log('in')
    console.log(req.message)
        let payload = {
            user: {
                firstName: req.user.firstName,
                id: req.user.id
            }
        }

        jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: 100000000
        }, (err, token) => {
            res.cookie('auth_token', token)
            res.status(200).send(
                {
                    message: "successfully logged in",
                    token
                })
        })
})



module.exports = router