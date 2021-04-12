'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gig.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    venue: DataTypes.STRING,
    pay: DataTypes.FLOAT,
    repeat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    frequency: {
      type: DataTypes.Integer
    }

  }, {
    sequelize,
    modelName: 'gig',
  });
  return gig;
};