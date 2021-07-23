const db = require('../../models')

interface RequestQuery {
    number: string,
    category: string,
    order: string
}

interface SequelizeOption {
    order?: [string, string][],
    limit?: string
    include: any[]
}


export default async function getDatabaseSongs(query: RequestQuery) {

    let { number, category, order } = query

    const models = db['master'].models

    let options : SequelizeOption = {
        include: [{
            model: models.musician,
            as: "artist"
        },  {
            model: models.musician,
            as: "composers",
            attributes: ["id", "name"]
        }, {
            model: models.musician,
            as: "songwriters",
            attributes: ["id", "name"]
        }, {
            model: models.musician,
            as: "arrangers",
            attributes: ["id", "name"]
        }, {
            model: models.language,
            attributes: ["id", "name"]
        }, {
            model: models.genre,
            attributes: ["id", "name"]
        }, {
            model: models.mood,
            attributes: ["id", "name"]
        }, {
            model: models.tag,
            attributes: ["id", "name"]
        }],
    }

    if (number) {
        options.limit = number
    }

    if (category && order) {
        options.order = [
            [category, order]
        ]
    }
    try {

        return await models.song.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}