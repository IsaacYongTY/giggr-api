'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('songs', {
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
      artist_id: {
        type: Sequelize.INTEGER,
      },
      rom_title: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.INTEGER,
      },
      my_key: {
        type: Sequelize.INTEGER,
      },
      mode: {
        type: Sequelize.INTEGER,
      },
      tempo: {
        type: Sequelize.INTEGER,
      },
      duration_ms: {
        type: Sequelize.INTEGER,
      },
      time_signature: {
        type: Sequelize.STRING,
        defaultValue: '4/4'
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      initialism: {
        type: Sequelize.STRING
      },
      spotify_link: {
        type: Sequelize.STRING
      },
      youtube_link: {
        type: Sequelize.STRING
      },
      other_link: {
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
      instrumentalness: {
        type: Sequelize.FLOAT
      },
      date_released: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      perform_status: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('songs');
  }
};