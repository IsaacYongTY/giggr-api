'use strict';
const bcrypt = require('bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tier: {
      type: DataTypes.STRING,
      defaultValue: 'free'
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  User.beforeCreate(async(user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword
  })



  return User;
};