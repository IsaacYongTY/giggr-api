import bulkDeleteSongsFromDatabase from "../../lib/database-utils/bulk-delete-songs-from-database";
import initializeTestDatabase from "../../lib/database-utils/initialize-test-database";
import db from "../../models"

describe("bulkDeleteSongsFromDatabase", () => {

    let testDb : any = db

    beforeAll(async () => {
        await initializeTestDatabase()
    })

    it("should remove the songs in database that the ids are in the array", async () => {
        await bulkDeleteSongsFromDatabase([1,2])

        let songsInDatabase = await testDb.database1.models.song.findAll({ where: { userId: 1 }})
        expect(songsInDatabase.length).toBe(3)
    })

    it("should not alter anything if the id provided is not in the database", async () => {
        await bulkDeleteSongsFromDatabase([7])

        let songsInDatabase = await testDb.database1.models.song.findAll({ where: { userId: 1 }})
        expect(songsInDatabase.length).toBe(3)
    })

    afterAll(async () => {
        await testDb.database1.close()
    })

})