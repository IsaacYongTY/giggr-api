'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      time: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      pay: {
        type: Sequelize.FLOAT
      },
      repeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      frequency: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gigs');
  }
};