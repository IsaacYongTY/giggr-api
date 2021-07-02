'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tag = sequelize.define('tag', {

    name: {
      type: DataTypes.STRING(30),
      allowNull: false
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

  Tag.associate = models => {
    Tag.belongsToMany(models.song, { through: "songs_tags", timestamps: false, onDelete: "cascade"})
    Tag.belongsTo(models.user)
  }

  return Tag
}
