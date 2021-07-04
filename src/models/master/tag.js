'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tag = sequelize.define('tag', {

    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Tag.associate = models => {
    Tag.belongsToMany(models.song, { through: "songs_tags", timestamps: false})

  }

  return Tag
}
