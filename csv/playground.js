const csv = require('csv-parser')
const fs = require('fs')

// fetch('./test_repertoire_seed.csv').then((response) => {
//     console.log(response)
// })

fs.createReadStream('test_repertoire_seed.csv')
.pipe(csv())
.on('data', (row) => {
    console.log(row)
})
.on('end', () => {
    console.log("CSV parsed successfully")
})