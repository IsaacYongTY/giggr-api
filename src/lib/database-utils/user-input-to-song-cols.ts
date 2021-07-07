import findOrCreateArtist from "./find-or-create-artist";
import findOrCreateLanguage from "./find-or-create-language";


export default async function userInputToSongCols(database: string, data: any, userId: number){

    let {
        title,
        artist,
        artistId,
        key,
        mode,
        tempo,
        spotifyLink,
        durationMs,
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
    } = data || {}

    const [dbArtist] = await findOrCreateArtist(database, artist, userId)
    const [dbLanguage] = await findOrCreateLanguage(database, language, userId)

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
        energy,
        danceability,
        valence,
        acousticness,
        instrumentalness,
        verified,
        dateReleased,
        romTitle,
        initialism,

    }

}

