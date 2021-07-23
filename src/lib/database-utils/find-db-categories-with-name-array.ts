import db from "../../models"


interface Categories {
    [key : string] : any,
    name: string,
    id: number,
    userId: number
}

// @ts-ignore
const models = db.database1.models

export default async function findDbCategoriesWithNameArray(categoriesNameArray : string[], modelName: string) : Promise<Categories[]> {
    let promiseArr = categoriesNameArray.map(async categoryName => {
        if(!categoryName) {
            return
        }
        return await models[modelName].findOne({ where: { name: categoryName}})
    })
    return await Promise.all(promiseArr)
}