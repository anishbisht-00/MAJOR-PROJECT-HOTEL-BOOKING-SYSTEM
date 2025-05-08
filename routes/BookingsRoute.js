const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
const Room = require('../models/Room')
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const moment = require('moment');


router.post("/bookroom", async (req, res) => {
    const {
        room,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays,
        token
    } = req.body


    try {

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })


        const payment = await stripe.charges.create({
            amount: totalAmount * 100,
            customer: customer.id,
            currency: 'inr',
            receipt_email: token.email

        }, {
            idempotencyKey: uuidv4()
        }
        )


        if (payment) {


            const newBooking = new Booking({
                room: room.roomTitle,
                roomid: room._id,
                userid,
                fromDate,
                toDate,
                totalAmount,
                totalDays,
                transactionId: payment.id
            })

            const booking = await newBooking.save()
            const roomtemp = await Room.findOne({ _id: room._id })

            roomtemp.currentBookings.push({ bookingId: booking._id, fromDate: fromDate, toDate: toDate, userid: userid, roomStatus: booking.roomStatus })

            await roomtemp.save()

        }

        res.send("Payment Successful, Your room is Booked")
    } catch (error) {
        return res.status(400).json({ error })
    }

})

router.post("/getbookingsbyuserid", async (req, res) => {
    const userid = req.body.userid
    try {
        const bookings = await Booking.find({ userid: userid })
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error })
    }
})

router.put('/expire', async (req, res) => {
    try {
      const today = moment().startOf('day');
  
      // Find bookings where toDate has passed and status is still 'booked'
      const expiredBookings = await Booking.find({
        toDate: { $lt: today.format('DD-MM-YYYY') },
        roomStatus: 'booked',
      });
  
      // Update their status to 'bookingExpired'
      for (const booking of expiredBookings) {
        booking.roomStatus = 'bookingExpired';
        await booking.save();
      }
  
      res.status(200).json({ message: 'Expired bookings updated successfully', count: expiredBookings.length });
    } catch (error) {
      console.error('Error updating expired bookings:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

router.post('/cancelbooking', async (req, res) => {
    const { bookingid, roomid } = req.body;

    try {
        // Validate input
        if (!bookingid || !roomid) {
            console.log("Missing bookingid or roomid");
            return res.status(400).json({ error: "Missing booking ID or room ID" });
        }

        console.log("Received booking ID:", bookingid, "Room ID:", roomid);

        // Find booking
        const bookingItem = await Booking.findOne({ _id: bookingid });
        if (!bookingItem) {
            console.log("Booking not found");
            return res.status(404).json({ error: "Booking not found" });
        }

        // Update booking status
        bookingItem.roomStatus = 'cancelled';
        await bookingItem.save();
        console.log("Booking status updated to 'cancelled'");

        // Find room
        const room = await Room.findOne({ _id: roomid });
        if (!room) {
            console.log("Room not found");
            return res.status(404).json({ error: "Room not found" });
        }

        console.log("Current bookings before update:", room.currentBookings);

        // Filter out the cancelled booking
        const updatedBookings = room.currentBookings.filter(
            booking => booking.bookingId.toString() !== bookingid
        );

        // Update the room's current bookings
        room.currentBookings = updatedBookings;
        await room.save();
        console.log("Room bookings updated:", room.currentBookings);

        // Send success response
        res.send("Your booking was cancelled successfully");
    } catch (error) {
        console.error("Error in cancellation process:", error);
        res.status(500).json({ error: "An error occurred during cancellation" });
    }
});


router.get('/getallbookings', async (req, res) => {
    try {
        const allbookings = await Booking.find()
        res.send(allbookings)
    } catch (error) {
        return res.status(400).json({ error })
    }
})




module.exports = router