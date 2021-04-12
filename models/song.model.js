const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Song = sequelize.define('song', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    romTitle: {
        type: DataTypes.STRING
    },
    key: {
        type: DataTypes.STRING,
    },
    myKey: {
        type: DataTypes.STRING
    },
    bpm: {
        type: DataTypes.INTEGER,
    },
    durationMs: {
        type: DataTypes.INTEGER,
    },
    timeSignature: {
        type: DataTypes.STRING,
        defaultValue: '4/4'
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    genre: {
        type: DataTypes.STRING
    },

    mood: {
        type: DataTypes.STRING
    },
    language: {
        type: DataTypes.STRING
    },
    initialism: {
        type: DataTypes.STRING
    },
    spotifyLink: {
        type: DataTypes.STRING
    },
    youtubeLink: {
        type: DataTypes.STRING
    },
    energy: {
        type: DataTypes.FLOAT,
    },
    danceability: {
        type: DataTypes.FLOAT
    },
    valence: {
        type: DataTypes.FLOAT
    },
    acousticness: {
        type: DataTypes.FLOAT
    },
    authors: {
        type: DataTypes.STRING
    },
    composers: {
        type: DataTypes.STRING
    },
    arrangers: {
        type: DataTypes.STRING
    },
    tags: {
        type: DataTypes.STRING
    },
    yearReleased: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },
    performStatus: {
        type: DataTypes.STRING
    }
})

module.exports = Song


// const songSchema = new Schema({
//     title: { type: String, required: true },
//     artist: { type: String, required: true },
//     key: { type: String, required: true },
//     myKey: { type: String, required: true },
//     bpm: { type: Number, required: true },
//     durationMs: { type: String, required: true},
//     timeSignature: { type: String, required: true },
//     verified: { type: Boolean, required: false},
//     genre: [{ type: String }],
//     mood: [{ type: String }],
//     language: { type: String, required: true },
//     initialism: { type: String },
//     link: {
//         spotify: { type: String },
//         youtube: { type: String }
//
//     },
//     spotifyRawData: [],
//     songwriters: [{ type: String }],
//     composers: [{ type: String }],
//     arrangers: [{ type: String }],
//     tags: [{ type: String }],
//     yearReleased: { type: String },
//     status: { type: String },
//     performStatus: { type: String}
// })
//
// module.exports = mongoose.model('Song', songSchema)