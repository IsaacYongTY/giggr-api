
const db = require('../../models')

export default async function findOrBulkCreateMusicians(musicians: string[], userId: number) {

    if(!musicians || !musicians.length) {
        return []
    }

    const promiseArray = musicians.map(async (musician : string) =>
        await db.database1.models.musician.findOrCreate({
            defaults: {name: musician, userId: userId},
            where: {name: musician, userId}
        }))

    const dbMusiciansWithBoolean = await Promise.all(promiseArray)

    return dbMusiciansWithBoolean.map(element => element[0])


}
