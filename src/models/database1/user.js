'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {

        firstName: {
            type: DataTypes.STRING(50)
        },
        lastName: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tierId: {
            type: DataTypes.INTEGER(50),
            defaultValue: 1,
            references: {
                models: "tiers",
                key: "id"
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        underscored: true
    })

    User.associate = models => {

        User.hasMany(models.setlist)
        User.belongsTo(models.tier)
        User.hasMany(models.gig)
        User.hasMany(models.song)
        User.hasMany(models.genre)
        User.hasMany(models.mood)
        User.hasMany(models.tag)
        User.hasMany(models.musician)
        User.hasMany(models.song)
        User.hasMany(models.language)
        // User.belongsToMany(models.song, { as: 'song', through: 'songs_users', foreignKey: 'song_id',})
    }

    User.beforeCreate(async (user, options) => {
        user.password = await bcrypt.hash(user.password, 10)
    })

    return User
}
