const db = require("../../models")

export default async function bulkDeleteSongsFromDatabase(deleteSongIdArray: number[]) : Promise<any> {
    try {
        const Song = db.database1.models.song
        await Song.destroy({ where: { id: deleteSongIdArray}})

        return deleteSongIdArray

    } catch(err) {
        throw err
    }


}