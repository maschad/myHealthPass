const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    hash: {
        required: true,
        type: String
    },
    id: {
      required: true,
      type: Number
    },
    username: {
        required: true,
        trim: true,
        type: String,
        unique: true
    }
})

userSchema.createUser = (username,hash) => {

}

module.exports = mongoose.model('User', userSchema)
