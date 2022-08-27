const mongoose = require("mongoose")

const connectionURL = process.env.MONGODB_URL

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
}

mongoose.connect(connectionURL, opts).then(mongoose => {
    return mongoose
})