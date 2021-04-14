'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Key = sequelize.define('Key', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: false
})

Key.associate(models => {
    Key.hasMany(models.Song)
})


module.exports = Key