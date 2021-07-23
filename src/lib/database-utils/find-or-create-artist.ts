const db = require('../../models')

export default async function findOrCreateArtist(database: string, artist: any, userId: number) {
    console.log(userId)
    return await db[database].models.musician.findOrCreate({
        defaults: {
            name: artist,
            userId: userId
        },
        where: { name: artist}})

}



