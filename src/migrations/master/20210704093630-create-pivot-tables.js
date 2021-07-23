'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("songs_songwriters", {
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("songs_tags");
    await queryInterface.dropTable("songs_moods");
    await queryInterface.dropTable("songs_genres");
    await queryInterface.dropTable("songs_arrangers");
    await queryInterface.dropTable("songs_composers");
    await queryInterface.dropTable("songs_songwriters");
  }
};
