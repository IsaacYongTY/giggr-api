import db from "../../models"


interface Musician {
    [key : string] : any,
    name: string,
    romName: string,
    enName: string
}

// @ts-ignore
const models = db.database1.models

export default async function findDbMusiciansWithNameArray(musiciansNameArray : string[]) : Promise<Musician[]> {
    let promiseArr = musiciansNameArray.map(async musicianName => {
        if(!musicianName) {
            return
        }
        return await models.musician.findOne({ where: { name: musicianName}})
    })
    return await Promise.all(promiseArr)
}