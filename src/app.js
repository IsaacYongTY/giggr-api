"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var cors = require('cors');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var checkAuth = require("./middlewares/checkAuth");
app.use(express.json());
app.use(cors({
    httpOnly: true,
    credentials: true,
    origin: [/(https?:\/\/)(.+)?-isaacyongty\.vercel\.app/, /(https?:\/\/)(.+\.)?getgiggr\.com/, /(http:\/\/localhost:)\d+/]
}));
console.log('working');
app.set("trust proxy", 1);
app.use(passport.initialize());
app.use(cookieParser());
app.use('/api/v1/auth', require('./routes/auth.route'));
app.use('/api/v1/songs', checkAuth, require('./routes/songs.route'));
app.use('/api/v1/musicians', require('./routes/musicians.route'));
app.use('/api/v1/languages', require('./routes/languages.route'));
app.use('/api/v1/users', checkAuth, require('./routes/users.route'));
app.use('/api/v1/gigs', require('./routes/gigs.route'));
app.use('/api/v1/setlists', require('./routes/setlists.route'));
app.use('/api/v1/admin', checkAuth, require('./routes/admin/admin.route'));
app.use('/api/v1/admin/songs', checkAuth, require('./routes/admin/songs.route'));
// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })
//
console.log('new test migrate behaviour');
app.get('/test', function (req, res) {
    console.log('got this route');
    res.send({ message: "You accessed this route successfully" });
});
app.use(function (req, res) {
    res.status(400).send({ message: "Not Found" });
});
module.exports = app;
