'use strict';

module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define('song', {

        title: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        artistId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        romTitle: {
          type: DataTypes.STRING(50)
        },
        key: {
          type: DataTypes.INTEGER,
        },

        myKey: {
          type: DataTypes.INTEGER
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
          type: DataTypes.STRING(5),
          defaultValue: '4/4'
        },
        verified: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },

        languageId: {
          type: DataTypes.INTEGER
        },
        initialism: {
          type: DataTypes.STRING(20)
        },
        spotifyLink: {
          type: DataTypes.STRING(100)
        },
        youtubeLink: {
          type: DataTypes.STRING(100)
        },
        otherLink: {
            type: DataTypes.STRING(100)
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
          type: DataTypes.STRING(10)
        },
        status: {
          type: DataTypes.STRING(20)
        },
        performStatus: {
          type: DataTypes.STRING(20)
        },
        remarks: {
            type: DataTypes.STRING(255)
        },
        rating: {
            type: DataTypes.INTEGER
        }
      }, {
        underscored: true

    }

    )

    Song.associate = models => {

        Song.belongsTo(models.user)
        Song.belongsTo(models.language)
        Song.belongsTo(models.musician, {as: "artist"})
        Song.belongsToMany(models.setlist, { through: "setlists_songs", timestamps: false, onDelete: "cascade"})
        Song.belongsToMany(models.genre, { through: "songs_genres", timestamps: false })
        Song.belongsToMany(models.mood, { through: "songs_moods", timestamps: false, onDelete: "cascade"})
        Song.belongsToMany(models.tag, { through: "songs_tags", timestamps: false, onDelete: "cascade"})
        Song.belongsToMany(models.musician, {
            as: "songwriters",
            through: "songs_songwriters",
            foreignKey: "songId",
            otherKey: "songwriterId",
            timestamps: false,
            onDelete: "cascade"

        })
        Song.belongsToMany(models.musician, {
            as: "composers",
            through: "songs_composers",
            foreignKey: "songId",
            otherKey: "composerId",
            timestamps: false,
            onDelete: "cascade"
        })
        Song.belongsToMany(models.musician, {
            as: "arrangers",
            through: "songs_arrangers",
            foreignKey: "songId",
            otherKey: "arrangerId",
            timestamps: false,
            onDelete: "cascade"
        })

    }
    return Song
}