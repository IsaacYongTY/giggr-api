const db = require('../../models')

export default async function findOrCreateLanguage(language: any, userId: number) {
    return await db.database1.models.language.findOrCreate({
        defaults: {
            name: language,
            userId: userId
        },
        where: { name: language ? language.toLowerCase() : "", userId}})
}
