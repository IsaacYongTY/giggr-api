import setMusicianRole from "../../lib/database-utils/set-musician-role";
import Musician from "../../lib/types/Musician";

const mockMusician : Musician = {
    name: "Mock Artist",
    romName: "",
    spotifyName: "Mock Artista",
    isArtist: false,
    isComposer: false,
    isSongwriter: false,
    isArranger: false
}

const mockMusicianWithRoles : Musician = {
    name: "Mock Artist",
    romName: "",
    spotifyName: "Mock Artista",
    isArtist: true,
    isComposer: false,
    isSongwriter: true,
    isArranger: false
}

describe("setMusicianRole", () => {
    it("should set the respective boolean value to true according to provided string", () => {
        expect(setMusicianRole({...mockMusician}, "artist")).toStrictEqual({
            name: "Mock Artist",
            romName: "",
            spotifyName: "Mock Artista",
            isArtist: true,
            isComposer: false,
            isSongwriter: false,
            isArranger: false
        })

        expect(setMusicianRole({...mockMusician}, "composer")).toStrictEqual({
            name: "Mock Artist",
            romName: "",
            spotifyName: "Mock Artista",
            isArtist: false,
            isComposer: true,
            isSongwriter: false,
            isArranger: false
        })

        expect(setMusicianRole({...mockMusician}, "songwriter")).toStrictEqual({
            name: "Mock Artist",
            romName: "",
            spotifyName: "Mock Artista",
            isArtist: false,
            isComposer: false,
            isSongwriter: true,
            isArranger: false
        })
    })

    it("should return the same Musician properties if it's already true", () => {
        expect(setMusicianRole(mockMusicianWithRoles, "artist")).toStrictEqual(mockMusicianWithRoles)
        expect(setMusicianRole(mockMusicianWithRoles, "songwriter")).toStrictEqual(mockMusicianWithRoles)
    })
})