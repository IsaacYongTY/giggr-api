import {Request, Response} from "express";
import helmet from "helmet"
import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import checkAuth from "./middlewares/checkAuth";

const app = express();

app.use(helmet.hidePoweredBy())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: [/(https?:\/\/)(.+)?-isaacyongty\.vercel\.app/, /(https?:\/\/)(.+\.)?getgiggr\.com/, /(http:\/\/localhost:)\d+/]
}))

app.set("trust proxy", 1)

app.use(passport.initialize())
app.use(cookieParser())


app.use('/api/v1/auth', require('./routes/auth.route'))
app.use('/api/v1/songs', checkAuth, require('./routes/songs.route'))
app.use('/api/v1/musicians', require('./routes/musicians.route'))
app.use('/api/v1/languages', require('./routes/languages.route'))
app.use('/api/v1/users', checkAuth, require('./routes/users.route'))
app.use('/api/v1/gigs', checkAuth, require('./routes/gigs.route'))
app.use('/api/v1/setlists', require('./routes/setlists.route'))
app.use('/api/v1/admin', checkAuth, require('./routes/admin/admin.route'))
app.use('/api/v1/admin/songs', checkAuth, require('./routes/admin/songs.route'))

app.get('/test', (req : Request, res : Response) => {
    res.send({message: "You accessed this route successfully"})
})


app.use((req: Request, res: Response) => {
    res.status(400).send({ message: "Not Found"})
})

module.exports = app