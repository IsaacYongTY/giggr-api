import processRawSpotifyTrackData, {
    convertTime,
    addMandarinTrackInfo,
    addEnglishTrackInfo,

} from "../../lib/utils/get-audio-features"

import getInitialism from "../../lib/utils/get-initialism";

const mockEnglishSongSingleTrack : SpotifyApi.SingleTrackResponse = {
    "album": {
        "album_type": "single",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
                },
                "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
                "id": "6sFIWsNpZYqfjUpaCgueju",
                "name": "Carly Rae Jepsen",
                "type": "artist",
                "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
        ],
        "available_markets": [
            "AD",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "EC",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JP",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "RO",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
        ],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc"
        },
        "href": "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
        "id": "0tGPJ0bkWOUmH7MEOR77qc",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/5a73a056d0af707b4119a883d87285feda543fbb",
                "width": 64
            }
        ],
        "name": "Cut To The Feeling",
        "release_date": "2017-05-26",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0tGPJ0bkWOUmH7MEOR77qc"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
            },
            "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
            "id": "6sFIWsNpZYqfjUpaCgueju",
            "name": "Carly Rae Jepsen",
            "type": "artist",
            "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
        }
    ],
    "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
    ],
    "disc_number": 1,
    "duration_ms": 207959,
    "explicit": false,
    "external_ids": {
        "isrc": "USUM71703861"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl"
    },
    "href": "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
    "id": "11dFghVXANMlKmJXsNCbNl",
    "is_local": false,
    "name": "Cut To The Feeling",
    "popularity": 63,
    "preview_url": "https://p.scdn.co/mp3-preview/3eb16018c2a700240e9dfb8817b6f2d041f15eb1?cid=774b29d4f13844c495f206cafdad9c86",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:11dFghVXANMlKmJXsNCbNl"
}
const mockEnglishSongAudioFeatures : SpotifyApi.AudioFeaturesResponse = {
        "danceability": 0.735,
        "energy": 0.578,
        "key": 5,
        "loudness": -11.84,
        "mode": 0,
        "speechiness": 0.0461,
        "acousticness": 0.514,
        "instrumentalness": 0.0902,
        "liveness": 0.159,
        "valence": 0.624,
        "tempo": 98.002,
        "type": "audio_features",
        "id": "06AKEBrKUckW0KREUWRnvT",
        "uri": "spotify:track:06AKEBrKUckW0KREUWRnvT",
        "track_href": "https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
        "duration_ms": 255349,
        "time_signature": 4
    }

const mockChineseSongSingleTrack : SpotifyApi.SingleTrackResponse = {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2F5W6Rsxwzg0plQ0w8dSyt"
                    },
                    "href": "https://api.spotify.com/v1/artists/2F5W6Rsxwzg0plQ0w8dSyt",
                    "id": "2F5W6Rsxwzg0plQ0w8dSyt",
                    "name": "Leehom Wang",
                    "type": "artist",
                    "uri": "spotify:artist:2F5W6Rsxwzg0plQ0w8dSyt"
                }
            ],
            "available_markets": [],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/3Nbqh0Ga8de1YvaJrsVmBV"
            },
            "href": "https://api.spotify.com/v1/albums/3Nbqh0Ga8de1YvaJrsVmBV",
            "id": "3Nbqh0Ga8de1YvaJrsVmBV",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273555728a07c687f33acedcb0c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02555728a07c687f33acedcb0c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851555728a07c687f33acedcb0c",
                    "width": 64
                }
            ],
            "name": "不可能錯過你",
            "release_date": "1999-06-22",
            "release_date_precision": "day",
            // "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:3Nbqh0Ga8de1YvaJrsVmBV"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2F5W6Rsxwzg0plQ0w8dSyt"
                },
                "href": "https://api.spotify.com/v1/artists/2F5W6Rsxwzg0plQ0w8dSyt",
                "id": "2F5W6Rsxwzg0plQ0w8dSyt",
                "name": "Leehom Wang",
                "type": "artist",
                "uri": "spotify:artist:2F5W6Rsxwzg0plQ0w8dSyt"
            }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 296973,
        "explicit": false,
        "external_ids": {
            "isrc": "TWA479919002"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/5DzyBiFROeZiUWA4Mnehvh"
        },
        "href": "https://api.spotify.com/v1/tracks/5DzyBiFROeZiUWA4Mnehvh",
        "id": "5DzyBiFROeZiUWA4Mnehvh",
        "is_local": false,
        "name": "不可能錯過你",
        "popularity": 24,
        "preview_url": "https://p.scdn.co/mp3-preview/b005eeb8691c5772ebc7d442176dd486e7cb1956?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5DzyBiFROeZiUWA4Mnehvh"
    }
const mockChineseSongAudioFeatures : SpotifyApi.AudioFeaturesResponse = {
    "danceability": 0.568,
    "energy": 0.783,
    "key": 1,
    "loudness": -7.416,
    "mode": 1,
    "speechiness": 0.0553,
    "acousticness": 0.0347,
    "instrumentalness": 0,
    "liveness": 0.235,
    "valence": 0.78,
    "tempo": 140.048,
    "type": "audio_features",
    "id": "5DzyBiFROeZiUWA4Mnehvh",
    "uri": "spotify:track:5DzyBiFROeZiUWA4Mnehvh",
    "track_href": "https://api.spotify.com/v1/tracks/5DzyBiFROeZiUWA4Mnehvh",
    "analysis_url": "https://api.spotify.com/v1/audio-analysis/5DzyBiFROeZiUWA4Mnehvh",
    "duration_ms": 296973,
    "time_signature": 4
}

describe("getAudioFeature", () => {
    it("should organize and return data to specified format", async () => {

        expect(await processRawSpotifyTrackData(mockEnglishSongAudioFeatures, mockEnglishSongSingleTrack)).toStrictEqual({
            title: "Cut To The Feeling",
            artist: "Carly Rae Jepsen",
            key: 5,
            mode: 0,
            tempo: 98,
            spotifyLink: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl",
            durationMs: 255349,
            timeSignature: "4/4",
            energy: 0.578,
            danceability: 0.735,
            valence: 0.624,
            acousticness: 0.514,
            instrumentalness: 0.0902,
            verified: false,
            dateReleased: "2017-05-26",
            romTitle: "",
            language: "english",
            initialism: "cttf"
        })

        expect(await processRawSpotifyTrackData(mockChineseSongAudioFeatures, mockChineseSongSingleTrack)).toStrictEqual({
            title: "不可能錯過你",
            artist: "Leehom Wang",
            key: 1,
            mode: 1,
            tempo: 140,
            spotifyLink: "https://open.spotify.com/track/5DzyBiFROeZiUWA4Mnehvh",
            durationMs: 296973,
            timeSignature: "4/4",
            energy: 0.783,
            danceability: 0.568,
            valence: 0.78,
            acousticness: 0.0347,
            instrumentalness: 0,
            verified: false,
            dateReleased: "1999-06-22",
            romTitle: "Bu Ke Neng Cuo Guo Ni",
            language: "mandarin",
            initialism: "bkncgn",
        })
    })

    describe("addChineseTrackInfo", () => {
        const mockMandarinTrackData = {
            title: "不可能錯過你",
            artist: "Leehom Wang",
            key: 1,
            mode: 1,
            tempo: 140,
            spotifyLink: "https://open.spotify.com/track/5DzyBiFROeZiUWA4Mnehvh",
            durationMs: 296973,
            timeSignature: "4/4",
            energy: 0.783,
            danceability: 0.568,
            valence: 0.78,
            acousticness: 0.0347,
            instrumentalness: 0,
            verified: false,
            dateReleased: "1999-06-22",
            romTitle: "",
            language: "",
            initialism: "",

        }

        it("should add romanized title, default language as Mandarin and initialism from romTitle", () => {

            expect(addMandarinTrackInfo(mockMandarinTrackData)).toStrictEqual({
                title: "不可能錯過你",
                artist: "Leehom Wang",
                key: 1,
                mode: 1,
                tempo: 140,
                spotifyLink: "https://open.spotify.com/track/5DzyBiFROeZiUWA4Mnehvh",
                durationMs: 296973,
                timeSignature: "4/4",
                energy: 0.783,
                danceability: 0.568,
                valence: 0.78,
                acousticness: 0.0347,
                instrumentalness: 0,
                verified: false,
                dateReleased: "1999-06-22",
                romTitle: "Bu Ke Neng Cuo Guo Ni",
                language: "mandarin",
                initialism: "bkncgn",
            })
        })
    })

    describe("addEnglishTrackInfo", () => {

        const mockEnglishTrackData = {
            title: "Cut To The Feeling",
            artist: "Carly Rae Jepsen",
            key: 5,
            mode: 0,
            tempo: 98,
            spotifyLink: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl",
            durationMs: 255349,
            timeSignature: "4/4",
            energy: 0.578,
            danceability: 0.735,
            valence: 0.624,
            acousticness: 0.514,
            instrumentalness: 0.0902,
            verified: false,
            dateReleased: "2017-05-26",
            romTitle: "",
            language: "",
            initialism: ""
        }

        it("should add default language as English and initialism from title", () => {
            expect(addEnglishTrackInfo(mockEnglishTrackData)).toStrictEqual({
                title: "Cut To The Feeling",
                artist: "Carly Rae Jepsen",
                key: 5,
                mode: 0,
                tempo: 98,
                spotifyLink: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl",
                durationMs: 255349,
                timeSignature: "4/4",
                energy: 0.578,
                danceability: 0.735,
                valence: 0.624,
                acousticness: 0.514,
                instrumentalness: 0.0902,
                verified: false,
                dateReleased: "2017-05-26",
                romTitle: "",
                language: "english",
                initialism: "cttf"
            })
        })
    })


    describe("convertTime", () => {
        it("should add on /4 to the number provided", () => {
            expect(convertTime(4)).toBe("4/4")
            expect(convertTime(3)).toBe("3/4")
            expect(convertTime("2")).toBe("2/4")
            expect(convertTime("2")).toBe("2/4")
        })
    })
})

