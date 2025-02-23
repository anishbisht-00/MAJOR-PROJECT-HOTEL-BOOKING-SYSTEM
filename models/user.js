const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type: String,
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    profilePic:{
        type:String
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    address:{
        type:String
    },
    gender:{
        type:String
    },
    mobileNumber:{
        type:String
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