const { addGenresToDatabase, convertKeyToKeyModeInt } = require('../lib/library')
const { getOrCreateArtist } = require('../lib/database-functions')

describe("addGenresToDatabase", () => {
    it("should be working",() => {
        expect(addGenresToDatabase('pop, metal, funk')).toStrictEqual(['pop', 'metal', 'funk'])
        expect(addGenresToDatabase('pop')).toStrictEqual(['pop'])
        expect(addGenresToDatabase('')).toStrictEqual([''])
        expect(addGenresToDatabase('pop-metal-funk'))
    })
    it.todo("")
})

describe("convertKeyToKeyModeInt", () => {
    it("should convert key to key and mode", () => {
        expect(convertKeyToKeyModeInt('C')).toStrictEqual([0,0])
        expect(convertKeyToKeyModeInt('Am')).toStrictEqual([9,1])
    })

    it("should return error if the input is invalid",() => {
        expect(convertKeyToKeyModeInt('')).toStrictEqual(undefined)
        expect(convertKeyToKeyModeInt('Cmaj7')).toStrictEqual(undefined)
        expect(convertKeyToKeyModeInt('Cmaj7m')).toStrictEqual(undefined)

    })
})