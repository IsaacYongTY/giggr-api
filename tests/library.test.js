const { addGenresToDatabase, convertKeyToKeyModeInt, convertKeyModeIntToKey, convertEnharmonic } = require('../lib/library')

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

describe("convertEnharmonic", () => {
    it("should return the same value if there's no enharmonic equivalent", () => {
        expect(convertEnharmonic('C')).toBe('C')
        expect(convertEnharmonic('D')).toBe('D')
        expect(convertEnharmonic('E')).toBe('E')
        expect(convertEnharmonic('F')).toBe('F')
        expect(convertEnharmonic('G')).toBe('G')
        expect(convertEnharmonic('A')).toBe('A')
        expect(convertEnharmonic('B')).toBe('B')
    })

    it("should return the enharmonic of sharp keys",() => {
        expect(convertEnharmonic("C#")).toBe("Db")
        expect(convertEnharmonic("D#")).toBe("Eb")
        expect(convertEnharmonic("F#")).toBe("Gb")
        expect(convertEnharmonic("G#")).toBe("Ab")
        expect(convertEnharmonic("A#")).toBe("Bb")
    })

    it("should return the enharmonic of flat keys",() => {
        expect(convertEnharmonic("Db")).toBe("C#")
        expect(convertEnharmonic("Eb")).toBe("D#")
        expect(convertEnharmonic("Gb")).toBe("F#")
        expect(convertEnharmonic("Ab")).toBe("G#")
        expect(convertEnharmonic("Bb")).toBe("A#")
    })

    it("should return undefined if input is invalid",() => {
        expect(convertEnharmonic("agfg")).toBe(undefined)
        expect(convertEnharmonic("##")).toBe(undefined)
        expect(convertEnharmonic("H")).toBe(undefined)
        expect(convertEnharmonic("Z#")).toBe(undefined)
        expect(convertEnharmonic("JJb")).toBe(undefined)
        expect(convertEnharmonic("Bbb")).toBe(undefined)
    })
})