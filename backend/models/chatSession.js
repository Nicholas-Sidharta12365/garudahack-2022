const mongoose = require('mongoose')

const chatSessionSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    client: {
        type: String,
        required: true,
    },
    therapist: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.ChatSession || mongoose.model('ChatSession', chatSessionSchema)
