const bcrypt = require('bcrypt');



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

        await queryInterface.bulkInsert('tiers', [
            {title: "free"},
            {title: "plus"},
            {title: "pro"},
            {title: "admin"},
            {title: "beta"},
        ], {});


        let tempHashedPassword = await bcrypt.hash('iiiii', 10)

        await queryInterface.bulkInsert('users', [{
            first_name: "Irene",
            last_name: "Yu",
            email: "irene@gmail.com",
            password: tempHashedPassword,
            tier_id: 1,
            created_at: new Date(),
            updated_at: new Date()
        },

            {
                first_name: "Isaac",
                last_name: "Yong",
                email: "isaac@gmail.com",
                password: tempHashedPassword,
                tier_id: 2,
                created_at: new Date(),
                updated_at: new Date()
        }], {});

        await queryInterface.bulkInsert('genres', [
            {title: "ballad"},
            {title: "pop"},
            {title: "funk"},
            {title: "death metal"},
            {title: "rock"},


            ], {});

        await queryInterface.bulkInsert('musicians', [
            {
                name: "李荣浩",
                rom_name: "li rong hao",
                en_name: "Ronghao Li",
                role: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: "周杰伦",
                rom_name: "zhou jie lun",
                en_name: "Jay Chou",
                role: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: "Mariya Takeuchi",
                rom_name: "Mariya Takeuchi",
                en_name: "Mariya Takeuchi",
                role: 2,
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});

        // await queryInterface.bulkInsert('songs', [{
        //     title: "你要的全拿走",
        //     artist_id: 1,
        //     rom_title: "Ni Yao De Quan Na Zou",
        //     key: 5,
        //     my_key: 4,
        //     mode: 0,
        //     bpm: 72,
        //     duration_ms: 222222,
        //     time_signature: "4/4",
        //     verified: false,
        //     genre: "trap",
        //     mood: "sad",
        //     language: "mandarin",
        //     initialism: "nydqnz",
        //     created_at: new Date(),
        //     updated_at: new Date()
        // },
        //
        // {
        //     title: "爱我别走",
        //     artist_id: 2,
        //     rom_title: "Ai Wo Bie Zou",
        //     key: 1,
        //     my_key: 1,
        //     mode: 0,
        //     bpm: 72,
        //     duration_ms: 333333,
        //     time_signature: "4/4",
        //     verified: false,
        //     genre: "acoustic",
        //     mood: "sad",
        //     language: "mandarin",
        //     initialism: "awbz",
        //     created_at: new Date(),
        //     updated_at: new Date(),
        //
        // }], {});


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


