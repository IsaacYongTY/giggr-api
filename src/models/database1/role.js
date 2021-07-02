'use strict';

module.exports = (sequelize, DataTypes) => {


  const Role = sequelize.define('role', {

    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Role.associate = models => {
    Role.belongsToMany(models.musician, {
      through: "roles_musicians",
      timestamps: false,
      onDelete: "cascade"
    })
  }
  return Role
}
