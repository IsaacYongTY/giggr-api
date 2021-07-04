const jwt = require('jsonwebtoken')
import { Request, Response } from "express";

export default async function checkAuth(req: Request, res: Response, next: () => void) {

    try {
        const tokenString = req.headers["x-auth-token"]
        if(!tokenString) {
            return res.status(403).send({error : "No token string is provided"})
        }

        if(Array.isArray(tokenString)) {
            return res.status(403).send({error : "Something is wrong, it's an array?"})
        }

        const token = tokenString.split(" ")[1]

        if(!token) {
            res.status(403).send({ error: "token is not correct"})
        }

        const decoded = jwt.verify(token, process.env.SESSION_SECRET)

        req.user = decoded.user
        console.log("auth checker works")
        next()

    } catch (error) {
        console.log(error)
        res.status(403).send({error})
    }
}



module.exports = checkAuth