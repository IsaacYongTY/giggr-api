'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Tier = sequelize.define('Tier', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    }, {
    timestamps: false
})

Tier.associate = models => {
    Tier.hasMany(models.User)
}


module.exports = Tier