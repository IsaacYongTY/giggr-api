module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('keys', [
            {title: "C"},
            {title: "D"},
            {title: "E"},
            {title: "F"},
            {title: "G"},
            {title: "A"},
            {title: "B"},
            {title: "Db"},
            {title: "Eb"},
            {title: "Gb"},
            {title: "Ab"},
            {title: "Bb"},
            {title: "Cm"},
            {title: "C#m"},
            {title: "Dm"},
            {title: "D#m"},
            {title: "Ebm"},
            {title: "Em"},
            {title: "Fm"},
            {title: "F#m"},
            {title: "Gm"},
            {title: "G#m"},
            {title: "Am"},
            {title: "Bbm"},
            {title: "Bm"},
            {title: "C#"},
            {title: "F#"},

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

// await queryInterface.bulkInsert('Keys', [
//     {title: "C"},
//     {title: "D"},
//     {title: "E"},
//     {title: "F"},
//     {title: "G"},
//     {title: "A"},
//     {title: "B"},
//     {title: "Db"},
//     {title: "Eb"},
//     {title: "Gb"},
//     {title: "Ab"},
//     {title: "Bb"},
//     {title: "Cm"},
//     {title: "Dm"},
//     {title: "Em"},
//     {title: "Fm"},
//     {title: "Gm"},
//     {title: "Am"},
//     {title: "Bm"},
//     {title: "C#m"},
//     {title: "D#m"},
//     {title: "Ebm"},
//     {title: "F#m"},
//     {title: "G#m"},
//     {title: "Bbm"},
//
// ], {});
