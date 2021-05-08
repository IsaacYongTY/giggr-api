'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const sequelizeInstance = {}
console.log(env)
console.log('working here')
let sequelize;

let databases = Object.keys(config.databases)

for (let i = 0; i < databases.length; i++) {
  let database = databases[i]
  let dbPath = config.databases[database]
  if (config.use_env_variable) {
    sequelizeInstance[database] = new Sequelize(process.env[config.use_env_variable], dbPath);
  } else {
    sequelizeInstance[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
  }
}

fs
  .readdirSync(__dirname + '/database1')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    // const model = require(path.join(__dirname, file));
    const model = require(path.join(__dirname + '/database1', file))(sequelizeInstance['database1'], Sequelize.DataTypes);
    console.log("model")
    console.log(typeof model)
    db[model.name] = model;

    // console.log(db)
  });

fs
    .readdirSync(__dirname + '/master')
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      // const model = require(path.join(__dirname, file));
      const model = require(path.join(__dirname + '/master', file))(sequelizeInstance['master'], Sequelize.DataTypes);

      db[model.name] = model;
    });

console.log('here')
console.log(Object.keys(db))

Object.keys(db).forEach(modelName => {

  if (db[modelName].associate) {
    console.log(modelName)
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
