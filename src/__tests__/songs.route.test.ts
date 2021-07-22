import app from "../app"
import request from "supertest"
import checkAuth from "../middlewares/checkAuth"
import { dummyFunction } from "../lib/mock-functions";
import axios from "axios"
import db from "../models"

console.log(db)
jest.mock("axios")
let mockAxios =axios as jest.Mocked<typeof axios>

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
                .send({ deleteSongsId: [1, 2, 3, 4]})
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)

                    expect(checkAuth).toBeCalledTimes(1)
                    expect(res.body).toStrictEqual({ deleteSongsId: [1, 2, 3, 4] })

                    done()
                })

        })
        it("should return a 400 if there is error", (done) => {

            mockAxios.get.mockRejectedValue({})

            request(app).delete("/api/v1/songs")
                .expect(400)
                .end((err, res) => {
                    if(err) return done(err)
                    done()
                })


        })



    })
})