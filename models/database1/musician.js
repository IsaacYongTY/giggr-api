'use strict';

module.exports = (sequelize, DataTypes) => {

  const Musician = sequelize.define('musician', {

    name: DataTypes.STRING,
    romName: DataTypes.STRING,
    enName: DataTypes.STRING,

  }, {
    timestamps: false,
    underscored: true
  })

  Musician.associate = models => {
    Musician.hasMany(models.song, {foreignKey: "artistId"})
    Musician.belongsToMany(models.song, {
      through: "songs_songwriters",
      foreignKey: "songwriterId",
      otherKey: "songId",
      timestamps: false,
      onDelete: "cascade"
    })
    Musician.belongsToMany(models.song, {

      through: "songs_composers",
      foreignKey: "composerId",
      otherKey: "songId",
      timestamps: false,
      onDelete: "cascade"
    })
    Musician.belongsToMany(models.song, {

      through: "songs_arrangers",
      foreignKey: "arrangerId",
      otherKey: "songId",
      timestamps: false,
      onDelete: "cascade"
    })
    Musician.belongsToMany(models.role, { through: "roles_musicians", foreignKey: "musicianId", otherKey: "roleId", timestamps: false, onDelete: "cascade" })
  }

  return Musician
}
