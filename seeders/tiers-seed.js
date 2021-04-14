module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Tiers', [
            {title: "free"},
            {title: "plus"},
            {title: "pro"},
            {title: "admin"},
            {title: "beta"},
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
