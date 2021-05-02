const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./lib/sequelize.config.js');
const User = require('./models/user');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error)
    })




app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['https://giggr.vercel.app', 'http://localhost:3000']
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

app.use('/api/v1/auth', require('./routes/auth.route'))
app.use('/api/v1/songs', require('./routes/songs.route'))
app.use('/api/v1/user', require('./routes/user.route'))
app.use('/api/v1/gigs', require('./routes/gigs.route'))

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
