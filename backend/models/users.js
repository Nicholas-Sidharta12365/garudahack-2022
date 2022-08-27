const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
