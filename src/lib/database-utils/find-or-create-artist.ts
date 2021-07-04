const db = require('../../models')

export default async function findOrCreateArtist(database: string, artist: any, user: any) {
    console.log(user.id)
    return await db[database].models.musician.findOrCreate({
        defaults: {
            name: artist,
            userId: user.id
        },
        where: { name: artist}})

}



