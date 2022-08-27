const mongoose = require('mongoose')

const therapistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = mongoose.models.VideoSession || mongoose.model('VideoSession', videoSessionSchema)
