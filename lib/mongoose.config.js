const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {
    useFindAndModify: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongoDB connected')
}).catch((err) => {
    console.log(err)
})