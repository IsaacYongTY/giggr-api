const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const models = require('../models').database1.models


const initialize = async (passport) => {

    const authenticateUser = async (email, password, done) => {

        const user = await models.user.findOne( {
            where: {email},
            // attributes: ['firstName', 'lastName', "email"]
        })


        if(!user) {
            return done(null, false, { message: "Invalid email or password. Please try again." })
        }

        try {
            let isPasswordMatch = await bcrypt.compare(password, user.password)


            if(!isPasswordMatch) {

                return done(null,false, { message: "Invalid email or password. Please try again."})
            }

            return done(null, user)
        } catch (err) {
            return done(err)
        }
    }



    passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password" }, authenticateUser ))
    passport.serializeUser((user, done) => done(null, user.id))

    passport.deserializeUser(async (id, done) => {
        console.log(id)
        const user = await models.user.findByPk(id)
        console.log(user)
        return done(null, user)
    })
}

module.exports = initialize


