'use strict';


const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')


const Song = sequelize.define('Song', {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    artist: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    romTitle: {
      type: DataTypes.STRING
    },
    romArtist: {
      type: DataTypes.STRING,
    },
    key: {
      type: DataTypes.INTEGER,
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
    durationMinSec: {
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
  }, {

})

Song.associate = models => {
    // Song.belongsTo(models.User)
    // Song.belongsTo(models.Artist)
    Song.belongsToMany(models.Genre, { as: 'Genres', through: 'songs_genres', foreignKey: 'songId',})
    Song.belongsToMany(models.User, { as: 'Song', through: 'songs_users', foreignKey: 'userId',})
    Song.hasOne(models.Key)
}

module.exports = Song