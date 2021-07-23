module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('roles',[
            { name: "artist" },
            { name: "composer" },
            { name: "songwriter" },
            { name: "arranger" },

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
