const db = require('../../models')

export default async function findOrCreateLanguage(database: string, language: any, user: any) {
    return await db[database].models.language.findOrCreate({
        defaults: {
            name: language,
            userId: user.id
        },
        where: { name: language.toLowerCase()}})
}
