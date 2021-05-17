require('dotenv').config()

let database1ProductionConfig;
let masterProductionConfig;
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development') {

  database1ProductionConfig = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "port": 5432,
    "dialect": "postgres",
    "logging": false
  }

  masterProductionConfig = {
    "username": process.env.MASTER_DB_USERNAME,
    "password": process.env.MASTER_DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.MASTER_HOST,
    "port": 5432,
    "dialect": "postgres"
  }
} else {
  console.log('notworking')
  database1ProductionConfig = {
    "username": null,
    "password": null,
    "database": null,
    "host": null,
    "port": 5432,
    "dialect": "postgres",
    "logging": false
  }
  masterProductionConfig = {
    "username": process.env.MASTER_DB_USERNAME,
    "password": process.env.MASTER_DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.MASTER_HOST,
    "port": 5432,
    "dialect": "postgres"
  }
}



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
  "database1": database1ProductionConfig,
  "master": masterProductionConfig
}
