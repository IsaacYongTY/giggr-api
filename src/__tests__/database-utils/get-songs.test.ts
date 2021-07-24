import getSongs from "../../lib/database-utils/get-songs";
import initializeTestDatabase from "../../lib/database-utils/initialize-test-database";
import db from "../../models"
describe("getSongs", () => {
    jest.setTimeout(20000)
    let testDb: any = db

    beforeAll(async () => {
        await initializeTestDatabase()
    })

    it("should return songs from the database", async () => {
        let res = await getSongs( { number: "10", category: "title", order: "ASC"}, 1)
        expect(res.length).toBe(5)
    })

    afterAll(async () => {
        await testDb.database1.close()
    })
})