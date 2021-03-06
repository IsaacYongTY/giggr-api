require('dotenv').config()

module.exports = {
  "development": {
     "databases": {
       "database1": {
         "username": process.env.DB_USERNAME,
         "password": process.env.DB_PASSWORD,
         "database": process.env.DB,
         "host": process.env.HOST,
         "port": 5432,
         "dialect": "postgres",
         "logging": false
       },

       "master": {
         "username": process.env.MASTER_DB_USERNAME,
         "password": process.env.MASTER_DB_PASSWORD,
         "database": process.env.DB,
         "host": process.env.MASTER_HOST,
         "port": 5432,
         "dialect": "postgres"
       },
     }
  },
  "test": {
    "databases": {
      "database1": {
        "username": process.env.TEST_DB_USERNAME,
        "password": process.env.TEST_DB_PASSWORD,
        "database": process.env.TEST_DB,
        "host": process.env.TEST_HOST,
        "port": process.env.TEST_PORT,
        "dialect": "postgres",
        "logging": false
      },

      "master": {
        "username": process.env.MASTER_DB_USERNAME,
        "password": process.env.MASTER_DB_PASSWORD,
        "database": process.env.DB,
        "host": process.env.MASTER_HOST,
        "port": 5432,
        "dialect": "postgres"
      },
    }
  },
  "production": {
    "databases": {
      "database1": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB,
        "host": process.env.HOST,
        "port": 5432,
        "dialect": "postgres",
        "logging": false
      },

      "master": {
        "username": process.env.MASTER_DB_USERNAME,
        "password": process.env.MASTER_DB_PASSWORD,
        "database": process.env.DB,
        "host": process.env.MASTER_HOST,
        "port": 5432,
        "dialect": "postgres"
      },
    }
  },
  "database1": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "port": 5432,
    "dialect": "postgres",
    "logging": false
  },
  "master": {
    "username": process.env.MASTER_DB_USERNAME,
    "password": process.env.MASTER_DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.MASTER_HOST,
    "port": 5432,
    "dialect": "postgres"
  }
}
