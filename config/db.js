const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://gpgauchar83:XLm3fE7AvhsL7tYc@cluster0.yym9e.mongodb.net/checkin'
mongoose.connect(mongoURL)

const connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB connection failed.')
})

connection.on('connected',()=>{
console.log('Mongo DB connection successful')
})

module.exports = mongoose
