import findOrCreateArtist from "./find-or-create-artist";
import findOrCreateLanguage from "./find-or-create-language";


export default async function userInputToSongCols(database: string, data: any, user: any){

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

    const [dbArtist] = await findOrCreateArtist(database, artist, user)
    const [dbLanguage] = await findOrCreateLanguage(database, language, user)

    return {
        title,
        userId: user.id,
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

