module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('languages',[
            { id: 1, name: "english" },
            { id: 2, name: "mandarin" },
            { id: 3, name: "cantonese" },
            { id: 4, name: "hokkien" },
            { id: 5, name: "spanish" },
            { id: 6, name: "malay" },
            { id: 7, name: "japanese" },
            { id: 8, name: "korean" },
            { id: 9, name: "vietnamese" },
            { id: 10, name: "thai" },
            { id: 11, name: "french" },
        ])

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('languages', null, {})
    }
};
