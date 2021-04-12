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
    key: {
        type: DataTypes.STRING,
    },
    bpm: {
        type: DataTypes.INTEGER,
    },
    durationMs: {
        type: DataTypes.INTEGER,
    },
    timeSignature: {
        type: DataTypes.STRING
    }
})

module.exports = Song