import getSongs from "../../lib/database-utils/get-songs";
import db from "../../models"

describe("getSongs", () => {

    let testDb : any = db

    beforeAll(async () => {
        console.log(testDb.database1)
        await testDb.database1.sync({force: true})



        let Song = testDb.database1.models.song
        let Artist = testDb.database1.models.musician

        await testDb.database1.models.tier.create({ name: "user" })
        await testDb.database1.models.user.create({ email: "test@test.com" , password: "12345", tierId: 1})
        await Artist.bulkCreate([{ name: "Mr 1", userId: 1 }, { name: "Mr 2", userId: 1 }])
        await Song.bulkCreate([{ title: "Song 1", userId: 1, artistId: 1}])
    })

    it("should return songs from the database", async () => {
        let res = await getSongs("database1", { number: "10", category: "title", order: "ASC"}, 1)
        console.log(res)

    })
})