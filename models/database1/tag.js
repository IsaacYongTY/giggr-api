'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tag = sequelize.define('tag', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Tag.associate = models => {
    Tag.belongsToMany(models.song, { through: "tags_songs", foreignKey: "tagId", timestamps: false})
  }

  return Tag
}
