'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("songs_genres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })

    await queryInterface.createTable("songs_moods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mood_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })

    await queryInterface.createTable("songs_tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tag_id: {
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
    await queryInterface.dropTable("tags_songs");
    await queryInterface.dropTable("moods_songs");
    await queryInterface.dropTable("genres_songs");
  }
};
