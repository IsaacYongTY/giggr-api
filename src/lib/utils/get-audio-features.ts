import convertTempo from "./convert-tempo";
import getRomTitle from "./get-rom-title";
import { getDataFromSpotify } from "./get-data-from-spotify";
// @ts-ignore
import containsChinese from 'contains-chinese'

import SpotifyWebApi from 'spotify-web-api-node'
import removeBrackets from './remove-brackets'

export const getInitialism = (input : string) =>
    removeBrackets(input).
    split(' ').
    reduce((acc, word) => acc + word[0].toLowerCase(), '')

export const convertTime = (spotifyTime : string | number) => `${spotifyTime}/4`


interface TrackData {
    title: string;
    artist: string;
    spotifyLink: string;
    verified: boolean;
    tempo: number;
    language: string;
    timeSignature: string;
    mode: number;
    initialism: string;
    danceability: number;
    energy: number
    instrumentalness: number;
    acousticness: number;
    valence: number;
    dateReleased: string;
    durationMs: number;
    key: number;
    romTitle: string;
}




export function addChineseTrackInfo(trackData : TrackData) {
    trackData.romTitle = getRomTitle(trackData.title)
    trackData.language = 'mandarin'
    trackData.initialism = getInitialism(trackData.romTitle)

    return trackData
}

export function addEnglishTrackInfo(trackData: TrackData) {
    trackData.language = 'english'
    trackData.initialism = getInitialism(trackData.title)

    return trackData
}


export default async function getAudioFeatures(
    data : SpotifyApi.AudioFeaturesResponse,
    trackInfo: SpotifyApi.SingleTrackResponse
) {

    try {

        let { key, mode, tempo, time_signature, duration_ms, energy,
            danceability, valence, acousticness, instrumentalness } = data

        let { artists, name, album, external_urls: { spotify } } = trackInfo

        let processedTrackData = {
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

        const isChinese: boolean = containsChinese(processedTrackData.title)

        processedTrackData = isChinese ? addChineseTrackInfo(processedTrackData) : addEnglishTrackInfo(processedTrackData)

        console.log(processedTrackData)
        return processedTrackData

    } catch (error) {
        console.log(error)
        return error
    }
}