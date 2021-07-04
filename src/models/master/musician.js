'use strict';

module.exports = (sequelize, DataTypes) => {

  const Musician = sequelize.define('musician', {

    name: DataTypes.STRING(50),
    romName: DataTypes.STRING(50),
    spotifyName: DataTypes.STRING(50),

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
    })
    Musician.belongsToMany(models.song, {
      through: "songs_composers",
      foreignKey: "composerId",
      otherKey: "songId",
      timestamps: false,
    })
    Musician.belongsToMany(models.song, {
      through: "songs_arrangers",
      foreignKey: "arrangerId",
      otherKey: "songId",
      timestamps: false,
    })
    Musician.belongsToMany(models.role, {
      through: "roles_musicians",
      foreignKey: "musicianId",
      otherKey: "roleId",
      timestamps: false,
    })
  }

  return Musician
}
