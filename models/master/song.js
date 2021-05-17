'use strict';

module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define('song', {

        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        artistId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        romTitle: {
          type: DataTypes.STRING
        },
        key: {
          type: DataTypes.INTEGER,
        },
        mode: {
            type:DataTypes.INTEGER
        },
        tempo: {
          type: DataTypes.INTEGER,
        },
        durationMs: {
          type: DataTypes.INTEGER,
        },
        timeSignature: {
          type: DataTypes.STRING,
          defaultValue: '4/4'
        },
        languageId: {
          type: DataTypes.INTEGER
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
        otherLink: {
            type: DataTypes.INTEGER
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
        instrumentalness: {
            type: DataTypes.FLOAT
        },
        dateReleased: {
          type: DataTypes.STRING
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
      }, {
        underscored: true
    })

    Song.associate = models => {
        Song.belongsTo(models.language)
        Song.belongsTo(models.musician, {as: "artist"})
        Song.belongsToMany(models.musician, {
            as: "songwriters",
            through: "songwriters_songs",
            foreignKey: "songId",
            otherKey: "songwriterId",
            timestamps: false
        })
        Song.belongsToMany(models.musician, {
            as: "composers",
            through: "composers_songs",
            foreignKey: "songId",
            otherKey: "composerId",
            timestamps: false
        })
        Song.belongsToMany(models.musician, {
            as: "arrangers",
            through: "arrangers_songs",
            foreignKey: "songId",
            otherKey: "arrangerId",
            timestamps: false
        })

    }
    return Song
}