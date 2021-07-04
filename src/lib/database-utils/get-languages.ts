const db = require('../../models')

export default async function getLanguages(database: string, number: string, category: string, order: string) {

    if(!database) {
        return
    }

    const models = db[database].models

    let options : any = {
        // include: [],
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

        return await models.language.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}