'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  song.init({
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
    romArtist: {
      type: DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'song',
  });
  return song;
};