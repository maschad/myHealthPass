const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
    id: {
      required: true,
      type: Number
    },
    password: {
        required: true,
        type: String
    },
    username: {
        required: true,
        trim: true,
        type: String,
        unique: true
    }
})

userSchema.pre('save', (next) => {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err)
        }
        this.password = hash
        next()
    })
})

module.exports = mongoose.model('User', userSchema)
