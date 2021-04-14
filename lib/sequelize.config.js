const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
})


module.exports = sequelize