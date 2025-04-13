const express = require('express');

const app = express();

const dbConfig = require('./config/db')
const roomsRoute = require('./routes/RoomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/BookingsRoute')

app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`server is running on port : ${port} `) })

