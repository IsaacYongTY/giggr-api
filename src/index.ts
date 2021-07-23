import app from "./app"

app.listen(process.env.PORT,() => {
    console.log(`App listening on ${process.env.PORT}`)
})
