'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      artistId: {
        type: Sequelize.INTEGER,
      },
      romTitle: {
        type: Sequelize.STRING
      },
      romArtist: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.INTEGER,
        references: {
          model: "Keys",
          foreignKey: "keyId"
        }
      },
      myKey: {
        type: Sequelize.INTEGER,
        references: {
          model: "Keys",
          foreignKey: "keyId"
        }
      },
      bpm: {
        type: Sequelize.INTEGER,
      },
      durationMs: {
        type: Sequelize.INTEGER,
      },
      durationMinSec: {
        type: Sequelize.INTEGER,
      },
      timeSignature: {
        type: Sequelize.STRING,
        defaultValue: '4/4'
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      genre: {
        type: Sequelize.STRING
      },

      mood: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      initialism: {
        type: Sequelize.STRING
      },
      spotifyLink: {
        type: Sequelize.STRING
      },
      youtubeLink: {
        type: Sequelize.STRING
      },
      energy: {
        type: Sequelize.FLOAT,
      },
      danceability: {
        type: Sequelize.FLOAT
      },
      valence: {
        type: Sequelize.FLOAT
      },
      acousticness: {
        type: Sequelize.FLOAT
      },
      authors: {
        type: Sequelize.STRING
      },
      composers: {
        type: Sequelize.STRING
      },
      arrangers: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      yearReleased: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      performStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Songs');
  }
};