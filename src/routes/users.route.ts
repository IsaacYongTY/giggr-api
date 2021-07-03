import {Request, Response} from "express";

const models = require('../models').database1.models
const router = require('express').Router()
import getSongs from "../lib/database-utils/get-songs";

interface RequestWithUser extends Request {
    user: {
        id: number
    }
}

router.get('/', async(req: RequestWithUser, res: Response) => {

    try {
        let queryObject = {
            number: req.query.number as string,
            category: req.query.category as string,
            order: req.query.order as string,
        }

        const songs = await getSongs('database1', queryObject, req.user.id)

        const musicians = await models.musician.findAll()
        const genres = await models.genre.findAll()
        const moods = await models.mood.findAll()
        const tags = await models.tag.findAll()
        const languages = await models.language.findAll()
        console.log('wo')
        console.log(songs)
        res.status(200).json({songs, musicians, languages, genres, moods, tags })

    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

module.exports = router