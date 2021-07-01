'use strict';

module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define('song', {

        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
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
          type: DataTypes.STRING,
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
          type: DataTypes.STRING
        },
        spotifyLink: {
          type: DataTypes.STRING
        },
        youtubeLink: {
          type: DataTypes.STRING
        },
        otherLink: {
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
        instrumentalness: {
            type: DataTypes.FLOAT
        },
        // tags: {
        //   type: DataTypes.STRING
        // },
        dateReleased: {
          type: DataTypes.STRING
        },
        status: {
          type: DataTypes.STRING
        },
        performStatus: {
          type: DataTypes.STRING
        }
      }, {
        underscored: true

    }

    )

    Song.associate = models => {

        Song.belongsTo(models.user)
        // Song.belongsTo(models.Artist)
        // Song.belongsToMany(models.genre, { through: 'songs_genres', foreignKey: 'songId',})
        // Song.belongsToMany(models.user, { as: 'song', through: 'songs_users', foreignKey: 'user_id',})
        // Song.hasOne(models.key)
        Song.belongsTo(models.language)
        Song.belongsTo(models.musician, {as: "artist"})
        Song.belongsToMany(models.setlist, { through: "setlists_songs", timestamps: false, onDelete: "cascade"})
        Song.belongsToMany(models.genre, { through: "songs_genres", timestamps: false, onDelete: "cascade"})
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