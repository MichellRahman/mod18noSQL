const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string),
            message: 'enter valid email'
        }
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

userSchema.virtual('friendCount').get(() => {
    return this.friends.length
})

const User = mongoose.model('User', userSchema)

module.exports = User