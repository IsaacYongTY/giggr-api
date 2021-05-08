'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {

        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tierId: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            // references: {
            //     models: "tiers",
            //     foreignKey: "tier_id"
            // }
        },
    }, {
        underscored: true
    })

    User.associate = models => {

        User.hasMany(models.setlist)
        User.belongsTo(models.tier)
        User.hasMany(models.gig)
        // User.belongsToMany(models.song, { as: 'song', through: 'songs_users', foreignKey: 'song_id',})
    }

    User.beforeCreate(async (user, options) => {
        user.password = await bcrypt.hash(user.password, 10)
    })

    return User
}
