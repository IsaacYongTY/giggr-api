export default function getDataFromSpotify() {
    console.log('mockss')
    return new Promise((resolve) => {
        resolve({
            trackInfo: {
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
            },
            data: {
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
        })
    })
}

