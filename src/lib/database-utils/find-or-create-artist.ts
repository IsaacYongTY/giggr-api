const db = require('../../models')

export default async function findOrCreateArtist(artist: any, userId: number) {
    console.log(userId)
    return await db.database1.models.musician.findOrCreate({
        defaults: {
            name: artist,
            userId: userId,
            isArtist: true
        },
        where: { name: artist, userId}})

}



