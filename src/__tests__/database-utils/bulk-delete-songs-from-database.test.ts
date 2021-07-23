import bulkDeleteSongsFromDatabase from "../../lib/database-utils/bulk-delete-songs-from-database";
import initializeTestDatabase from "../../lib/database-utils/initialize-test-database";

describe("bulkDeleteSongsFromDatabase", () => {
    jest.setTimeout(20000)
    let testDb : any

    beforeAll(async () => {

        testDb = await initializeTestDatabase()
    })

    it("should return the original id array", () => {
        // expect(bulkDeleteSongsFromDatabase([1,2,3,4])).toStrictEqual([1,2,3,4])
        // expect(bulkDeleteSongsFromDatabase([])).toStrictEqual([])
    })

    it("should remove the songs in database that the ids are in the array", async () => {
        await bulkDeleteSongsFromDatabase([1,2])

        let songsInDatabase = await testDb.database1.models.song.findAll({})
        console.log(songsInDatabase)
        expect(songsInDatabase.length).toBe(3)

    })

    it("should not alter anything if the id provided is not in the database", async () => {
        await bulkDeleteSongsFromDatabase([7])
        let songsInDatabase = await testDb.database1.models.song.findAll({})
        expect(songsInDatabase.length).toBe(3)
    })

    afterAll(async () => {
        await testDb.database1.close()
    })
})