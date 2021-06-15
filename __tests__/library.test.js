const { addGenresToDatabase, convertKeyToKeyModeInt, convertEnharmonic } = require('../lib/library')

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
        expect(convertKeyToKeyModeInt('C')).toStrictEqual([0,1])
        expect(convertKeyToKeyModeInt('Am')).toStrictEqual([9,0])
    })

    it("should convert key to the correct enharmonic", () => {
        expect(convertKeyToKeyModeInt('C#m')).toStrictEqual([1,0])
        expect(convertKeyToKeyModeInt('F#m')).toStrictEqual([6,0])
        expect(convertKeyToKeyModeInt('G#m')).toStrictEqual([8,0])
    })
    it("should return error if the input is invalid",() => {
        expect(convertKeyToKeyModeInt('')).toStrictEqual(undefined)
        expect(convertKeyToKeyModeInt('Cmaj7')).toStrictEqual(undefined)
        expect(convertKeyToKeyModeInt('Cmaj7m')).toStrictEqual(undefined)
    })
})


