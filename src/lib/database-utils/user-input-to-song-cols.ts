import findOrCreateArtist from "./find-or-create-artist";
import findOrCreateLanguage from "./find-or-create-language";
import convertDurationMinSecToMs from "../utils/convert-duration-min-sec-to-ms";
import setMusicianRole from "./set-musician-role";


export default async function userInputToSongCols(data: any, userId: number){

    let {
        title,
        artist,
        artistId,
        key,
        myKey,
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

    const [dbArtist, created] = await findOrCreateArtist(artist, userId)

    let artistWithRole;
    if(!created) {
        artistWithRole = setMusicianRole(dbArtist, "artist")
        await artistWithRole.save()
        console.log(artistWithRole)
    }
    const [dbLanguage] = await findOrCreateLanguage(language, userId)


    const durationMs = durationMinSec ? convertDurationMinSecToMs(durationMinSec) : null

    return {
        title,
        userId: userId,
        artistId: dbArtist.id,
        key,
        myKey,
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

