module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('roles',[
            { id: 1, name: "artist" },
            { id: 2, name: "composer" },
            { id: 3, name: "songwriter" },
            { id: 4, name: "arranger" },

        ])

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('roles', null, {})
    }
};
