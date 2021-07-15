import findOrCreateArtist from "./find-or-create-artist";
import findOrCreateLanguage from "./find-or-create-language";
import convertDurationMinSecToMs from "../utils/convert-duration-min-sec-to-ms";


export default async function userInputToSongCols(database: string, data: any, userId: number){

    let {
        title,
        artist,
        artistId,
        key,
        mode,
        tempo,
        spotifyLink,
        youtubeLink,
        otherLink,
        durationMinSec,
        timeSignature,
        energy,
        danceability,
        valence,
        acousticness,
        instrumentalness,
        verified,
        dateReleased,
        romTitle,
        initialism,
        language,
        languageId,
        status
    } = data || {}

    const [dbArtist] = await findOrCreateArtist(database, artist, userId)
    const [dbLanguage] = await findOrCreateLanguage(database, language, userId)

    const durationMs = convertDurationMinSecToMs(durationMinSec)

    return {
        title,
        userId: userId,
        artistId: dbArtist.id,
        key,
        mode,
        tempo,
        durationMs,
        timeSignature,
        languageId: dbLanguage.id,
        spotifyLink,
        youtubeLink,
        otherLink,
        energy,
        danceability,
        valence,
        acousticness,
        instrumentalness,
        verified,
        dateReleased,
        romTitle,
        initialism,
        status

    }

}

