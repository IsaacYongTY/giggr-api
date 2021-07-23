import findOrBulkCreateMusicians from "./find-or-bulk-create-musicians";
import findOrBulkCreateDbItems from "./find-or-bulk-create-db-items";
import Song from "../types/Song";
import setMusicianRole from "./set-musician-role";

export default async function createItemsRelatedToSong(song: Song, formData: any, userId: number) {
    let { composers, songwriters, arrangers, genres, moods, tags } = formData || {}

    if(composers && composers.length ) {
        const dbComposers = await findOrBulkCreateMusicians(composers, userId, "composer")
        const dbComposersWithRole = dbComposers.map(composer => setMusicianRole(composer, "composer"))
        await Promise.all(dbComposersWithRole.map(async composer => await composer.save()))
        await song.setComposers(dbComposers)
    }

    if(songwriters && songwriters.length) {
        const dbSongwriters = await findOrBulkCreateMusicians(songwriters, userId, "songwriter")
        const dbSongwritersWithRole = dbSongwriters.map(songwriter => setMusicianRole(songwriter, "songwriter"))
        await Promise.all(dbSongwritersWithRole.map(async songwriter => await songwriter.save()))
        await song.setSongwriters(dbSongwriters)
    }

    if(arrangers && arrangers.length) {
        const dbArrangers = await findOrBulkCreateMusicians(arrangers, userId, "arranger")
        const dbArrangersWithRole = dbArrangers.map(arranger => setMusicianRole(arranger, "arranger"))
        await Promise.all(dbArrangersWithRole.map(async arranger => await arranger.save()))
        await song.setArrangers(dbArrangers)
    }

    if(genres && genres.length) {
        const dbGenres = await findOrBulkCreateDbItems('genre', genres, userId)
        const dbGenresIdArray = dbGenres.map(element => element.id)
        await song.setGenres(dbGenresIdArray)
    }

    if(moods && moods.length) {
        const dbMoods = await findOrBulkCreateDbItems('mood', moods, userId)
        const dbMoodsIdArray = dbMoods.map(element => element.id)
        await song.setMoods(dbMoodsIdArray)
    }
    console.log(tags)
    if(tags && tags.length) {
        const dbTags = await findOrBulkCreateDbItems('tag', tags, userId)
        console.log(dbTags)
        const dbTagsIdArray = dbTags.map(element => element.id)
        await song.setTags(dbTagsIdArray)
    }
}
