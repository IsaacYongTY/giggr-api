'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Songs', [{
       title: "你要的全拿走",
       artistId: 1,
       romTitle: "Ni Yao De Quan Na Zou",
       romArtist: "Hu Yan Bin",
       key: 5,
       myKey: 4,
       bpm: 72,
       durationMs: 222222,
       timeSignature: "4/4",
       verified: false,
       genre: "trap",
       mood: "sad",
       language: "mandarin",
       initialism: "nydqnz",
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
        title: "爱我别走",
        artistId: 2,
        romTitle: "Ai Wo Bie Zou",
        romArtist: "Zhang Zhen Yue",
        key: 1,
        myKey: 1,
        bpm: 72,
        durationMs: 333333,
        timeSignature: "4/4",
        verified: false,
        genre: "acoustic",
        mood: "sad",
        language: "mandarin",
        initialism: "awbz",
        createdAt: new Date(),
        updatedAt: new Date(),

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
