const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isManger:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel