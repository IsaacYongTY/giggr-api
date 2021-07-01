import convertNestedArraysToStringArray from "./convert-nested-arrays-to-string-array";

const db = require('../../models')
const { Op } = require('sequelize')
const Sequelize = require('sequelize')

import convertKeyToKeyModeInt from './convert-key-to-key-mode-int';
import convertDurationMinSecToMs from "./convert-duration-min-sec-to-ms";
import convertCommaSeparatedStringToArray from "./convert-comma-separated-string-to-array";


async function getSongs(database, number, category, order, user) {

    const models = db[database].models

    let options = {
        where: { userId: user.id},
        include: [{
            model: models.musician,
            as: "artist"
        },
        {
            model: models.musician,
            as: "composers",
            attributes: ["id", "name"]
        },
        {
            model: models.musician,
            as: "songwriters",
            attributes: ["id", "name"]
        },
            {
            model: models.musician,
            as: "arrangers",
            attributes: ["id", "name"]
        },
            {
            model: models.language,
            attributes: ["id", "name"]
        },
            {
            model: models.genre,
            attributes: ["id", "name"]
        }, {
            model: models.mood,
            attributes: ["id", "name"]
        }, {
            model: models.tag,
            attributes: ["id", "name"]
        }],
    }

    if (number) {
        options.limit = number
    }

    if (category && order) {
        options.order = [
            [category, order]
        ]
    }
    try {
        console.log( models.song)
       return await models.song.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}

async function getDatabaseSongs(number, category, order) {

    const models = db['master'].models

    let options = {
        include: [{
            model: models.musician,
            as: "artist"
        },  {
            model: models.musician,
            as: "composers",
            attributes: ["id", "name"]
        }, {
            model: models.musician,
            as: "songwriters",
            attributes: ["id", "name"]
        }, {
            model: models.musician,
            as: "arrangers",
            attributes: ["id", "name"]
        }, {
            model: models.language,
            attributes: ["id", "name"]
        }, {
            model: models.genre,
            attributes: ["id", "name"]
        }, {
            model: models.mood,
            attributes: ["id", "name"]
        }, {
            model: models.tag,
            attributes: ["id", "name"]
        }],
    }

    if (number) {
        options.limit = number
    }

    if (category && order) {
        options.order = [
            [category, order]
        ]
    }
    try {

        return await models.song.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}

async function getMusicians(database,number,category,order) {

    if(!database) {
        return
    }

    const models = db[database].models

    let options = {
        // include: [{
        //     model: models.role,
        //     attributes: ["id", "name"]
        // }],
    }

    if (number) {
        options.limit = number
    }


    if (category && order) {
        options.order = [
            [
                Sequelize.fn('lower', Sequelize.col(category)),
                order
            ]
        ]
    }

    try {

        return await models.musician.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}

async function getLanguages(database,number,category,order) {

    if(!database) {
        return
    }

    const models = db[database].models

    let options = {
        // include: [],
    }

    if (number) {
        options.limit = number
    }

    if (category && order) {
        options.order = [
            [category, order]
        ]
    }

    try {

        return await models.language.findAll(options)

    } catch (error) {
        console.log(error)
        return error
    }
}
async function getOrCreateArtist(database, artist) {
    return await db[database].models.musician.findOrCreate({where: { name: artist}})

}

async function getOrCreateLanguage(database, language) {
    return await db[database].models.language.findOrCreate({where: { name: language.toLowerCase()}})
}


async function userInputToSongCols(database, data, user){

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

    const [dbArtist] = await getOrCreateArtist(database, artist)

    const [dbLanguage] = await getOrCreateLanguage(database, language)

    console.log('here')
    console.log(user)

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




async function getOrBulkCreateDbItems(database, modelName, nameArray, userId) {
    const models = db[database].models

    let dbItems = await models[modelName].findAll({
        where: {
            name: { [Op.or]: nameArray }
        },
        raw: true
    })

    const newItems = nameArray
        .filter(item => dbItems.findIndex(dbItem => dbItem.name === item ) === -1)
        .map(item => ({ name: item, userId: userId }))

    let createdNewItems = [];

    if(newItems.length) {
        console.log(newItems)
        createdNewItems = await models[modelName].bulkCreate(newItems)
    }

    return [...dbItems, ...createdNewItems]
}


async function bulkFindOrCreateMusicians(database, musicians) {

    if(!musicians || !musicians.length) {
        return []
    }

    return await Promise.all(musicians.map(async musician =>
        await db[database].models.musician.findOrCreate({
            defaults: {name: musician},
            where: {name: musician}
        })
    ))
}

async function createItemsRelatedToSong(database, song, formData) {
    let { composers, songwriters, arrangers, genres, moods, tags } = formData || {}
    if(composers && composers.length ) {
        const dbComposers = await bulkFindOrCreateMusicians(database, composers)
        await song.setComposers(dbComposers.map(element => element[0]))
    }

    if(songwriters && songwriters.length) {
        const dbSongwriters = await bulkFindOrCreateMusicians(database, songwriters)
        await song.setSongwriters(dbSongwriters.map(element => element[0]))
    }

    if(arrangers && arrangers.length) {
        const dbArrangers = await bulkFindOrCreateMusicians(database, arrangers)
        await song.setArrangers(dbArrangers.map(element => element[0]))
    }

    if(genres && genres.length) {
        const dbGenres = await getOrBulkCreateDbItems(database, 'genre', genres)
        const dbGenresIdArray = dbGenres.map(element => element.id)
        await song.setGenres(dbGenresIdArray)
    }

    if(moods && moods.length) {
        const dbMoods = await getOrBulkCreateDbItems(database, 'mood', moods)
        const dbMoodsIdArray = dbMoods.map(element => element.id)
        await song.setMoods(dbMoodsIdArray)
    }
    console.log(tags)
    if(tags && tags.length) {
        const dbTags = await getOrBulkCreateDbItems(database, 'tag', tags)
        console.log(dbTags)
        const dbTagsIdArray = dbTags.map(element => element.id)
        await song.setTags(dbTagsIdArray)
    }
}

module.exports = {
    getSongs,
    getMusicians,
    getOrBulkCreateDbItems,
    getLanguages,
    getOrCreateArtist,
    getOrCreateLanguage,
    userInputToSongCols,
    bulkFindOrCreateMusicians,
    getDatabaseSongs,
    createItemsRelatedToSong

}