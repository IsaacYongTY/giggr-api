'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("songwriters_songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songwriter_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })

    await queryInterface.createTable("composers_songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      composer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })

    await queryInterface.createTable("arrangers_songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arranger_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("arrangers_songs");
    await queryInterface.dropTable("composers_songs");
    await queryInterface.dropTable("songwriters_songs");


  }
};
