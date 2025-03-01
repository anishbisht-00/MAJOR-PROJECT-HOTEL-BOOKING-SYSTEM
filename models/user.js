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
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    address:{
        type:String,
        default:"Not Specified"
    },
    gender:{
        type:String,
        default:"Not Specified"
    },
    mobileNumber:{
        type:String,
        default:"+91 0000000000"
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isManager:{
        type:Boolean,
        default:false
    }                                                                                                                                                         
}, {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel