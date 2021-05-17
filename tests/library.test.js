const { addGenresToDatabase, convertKeyToKeyModeInt, convertKeyModeIntToKey } = require('../lib/library')

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

describe("convertKeyModeIntToKey", () => {
    it("should return the key", () => {
        expect(convertKeyModeIntToKey(0, 1)).toBe('C')
        expect(convertKeyModeIntToKey(2,0)).toBe('Dm')
        expect(convertKeyModeIntToKey(5)).toBe('F')
    })

    it("should return undefined if no input is provided", () => {
        expect(convertKeyModeIntToKey()).toBe(undefined)
    })

    it("should return undefined if wrong input is provided", () => {
        expect(convertKeyModeIntToKey(0,2)).toBe(undefined)
        expect(convertKeyModeIntToKey(-1, 1)).toBe(undefined)
    })

    it("should return the correct enharmonic key", () => {
        expect(convertKeyModeIntToKey(6,0)).toBe('F#m')
        expect(convertKeyModeIntToKey(8,0)).toBe('G#m')
        expect(convertKeyModeIntToKey(1,0)).toBe('C#m')
    })
})