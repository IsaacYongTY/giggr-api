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
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
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
      }
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
