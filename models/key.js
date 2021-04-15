'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

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


module.exports = Key