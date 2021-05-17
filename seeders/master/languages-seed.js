module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('languages',[
            { name: "english" },
            { name: "mandarin" },
            { name: "cantonese" },
            { name: "hokkien" },
            { name: "spanish" },
            { name: "malay" },
            { name: "japanese" },
            { name: "korean" },
            { name: "vietnamese" },
            { name: "thai" },
            { name: "french" },
            { name: "indonesian" },
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
