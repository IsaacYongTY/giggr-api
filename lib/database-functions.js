const models = require('../models').database1.models
const { convertMinSecToMs, convertKeyToKeyModeInt, getAudioFeatures, convertKeyToKeyMode, convertIntToKey} = require('./library')

async function getSongs(number,category,order) {
    let options = {
        include: [{
            model: models.musician,
            as: "artist"
        }, {
            model: models.musician,
            as: "composers",
            attributes: ["id", "enName"]
        }, {
            model: models.language,
            attributes: ["id","name"]
        }],
    }

    if(number) {
        options.limit = number
    }

    if(category && order) {
        options.order = [
            [category, order]
        ]
    }

    const songs = await models.song.findAll(options)

    return songs.map(song => {
        song.key = convertIntToKey(song.key, 'forward')

        if (song.mode === 1) {
            song.key += 'm'
        }

        return song
    })
}

async function getArtistId(artist) {

    const musician = await models.musician.findOne({where: { name: artist}})

    if(musician) {
        return musician.dataValues.id
    } else {
        const newArtist = await models.musician.create({
            name: artist,
        })
        return newArtist.id
    }
}

async function getLanguageId(language) {
    const dbLanguage = await models.language.findOne({where: { name: language.toLowerCase()}})

    if(dbLanguage) {
        return dbLanguage.dataValues.id

    } else {
        const newLanguage = await models.language.create({
            name: language.toLowerCase(),
        })
        return newLanguage.id
    }
}

module.exports = { getSongs, getArtistId, getLanguageId }