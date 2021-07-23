const db = require('../../models')

export default async function findOrCreateLanguage(database: string, language: any, userId: number) {
    return await db[database].models.language.findOrCreate({
        defaults: {
            name: language,
            userId: userId
        },
        where: { name: language ? language.toLowerCase() : ""}})
}
