'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

module.exports = (sequelize, DataTypes) => {
    const Mode = sequelize.define('mode', {

        title: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    })

    Mode.associate = models => {

    }

    return Mode
}
