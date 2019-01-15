const User = require('../models/userModel')
const createError = require('http-errors')

exports.getUser = (username) => {
    User.findOne({ username }, (error, user) => {
        if (error) {
            return createError(500, error)
        }
        if (!user) {
            return createError(404, 'User not found.')
        }

        return user
    })
}
