'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('start')

    await queryInterface.createTable('tiers',{
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

    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tier_id: {
        type: Sequelize.INTEGER(50),
        defaultValue: 1,
        references: {
          model: "tiers",
          key: "id"
        }
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    })

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
        references: {
          model: 'users',
          key: 'id',
        },
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      time: {
        type: Sequelize.TIME,
      },
      venue: {
        type: Sequelize.STRING(100)
      },
      pay: {
        type: Sequelize.FLOAT(5,2)
      },
      is_repeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      frequency: {
        type: Sequelize.STRING(20)
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
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(255)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
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
        type: Sequelize.STRING(30)
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
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(30)
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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
        type: Sequelize.STRING(30)
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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
        type: Sequelize.STRING(50),
      },
      rom_name: {
        type: Sequelize.STRING(50)
      },
      spotify_name: {
        type: Sequelize.STRING(50),
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      rom_title: {
        type: Sequelize.STRING(50)
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
        type: Sequelize.STRING(5),
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
        type: Sequelize.STRING(50)
      },
      status: {
        type: Sequelize.STRING(20)
      },
      perform_status: {
        type: Sequelize.STRING(20)
      },
      remarks: {
        type: Sequelize.STRING(255)
      },
      rating: {
        type: Sequelize.INTEGER
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

    await queryInterface.dropTable('languages')
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('tiers');


  }
};