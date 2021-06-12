'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('moods',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30)
      },
    })

    await queryInterface.createTable('tags',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
    })

    await queryInterface.createTable('languages',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20)
      },
    })



    await queryInterface.createTable("moods_songs", {
      mood_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      song_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })

    await queryInterface.createTable("genres_songs", {
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      song_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })

    await queryInterface.createTable("tags_songs", {
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      song_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('tags_songs')
    await queryInterface.dropTable('genres_songs')
    await queryInterface.dropTable('moods_songs')

    await queryInterface.dropTable('languages')
    await queryInterface.dropTable('tags')
    await queryInterface.dropTable('moods')

  }
};
