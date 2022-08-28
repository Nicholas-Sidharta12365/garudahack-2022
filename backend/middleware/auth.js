const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // User log out: no token | Making sure user exits and not logged out
        const user = await Users.findOne({ uid: decoded.uid, 'tokens.token': token})

        if (!user) {
            throw new Error()
        } 

        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate'})
    }
}
module.exports = auth