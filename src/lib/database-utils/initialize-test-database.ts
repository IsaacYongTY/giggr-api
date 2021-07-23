import db from "../../models"

export default async function initializeTestDatabase() {
    let testDb : any = db

    await testDb.database1.sync({force: true})

    let Song = testDb.database1.models.song
    let Artist = testDb.database1.models.musician

    await testDb.database1.models.tier.create({ name: "user" })
    await testDb.database1.models.user.create({ email: "test@test.com" , password: "12345", tierId: 1})
    await Artist.bulkCreate([{ name: "Mr 1", userId: 1 }, { name: "Mr 2", userId: 1 }])
    await Song.bulkCreate([
        { title: "Song 1", userId: 1, artistId: 1},
        { title: "Song 2", userId: 1, artistId: 1},
        { title: "Song 3", userId: 1, artistId: 1},
        { title: "Song 4", userId: 1, artistId: 1},
        { title: "Song 5", userId: 1, artistId: 1},
    ])
}