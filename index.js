const express = require('express')
const app = express()
const cors = require('cors')
const { DataTypes } = require('sequelize')
const sequelize = require('./lib/sequelize.config.js')
const User = require('./models/user')(sequelize, DataTypes);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error)
    })

app.use(express.json())
app.use(cors())


app.use('/api/v1/auth', require('./routes/auth.route'))

// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })
//
app.get('/test', (req, res) => {
    console.log('got this route')
    res.send({message: "You accessed this route successfully"})
})

app.post('/test', async (req, res) => {
    try {

        console.log(User)

        const isaac = await User.create(req.body)

        // console.log(User(sequelize, DataTypes))
        //
        // const isaac = await User(sequelize, DataTypes).create(req.body)
        console.log(isaac)

        res.send( {user: isaac} )
    } catch (error) {
        console.log(error)
        res.send({error})
    }
})

app.delete('/test', async (req, res) => {
    try {
        const isaac = await user.findByPk(1)

        res.send( {user: isaac} )
    } catch (error) {
        res.send({error})
    }
})

console.log(process.env.PORT)
app.use((req, res) => {
    res.status(400).send({ message: "Not Found"})
})

app.listen(process.env.PORT,() => {
    console.log(`App listening on ${process.env.PORT}`)
})
