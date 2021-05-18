const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['https://giggr.vercel.app', 'http://localhost:3000', 'https://www.getgiggr.com', 'https://getgiggr.com']
}))

app.set("trust proxy", 1)
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
app.use('/api/v1/users', require('./routes/users.route'))
app.use('/api/v1/gigs', require('./routes/gigs.route'))
app.use('/api/v1/setlists', require('./routes/setlists.route'))
app.use('/api/v1/admin', require('./routes/admin.route'))

// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })
//
console.log('new')
app.get('/test', (req, res) => {
    console.log('got this route')
    res.send({message: "You accessed this route successfully"})
})


app.use((req, res) => {
    res.status(400).send({ message: "Not Found"})
})

app.listen(process.env.PORT,() => {
    console.log(`App listening on ${process.env.PORT}`)
})
