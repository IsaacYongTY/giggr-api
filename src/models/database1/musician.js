'use strict';

module.exports = (sequelize, DataTypes) => {

  const Musician = sequelize.define('musician', {

    name: DataTypes.STRING(50),
    romName: DataTypes.STRING(50),
    spotifyName: DataTypes.STRING(50),
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    isArtist: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isComposer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isSongwriter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isArranger: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false,
    underscored: true
  })

  Musician.associate = models => {
    Musician.hasMany(models.song, {foreignKey: "artistId"})
    Musician.belongsTo(models.user)
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
    Musician.belongsToMany(models.role, {
      through: "roles_musicians",
      foreignKey: "musicianId",
      otherKey: "roleId",
      timestamps: false,
      onDelete: "cascade"
    })
  }

  return Musician
}
