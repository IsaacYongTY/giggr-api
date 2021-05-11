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

    console.log(dbLanguage)
    if(dbLanguage) {
        return dbLanguage.dataValues.id

    } else {
        console.log('here')
        const newLanguage = await models.language.create({
            name: language.toLowerCase(),
        })
        console.log(newLanguage)
        return newLanguage.id
    }
}

async function userInputToSongCols(data){

    console.log(data)
    let {
        title,
        artist,
        key,
        tempo,
        durationMinSec,
        timeSignature,
        language
    } = data || {}

    const artistId = await getArtistId(artist)
    const languageId = await getLanguageId(language)

    return {
        title,
        artistId,
        key: convertKeyToKeyModeInt(key)[0],
        tempo,
        durationMs: convertMinSecToMs(durationMinSec),
        timeSignature,
        languageId
    }

}

async function csvUserInputToSongCols(data) {

    return data.map(async (row) => {
        let {
            title,
            artist,
            key,
            myKey,
            tempo,
            durationMinSec,
            timeSignature,
            language,
            spotifyLink,
            youtubeLink,
            otherLink,
        } = row || {}

        const artistId = await getArtistId(artist)
        const languageId = await getLanguageId(language)

        return {
            title,
            artistId,
            languageId,
            tempo,
            timeSignature,
            durationMs: durationMinSec ? convertMinSecToMs(durationMinSec) : null,
            spotifyLink,
            youtubeLink,
            otherLink,
            key: key ? convertKeyToKeyModeInt(key)[0] : null,
            myKey: myKey ? convertKeyToKeyModeInt(key)[0] : null,
            mode: key ?convertKeyToKeyModeInt(key)[1] : null
        }
    })
}

module.exports = {
    getSongs,
    getArtistId,
    getLanguageId,
    userInputToSongCols,
    csvUserInputToSongCols
}