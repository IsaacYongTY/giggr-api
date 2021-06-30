const { addGenresToDatabase } = require('../../lib/library')

describe("addGenresToDatabase", () => {
    it("should be working",() => {
        expect(addGenresToDatabase('pop, metal, funk')).toStrictEqual(['pop', 'metal', 'funk'])
        expect(addGenresToDatabase('pop')).toStrictEqual(['pop'])
        expect(addGenresToDatabase('')).toStrictEqual([''])
        expect(addGenresToDatabase('pop-metal-funk'))
    })
    it.todo("")
})





