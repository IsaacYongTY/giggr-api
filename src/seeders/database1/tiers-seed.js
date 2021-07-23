module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('tiers', [
            {name: "free"},
            {name: "plus"},
            {name: "pro"},
            {name: "admin"},
            {name: "beta"},
            ], {

        });

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
