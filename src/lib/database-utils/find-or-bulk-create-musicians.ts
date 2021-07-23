
const db = require('../../models')

export default async function findOrBulkCreateMusicians(database: string , musicians: any, userId: number) {

    if(!musicians || !musicians.length) {
        return []
    }

    return await Promise.all(musicians.map(async (musician : any) =>
        await db[database].models.musician.findOrCreate({
            defaults: {name: musician, userId: userId},
            where: {name: musician}
        })
    ))
}
