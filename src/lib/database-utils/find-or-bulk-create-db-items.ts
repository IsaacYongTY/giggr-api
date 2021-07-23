const db = require('../../models')
const { Op } = require('sequelize')

export default async function findOrBulkCreateDbItems(modelName: string, nameArray: string[], userId: number) {
    const models = db.database1.models

    let dbItems = await models[modelName].findAll({
        where: {
            name: { [Op.or]: nameArray }
        },
        raw: true
    })

    const newItems = nameArray
        .filter(item => dbItems.findIndex((dbItem : any) => dbItem.name === item ) === -1)
        .map(item => ({ name: item, userId: userId }))

    let createdNewItems = [];

    if(newItems.length) {
        console.log(newItems)
        createdNewItems = await models[modelName].bulkCreate(newItems)
    }

    return [...dbItems, ...createdNewItems]
}