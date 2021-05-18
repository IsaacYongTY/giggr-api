'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let tempHashedPassword = await bcrypt.hash('iiiii', 10)
    await queryInterface.bulkInsert('users', [{
      firstName: "Irene",
      lastName: "Yu",
      email: "irene@gmail.com",
      password: tempHashedPassword,
      tierId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

      {
        firstName: "Isaac",
        lastName: "Yong",
        email: "isaac@gmail.com",
        password: tempHashedPassword,
        tierId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
