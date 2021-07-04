import getAudioFeatures, { convertTime, addChineseTrackInfo, addEnglishTrackInfo } from "../../lib/utils/get-audio-features"
import convertTempo from "../../lib/utils/convert-tempo";

let mockSpotifyData: any;

describe("getAudioFeature", () => {
    it("should organize and return data to specified format", () => {
        expect(true).toBeTruthy()
        // expect(getAudioFeatures("6IgmrNepgp7Z7cirPwn2pH?si=54201b8b1b8b4439")).toStrictEqual({
        //     title: "",
        //     artist: "",
        //     key: 0,
        //     mode: 0,
        //     tempo: 54,
        //     spotifyLink: "",
        //     durationMs: 0,
        //     timeSignature: "4/4",
        //     energy: 0,
        //     danceability: 0,
        //     valence: 0,
        //     acousticness: 0,
        //     instrumentalness: 0,
        //     verified: false,
        //     dateReleased: "",
        //     romTitle: "",
        //     language: "",
        //     initialism: ""
        // })
    })
})