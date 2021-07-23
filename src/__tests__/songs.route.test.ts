import app from "../app"
import request from "supertest"
import checkAuth from "../middlewares/checkAuth"
import bulkDeleteSongsFromDatabase from "../lib/database-utils/bulk-delete-songs-from-database";

jest.mock("../lib/database-utils/bulk-delete-songs-from-database")
const mockBulkDeleteSongsFromDatabase = bulkDeleteSongsFromDatabase as jest.Mock


jest.mock('../middlewares/checkAuth', () => {
    return jest.fn((req, res, next) => next())
})

describe("The song routes", () => {

    describe("The bulk delete songs route", () => {
        beforeEach(()=> {
            jest.clearAllMocks()
        })

        it("should passed through the checkAuth middleware to protect the route", (done) => {

            request(app)
                .delete("/api/v1/songs")
                .send({ idArray: [1, 2, 3, 4]})
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)
                    expect(checkAuth).toBeCalledTimes(1)
                    done()
                })

        })

        it("should have called the function to bulk delete songs", (done) => {

            request(app)
                .delete("/api/v1/songs")
                .send({ idArray: [1, 2, 3, 4]})
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)

                    expect(mockBulkDeleteSongsFromDatabase).toBeCalledTimes(1)
                    expect(mockBulkDeleteSongsFromDatabase).toBeCalledWith([1,2,3,4])
                    expect(res.body).toStrictEqual({ idArray: [1, 2, 3, 4] })

                    done()
                })

        })

        it("should return a 400 if bulk delete fails", (done) => {

            mockBulkDeleteSongsFromDatabase.mockRejectedValue({})

            request(app).delete("/api/v1/songs")
                .expect(400)
                .end((err, res) => {
                    if(err) return done(err)
                    done()
                })
        })

        it("should return a 400 if input is invalid", (done) => {

            mockBulkDeleteSongsFromDatabase.mockResolvedValue({})

            request(app).delete("/api/v1/songs")
                .send({ idArray: ["invalid", "array", "not", "number"]})
                .expect(400)
                .end((err, res) => {
                    if(err) return done(err)
                    expect(res.body).toHaveProperty("error")
                    done()
                })


        })

        it("should return a 400 error if no data is provided", (done) => {
            request(app).delete("/api/v1/songs")
                .expect(400)
                .end((err, res) => {
                    if(err) return done(err)
                    console.log(res.body)
                    expect(res.body).toHaveProperty("error")
                    done()
                })
        })
    })
})