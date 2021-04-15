'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

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


module.exports = Mode