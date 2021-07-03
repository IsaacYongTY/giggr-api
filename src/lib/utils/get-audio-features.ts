import convertTempo from "./convert-tempo";
import getRomTitle from "./get-rom-title";

// @ts-ignore
import containsChinese from 'contains-chinese'

import SpotifyWebApi from 'spotify-web-api-node'
import removeBrackets from './remove-brackets'

const getInitialism = (input : string) =>
    removeBrackets(input).
    split(' ').
    reduce((acc, word) => acc + word[0].toLowerCase(), '')

const convertTime = (spotifyTime : string | number) => `${spotifyTime}/4`

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export default async function getAudioFeatures(trackId : string) {

    try {
        const code = await spotifyApi.clientCredentialsGrant()

        await spotifyApi.setAccessToken(code.body.access_token)

        let data = await spotifyApi.getAudioFeaturesForTrack(trackId)
        const trackInfo = await spotifyApi.getTrack(trackId)

        let {
            key,
            mode,
            tempo,
            time_signature,
            duration_ms,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
        } = data.body
        let { artists, name, album, external_urls: { spotify } } = trackInfo.body


        const processedTrackData = {
            title: name,
            artist: artists[0].name,
            key,
            mode,
            tempo: convertTempo(tempo, time_signature),
            spotifyLink: spotify,
            durationMs: duration_ms,
            timeSignature: convertTime(time_signature),
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            verified: false,
            dateReleased: album.release_date,
            romTitle: "",
            language: "",
            initialism: ""
        };

        const isChinese = containsChinese(processedTrackData.title)

        if (isChinese) {
            processedTrackData.romTitle = getRomTitle(processedTrackData.title)
            processedTrackData.language = 'mandarin'
            processedTrackData.initialism = getInitialism(processedTrackData.romTitle)
        } else {
            processedTrackData.language = 'english'
            processedTrackData.initialism = getInitialism(processedTrackData.title)
        }

        console.log(processedTrackData)
        return processedTrackData

    } catch (e) {
        return e
    }
}