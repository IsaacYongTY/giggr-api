const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api/auth', require('./routes/auth.route'))

// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })
//

app.use((req, res) => {
    res.status(400).send({ message: "Not Found"})
})

app.listen(process.env.PORT,() => {
    console.log(`App listening on ${process.env.PORT}`)
})
