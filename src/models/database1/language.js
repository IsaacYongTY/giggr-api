'use strict';

module.exports = (sequelize, DataTypes) => {


  const Language = sequelize.define('language', {

    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Language.associate = models => {
    Language.hasMany(models.song)
    Language.belongsTo(models.user)
  }
  return Language
}
