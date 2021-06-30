'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


    await queryInterface.createTable("setlists_songs", {
      setlist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'setlists',
          key: 'id',
        },
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("roles_musicians", {
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      musician_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'musicians',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("songs_songwriters", {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },

      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
      songwriter_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'musicians',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("songs_composers", {

      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
      composer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'musicians',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("songs_arrangers", {

      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
      arranger_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'musicians',
          key: 'id',
        },
      }
    })

    await queryInterface.createTable("songs_genres", {


      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'genres',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("songs_moods", {


      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },
      },
      mood_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'moods',
          key: 'id',
        },
      },
    })

    await queryInterface.createTable("songs_tags", {

      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'songs',
          key: 'id',
        },

      },
      tag_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'tags',
          key: 'id',
        },
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
    await queryInterface.dropTable("songs_tags");
    await queryInterface.dropTable("songs_moods");
    await queryInterface.dropTable("songs_genres");
    await queryInterface.dropTable("songs_arrangers");
    await queryInterface.dropTable("songs_composers");
    await queryInterface.dropTable("songs_songwriters");
    await queryInterface.dropTable("roles_musicians");
    await queryInterface.dropTable("setlists_songs");


  }
};
