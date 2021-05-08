'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};


let databases = Object.keys(config.databases)

for (let i = 0; i < databases.length; i++) {
  let database = databases[i]
  let dbPath = config.databases[database]
  if (config.use_env_variable) {
    db[database] = new Sequelize(process.env[config.use_env_variable], dbPath);
  } else {
    db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
  }
}

fs
  .readdirSync(__dirname + '/database1')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    // const model = require(path.join(__dirname, file));
    const model = require(path.join(__dirname + '/database1', file))(db.database1, Sequelize.DataTypes);
    db.database1[model.name] = model;

    // console.log(db)
  });

fs
    .readdirSync(__dirname + '/master')
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      // const model = require(path.join(__dirname, file));
      const model = require(path.join(__dirname + '/master', file))(db.master, Sequelize.DataTypes);

      db.master[model.name] = model;
    });

Object.keys(db.database1.models).forEach(modelName => {
  if (db.database1[modelName].associate) {
    db.database1[modelName].associate(db.database1);
  }
});

Object.keys(db.master.models).forEach(modelName => {

  if (db.master[modelName].associate) {
    db.master[modelName].associate(db.master);
  }
});



// db.sequelize = sequelize;
// db.Sequelize = Sequelize;


module.exports = db;
