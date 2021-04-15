'use strict';
const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Gig = sequelize.define('gig', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: DataTypes.DATE,
    venue: DataTypes.STRING,
    pay: DataTypes.FLOAT,
    repeat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    frequency: {
      type: DataTypes.INTEGER
    }


  }, {
    underscored: true
  }
)

Gig.associate = models => {
  Gig.belongsTo(models.user)

}
module.exports = Gig