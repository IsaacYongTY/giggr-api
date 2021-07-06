import convertTempo from "../../lib/utils/convert-tempo";

describe("convertTempo", () => {
    it("should round the Spotify tempo to the nearest number if Spotify time is 4/4", () => {
        expect(convertTempo(72.045, 4)).toBe(72)
        expect(convertTempo(54.9, 4)).toBe(55)
        expect(convertTempo(69.0049, 4)).toBe(69)
    })

    it("should convert the Spotify tempo to rounded tempo if Spotify time is 3/4", () => {
        expect(convertTempo(170.783,3)).toBe(57)
        // expect(convertTempo(54.9, 4)).toBe(55)
        // expect(convertTempo(69.0049, 4)).toBe(69)
    })
})