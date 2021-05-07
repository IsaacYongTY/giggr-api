'use strict';

module.exports = (sequelize, DataTypes) => {

    const Key = sequelize.define('key', {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    })

    Key.associate = models => {
        // Key.hasMany(models.song)
    }
    return Key
}
