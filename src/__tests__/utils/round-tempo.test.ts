import roundTempo from "../../lib/utils/round-tempo";

describe("roundTempo", () => {
    it("should round the Spotify tempo to the nearest number if Spotify time is 4/4", () => {
        expect(roundTempo(72.045)).toBe(72)
        expect(roundTempo(54.9)).toBe(55)
        expect(roundTempo(69.0049)).toBe(69)
    })

})