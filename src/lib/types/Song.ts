import Musician from "./Musician";

export default interface Song {
    [key: string] : any,
    id: number,
    title: string,
    romTitle: string,
    artist: Musician
    artistId: number,
    tempo: number,
    createdAt: Date,
    updatedAt: Date,
    dateReleased: Date,
    durationMinSec: string,
    durationMs: number,
    timeSignature: string,
    initialism: string,
    key: number,
    myKey?: string,
    languageId: number,
    mode: number,

    spotifyLink: string,
    youtubeLink: string,
    otherLink: string,

    acousticness: number,
    valence: number,
    instrumentalness: number,
    danceability: number,
    energy: number,
    verified: boolean,
    mood: [],
    genre: [],
    tags: [],
    performStatus?: string,
    status?: string,

}