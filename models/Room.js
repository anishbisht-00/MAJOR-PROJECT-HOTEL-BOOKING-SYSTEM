const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    roomTitle: {
        type: String,
        required: [true, 'Room title is required'], // Validation
    },
    maxCount: {
        type: Number,
        required: [true, 'Maximum count of guests is required']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required']
    },
    rentPerDay: {
        type: Number,
        required: [true, 'Rent per day is required']
    },
    imageUrls: [],
    currentBookings: [],
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
}, {
    timestamps: true,
})

const roomsModel = mongoose.model('rooms', roomSchema)

module.exports = roomsModel
