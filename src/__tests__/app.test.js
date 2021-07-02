const app = require("../app")
const request = require("supertest")

describe("If the test works", () => {
    it("should work", (done) => {
        request(app)
            .get("/test")
            .expect(200)
            .expect({
                message: "You accessed this route successfully"
            })
            .end((err, res) => {
                if(err) throw err
                done()
            })

    })
})