'use strict';

module.exports = (sequelize, DataTypes) => {

    const Setlist = sequelize.define('setlist', {

        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
        },
    }, {
        underscored: true
    })

    Setlist.associate = models => {

        Setlist.belongsTo(models.user)
        Setlist.belongsToMany(models.song, { through: 'setlists_songs', foreignKey: 'setlistId', timestamps: false})
        // User.belongsToMany(models.song, { as: 'song', through: 'songs_users', foreignKey: 'song_id',})
    }

    return Setlist
}