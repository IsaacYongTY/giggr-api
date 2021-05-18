'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('artists', [
          {
            name: "李荣浩",
            romName: "li rong hao",
            enName: "Ronghao Li",
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "周杰伦",
            romName: "zhou jie lun",
            enName: "Jay Chou",
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Mariya Takeuchi",
            romName: "Mariya Takeuchi",
            enName: "Mariya Takeuchi",
            role: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ], {});

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
