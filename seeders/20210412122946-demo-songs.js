'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('songs', [{
       title: "你要的全拿走",
       artist: "胡彦斌",
       romTitle: "Ni Yao De Quan Na Zou",
       romArtist: "Hu Yan Bin",
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
       createdAt: new Date(),
       updatedAt: new Date()
     },

     {
        title: "爱我别走",
        artist: "张震岳",
        romTitle: "Ai Wo Bie Zou",
        romArtist: "Zhang Zhen Yue",
        key: "C",
        myKey: "C",
        bpm: 72,
        durationMs: 333333,
        timeSignature: "4/4",
        verified: false,
        genre: "acoustic",
        mood: "sad",
        language: "mandarin",
        initialism: "awbz",
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
