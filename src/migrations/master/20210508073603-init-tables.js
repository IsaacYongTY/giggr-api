'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

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

    await queryInterface.createTable('genres',{
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
        type: Sequelize.STRING(30)
      },
    })


    await queryInterface.createTable('musicians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rom_name: {
        type: Sequelize.STRING
      },
      spotify_name: {
        type: Sequelize.STRING
      },
    });

    await queryInterface.createTable('roles',{
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

    await queryInterface.createTable('songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      artist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "musicians",
          key: "id"
        }
      },
      contributor_id: {
        type: Sequelize.INTEGER,
      },
      rom_title: {
        type: Sequelize.STRING(50)
      },
      key: {
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
        type: Sequelize.STRING(5),
        defaultValue: '4/4'
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      initialism: {
        type: Sequelize.STRING(20)
      },
      spotify_link: {
        type: Sequelize.STRING(100)
      },
      youtube_link: {
        type: Sequelize.STRING(100)
      },
      other_link: {
        type: Sequelize.STRING(100)
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
        type: Sequelize.STRING(50),
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
    })


},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("songs")
    await queryInterface.dropTable("roles")
    await queryInterface.dropTable("musicians")
    await queryInterface.dropTable("tags")
    await queryInterface.dropTable("moods")
    await queryInterface.dropTable("genres")
    await queryInterface.dropTable("languages")

  }
};
