'use strict';

module.exports = (sequelize, DataTypes) => {

    const Setlist = sequelize.define('setlist', {

        title: {
            allowNull: false,
            type: DataTypes.STRING(100)
        },
        description: {
            type: DataTypes.STRING(255)
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
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