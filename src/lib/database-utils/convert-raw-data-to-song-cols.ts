import convertDurationMinSecToMs from "../utils/convert-duration-min-sec-to-ms";
import convertKeyToKeyModeInt from "../utils/convert-key-to-key-mode-int";
import convertCommaSeparatedStringToArray from "../utils/convert-comma-separated-string-to-array";

interface CsvSongCol {
    title: string
    userId: number
    romTitle: string
    artistId: number,
    languageId: number,
    tempo: number
    timeSignature : string,
    initialism: string,
    durationMs: number
    spotifyLink: string
    youtubeLink: string
    otherLink: string
    key: number,
    myKey: number,
    mode: number,
    energy : number,
    danceability: number,
    valence: number,
    acousticness: number,
    instrumentalness: number,
    dateReleased: string,
    composers: string[],
    songwriters: string[],
    arrangers: string[],
    genres: string[],
    moods: string[],
    tags: string[],
}

export default function convertRawDataToSongCols(database: string, data: any, userId: number) : CsvSongCol[] {

    return data.map((row: any) => {

        let {
            title,
            romTitle,
            artist,
            key,
            myKey,
            tempo,
            durationMinSec,
            durationMs,
            timeSignature,
            initialism,
            language,
            languageId,
            spotifyLink,
            youtubeLink,
            otherLink,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            dateReleased,
            composers,
            songwriters,
            arrangers,
            genres,
            moods,
            tags
        } = row || {}

        let finalDurationMs = 0;

        if(durationMs) {
            finalDurationMs = durationMs
        } else if (durationMinSec) {
            finalDurationMs = convertDurationMinSecToMs(durationMinSec)
        }

        return {
            title,
            userId,
            romTitle,
            artist,
            languageId,
            tempo: tempo || 0,
            language,
            timeSignature,
            initialism,
            durationMs: finalDurationMs,
            spotifyLink: spotifyLink || "",
            youtubeLink: youtubeLink || "",
            otherLink: otherLink || "",
            key: key ? convertKeyToKeyModeInt(key)[0] : null,
            myKey: myKey ? convertKeyToKeyModeInt(myKey)[0] : null,
            mode: key ? convertKeyToKeyModeInt(key)[1] : null,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            dateReleased,
            composers: convertCommaSeparatedStringToArray(composers),
            songwriters: convertCommaSeparatedStringToArray(songwriters),
            arrangers: convertCommaSeparatedStringToArray(arrangers),
            genres: convertCommaSeparatedStringToArray(genres),
            moods: convertCommaSeparatedStringToArray(moods),
            tags: convertCommaSeparatedStringToArray(tags),

        }
    })
}