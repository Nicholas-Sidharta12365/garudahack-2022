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
    isOnline: {
        type: Boolean,
        required: true,
        default: true,
    }
})

module.exports = mongoose.models.Therapist || mongoose.model('Therapist', therapistSchema)
