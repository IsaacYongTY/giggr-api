'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('songs', [{
            title: "你要的全拿走",
            artist: "胡彦斌",
            romArtist: "Hu Yan Bin",
            romTitle: "Ni Yao De Quan Na Zou",
            key: "E",
            myKey: "Eb",
            bpm: 72,
            durationMs: 222222,
            timeSignature: "4/4",
            verified: false,
            genre: "trap",
            mood: "sad",
            language: "mandarin",
            initialism: "nydqnz",
            spotifyLink: "",
            youtubeLink: "",
            energy: "",
            danceability: "",
            valence: "",
            acousticness: "",
            authors: "",
            composers: "",
            arrangers: "",
            tags: "",
            yearReleased: "",
            status: "",
            performStatus: "",
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
