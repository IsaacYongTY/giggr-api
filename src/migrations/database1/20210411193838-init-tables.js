'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('languages', {
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

    await queryInterface.createTable('tiers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    })

    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tier_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        // references: {
        //   model: "tiers",
        //   foreignKey: "tier_id"
        // }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });



    await queryInterface.createTable('gigs', {
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
      description: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      time: {
        type: Sequelize.DATE,
      },
      venue: {
        type: Sequelize.STRING(100)
      },
      pay: {
        type: Sequelize.FLOAT
      },
      is_repeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      frequency: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable("setlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('genres',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      }
    })

    await queryInterface.createTable('moods', {
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

    await queryInterface.createTable('tags', {
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
        type: Sequelize.STRING,
        allowNull: false
      },
      artist_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
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
    await queryInterface.dropTable('roles');
    await queryInterface.dropTable('musicians');
    await queryInterface.dropTable('tags');
    await queryInterface.dropTable('moods');
    await queryInterface.dropTable('genres');
    await queryInterface.dropTable('setlists');

    await queryInterface.dropTable('gigs');

    await queryInterface.dropTable('users');
    await queryInterface.dropTable('tiers');
    await queryInterface.dropTable('languages')


  }
};