
const db = require('../../models')
const { Op } = require('sequelize')
const Sequelize = require('sequelize')

const convertKeyToKeyModeInt = require('./convert-key-to-key-mode-int');
const convertDurationMinSecToMs = require("./convert-duration-min-sec-to-ms");


async function getSongs(database, number, category, order, user) {

    const models = db[database].models

    let options = {
        where: { userId: user.id},
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

async function csvDataToSongCols(database, data) {

    return data.map(async (row) => {

        let {
            title,
            romTitle,
            artist,
            artistId,
            key,
            myKey,
            tempo,
            durationMinSec,
            durationMs,
            timeSignature,
            initialism,
            language,
            languageId,
            spotifyLink,
            youtubeLink,
            otherLink,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            dateReleased,
            composers,
            songwriters,
            arrangers
        } = row || {}

        return {
            title,
            romTitle,
            artistId,
            languageId,
            tempo: tempo || 0,
            timeSignature,
            initialism,
            durationMs: durationMinSec ? convertDurationMinSecToMs(durationMinSec) : null,
            spotifyLink,
            youtubeLink,
            otherLink,
            key: key ? convertKeyToKeyModeInt(key)[0] : null,
            myKey: myKey ? convertKeyToKeyModeInt(myKey)[0] : null,
            mode: key ? convertKeyToKeyModeInt(key)[1] : null,
            energy,
            danceability,
            valence,
            acousticness,
            instrumentalness,
            dateReleased,
            composers,
            songwriters,
            arrangers
        }
    })
}


async function getOrBulkCreateDbItems(database, modelName, nameArray) {
    const models = db[database].models

    let dbItems = await models[modelName].findAll({
        where: {
            name: { [Op.or]: nameArray }
        },
        raw: true
    })

    const newItems = nameArray
        .filter(item => dbItems.findIndex(dbItem => dbItem.name === item ) === -1)
        .map(item => ({ name: item }))

    let createdNewItems = [];

    if(newItems.length) {
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

module.exports = {
    getSongs,
    getMusicians,
    getLanguages,
    getOrCreateArtist,
    getOrCreateLanguage,
    userInputToSongCols,
    csvDataToSongCols,
    getOrBulkCreateDbItems,
    bulkFindOrCreateMusicians,
    getDatabaseSongs

}