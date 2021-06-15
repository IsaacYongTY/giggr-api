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
    Musician.belongsToMany(models.song, { through: "songwriters_songs", foreignKey: "songwriterId", timestamps: false})
    Musician.belongsToMany(models.song, { through: "composers_songs", foreignKey: "composerId", timestamps: false})
    Musician.belongsToMany(models.song, { through: "arrangers_songs", foreignKey: "arrangerId", timestamps: false})
    // Musician.belongsTo(models.role)
  }

  return Musician
}
