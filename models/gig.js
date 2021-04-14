'use strict';
const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Gig = sequelize.define('Gig', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: DataTypes.STRING,
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

  }
)

Gig.associate(models => {
  Gig.belongsTo(models.User)

})
module.exports = Gig