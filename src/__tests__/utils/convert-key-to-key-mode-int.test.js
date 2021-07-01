import convertKeyToKeyModeInt from '../../lib/utils/convert-key-to-key-mode-int'

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
    it("should return [-1,-1] if the input is invalid",() => {
        expect(convertKeyToKeyModeInt('')).toStrictEqual([-1,-1])
        expect(convertKeyToKeyModeInt('Cmaj7')).toStrictEqual([-1,-1])
        expect(convertKeyToKeyModeInt('Cmaj7m')).toStrictEqual([-1,-1])
    })
})