import React, { useEffect, useState } from 'react'
import './Bookings.css'
import axios from 'axios'

const Bookings = () => {
  const [bookings, setBookings] = useState()

  useEffect(() => {
    const GetAllBookings = async() => {
      try {
        const response = await axios.get('/api/bookings/getallbookings')
        const data = await response.data
        setBookings(data)
        console.log(response.data)
      } catch (error) {
        console.log("Error")
      }
    }


    GetAllBookings()
  }, [])


  return (

    <>
      <div className="admin-table">
        <h1>Bookings</h1>

        <div className="table-head">

          <div className="booking-id">
            Booking Id
          </div>

          <div className="user-id">
            User Id
          </div>

          <div className="room-name">
            Room
          </div>

          <div className="check-in-date">
            CheckIn Date
          </div>

          <div className="check-out-date">
            CheckOut Date
          </div>

          <div className="status">
            Booking Status
          </div>

        </div>

        {bookings && bookings.length > 0 ? (
  bookings.map((booking) => {
    return (
      <div className="table-body" key={booking._id}>
        <div className="booking-id">{booking._id}</div>
        <div className="user-id">{booking.userid}</div>
        <div className="room-name">{booking.room}</div>
        <div className="check-in-date">{booking.fromDate}</div>
        <div className="check-out-date">{booking.toDate}</div>
        <div className="status">{booking.roomStatus}</div>
      </div>
    );
  })
) : (
  <div className="no-bookings">No bookings available.</div>
)}

       

      </div>
    </>

  )
}

export default Bookings