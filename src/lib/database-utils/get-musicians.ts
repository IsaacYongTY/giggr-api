const db = require('../../models')
const { Op } = require('sequelize')
const Sequelize = require('sequelize')

export default async function getMusicians(database: string, number: string, category: string, order: string) {

    if(!database) {
        return
    }

    const models = db[database].models

    let options : any= {
        // include: [{
        //     model: models.role,
        //     attributes: ["id", "name"]
        // }],
    }

    if (number) {
        options.limit = number
    }


    if (category && order) {
        options.order = [
            [
                Sequelize.fn('lower', Sequelize.col(category)),
                order
            ]
        ]
    }

    try {

        return await models.musician.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}