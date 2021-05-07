const jwt = require('jsonwebtoken')

const authChecker = async (req, res, next) => {

    try {

        const tokenString = req.header("x-auth-token")
        const token = tokenString.split(" ")[1]
        console.log(token)
        const decoded = jwt.verify(token, process.env.SESSION_SECRET)

        req.user = decoded.user
        console.log("auth checker works")
        next()
    } catch (error) {
        res.status(403).send({error})
    }



}



module.exports = authChecker