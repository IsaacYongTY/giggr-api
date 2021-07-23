
import db from '../../models'

interface RequestQuery {
    number: string,
    category: string,
    order: string
}

interface SequelizeOption {
    where: { userId: number},
    order?: [string, string][],
    limit?: string
    include: any[]
}

export default async function getSongs(database: string, query: RequestQuery, userId: number) {

    let { number, category, order } = query
    // @ts-ignore
    const models = db[database].models

    let options : SequelizeOption = {
        where: { userId: userId},
        include: [{
            model: models.musician,
            as: "artist"
        },
            {
                model: models.musician,
                as: "composers",
                attributes: ["id", "name"]
            },
            {
                model: models.musician,
                as: "songwriters",
                attributes: ["id", "name"]
            },
            {
                model: models.musician,
                as: "arrangers",
                attributes: ["id", "name"]
            },
            {
                model: models.language,
                attributes: ["id", "name"]
            },
            {
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