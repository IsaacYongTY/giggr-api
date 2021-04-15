'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Tier = sequelize.define('tier', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    }, {
    timestamps: false,
    underscored: true
})

Tier.associate = models => {
    // Tier.hasMany(models.user)
}


module.exports = Tier