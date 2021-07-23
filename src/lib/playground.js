const { hyphenate } = require('hyphen/id')
const fs = require('fs')
const prompt = require('prompt-sync')({sigint: true})
const addHyphens = async (lyrics) => {

   return await hyphenate(lyrics, { hyphenChar: "-"})


}

// let lyrics = prompt("lyrics here: ")

let lyrics = "Izinkan kumencuri bayangan wajahmu (bayanganmu)\n" +
    "Izinkan kumencuri khayalan denganmu\n" +
    "Maafkanlah, oh\n" +
    "Andai lagu ini\n" +
    "Mengganggu ruangan hidupmu\n" +
    "Kau senyumlah, oh\n" +
    "Sekadar memori\n" +
    "Kita di arena ini\n" +
    "Kau ilhamku\n" +
    "Kau ilhamku, oh"
addHyphens(lyrics).then((result) => {
    fs.writeFile('lyrics.txt', result, () => {
        console.log('success')
    })
})



