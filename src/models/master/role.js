'use strict';

module.exports = (sequelize, DataTypes) => {


  const Role = sequelize.define('role', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Role.associate = models => {
    // Role.hasMany(models.musician)
  }
  return Role
}
