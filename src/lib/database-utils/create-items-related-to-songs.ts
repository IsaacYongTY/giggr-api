import findOrBulkCreateMusicians from "./find-or-bulk-create-musicians";
import findOrBulkCreateDbItems from "./find-or-bulk-create-db-items";

export default async function createItemsRelatedToSong(database: string, song: any, formData: any, userId: number) {
    let { composers, songwriters, arrangers, genres, moods, tags } = formData || {}

    if(composers && composers.length ) {
        const dbComposers = await findOrBulkCreateMusicians(database, composers, userId)
        await song.setComposers(dbComposers.map((element: any) => element[0]))
    }

    if(songwriters && songwriters.length) {
        const dbSongwriters = await findOrBulkCreateMusicians(database, songwriters, userId)
        await song.setSongwriters(dbSongwriters.map((element: any) => element[0]))
    }

    if(arrangers && arrangers.length) {
        const dbArrangers = await findOrBulkCreateMusicians(database, arrangers, userId)
        await song.setArrangers(dbArrangers.map((element: any) => element[0]))
    }

    if(genres && genres.length) {
        const dbGenres = await findOrBulkCreateDbItems(database, 'genre', genres, userId)
        const dbGenresIdArray = dbGenres.map(element => element.id)
        await song.setGenres(dbGenresIdArray)
    }

    if(moods && moods.length) {
        const dbMoods = await findOrBulkCreateDbItems(database, 'mood', moods, userId)
        const dbMoodsIdArray = dbMoods.map(element => element.id)
        await song.setMoods(dbMoodsIdArray)
    }
    console.log(tags)
    if(tags && tags.length) {
        const dbTags = await findOrBulkCreateDbItems(database, 'tag', tags, userId)
        console.log(dbTags)
        const dbTagsIdArray = dbTags.map(element => element.id)
        await song.setTags(dbTagsIdArray)
    }
}
