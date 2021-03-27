const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const songSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    key: { type: String, required: true },
    bpm: { type: Number, required: true },
    durationMs: { type: String, required: true},
    timeSignature: { type: String, required: true }
})

module.exports = mongoose.model('Song', songSchema)