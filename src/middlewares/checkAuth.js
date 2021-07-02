const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {

    try {

        const tokenString = req.headers["x-auth-token"]
        console.log(tokenString)
        if(!tokenString) {
            return res.status(403).send({error : "No token string is provided"})
        }
        const token = tokenString.split(" ")[1]

        if(!token) {
            console.log('in here')
            res.status(403).send({ error: "token is not correct"})
        }

        const decoded = jwt.verify(token, process.env.SESSION_SECRET)

        req.user = decoded.user
        console.log(req.user)
        console.log("auth checker works")
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send({error})
    }
}



module.exports = checkAuth