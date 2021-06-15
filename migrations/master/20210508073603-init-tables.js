'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
      en_name: {
        type: Sequelize.STRING
      },
    });

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
        type: Sequelize.STRING(10),
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
        type: Sequelize.STRING,
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

    await queryInterface.createTable("moods_songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      song_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })

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
    await queryInterface.dropTable("arrangers_songs")
    await queryInterface.dropTable("composers_songs")
    await queryInterface.dropTable("songwriters_songs")
    await queryInterface.dropTable("tags_songs")
    await queryInterface.dropTable("genres_songs")
    await queryInterface.dropTable("moods_songs")
    await queryInterface.dropTable("songs")
    await queryInterface.dropTable("musicians")
    await queryInterface.dropTable("languages")
    await queryInterface.dropTable("roles")
    await queryInterface.dropTable("tags")
    await queryInterface.dropTable("moods")
    await queryInterface.dropTable("genres")

  }
};
