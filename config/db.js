const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://anish:anish1@cluster0.jwevr.mongodb.net/CheckIn'
mongoose.connect(mongoURL)

const connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB connection failed.')
})

connection.on('connected',()=>{
console.log('Mongo DB connection successful')
})

module.exports = mongoose