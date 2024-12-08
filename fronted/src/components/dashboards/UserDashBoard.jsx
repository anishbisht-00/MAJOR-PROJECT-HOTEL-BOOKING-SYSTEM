import React, { useEffect, useState } from 'react'
import './UserDashBoard.css'
import HeaderType2 from '../header/HeaderType2'
import UserBookingCard from '../Cards/UserBookingCard'
import axios from 'axios'


const UserDashBoard = () => {

    const user = JSON.parse(localStorage.getItem("currentUser"))
    const [bookings, setBookings] = useState([])


    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })
                const data = await response.data
                setBookings(data)


            } catch (error) {
                console.log(error)
            }
        }

        fetchBookings()

    }, [])

    console.log(bookings)


  return (
    
    <>
 <HeaderType2 />

    <div className="main">
      {/* Left section of user profile */}
      <div className="left-section">
        {/* Usernames and display picture */}
        <div className="user-dp">
          <div className="dp">
            <img src="./src/assets/user-pic.png" alt="User" />
          </div>
          <div className="user-display-name">{user.username} </div>
          <div className="user-name gray"> {(user.username).toLowerCase().split(" ").join("")} </div>
        </div>

        {/* User basic information */}
        <div className="user-info">
          <div className="user-full-name">
            <span>Name </span>
            <span className="gray">{user.username}</span>
          </div>
          <hr />
          <div className="user-email">
            <span>E-mail </span>
            <span className="gray">{user.email}</span>
          </div>
          <hr />
          <div className="user-address">
            <span>Address </span>
            <span className="gray">
              India
            </span>
          </div>
          <hr />
          <div className="user-type">
            <span>isAdmin </span>
            <span className="gray">
              {user.isAdmin ? "Yes" : "No"}
            </span>
          </div>
          <hr />
          {/* <div className="get-admin-access">
            <button>Get Admin Access</button>
          </div>
          <hr /> */}
        </div>
      </div>

      {/* Right section of user profile */}
      <div className="right-section">
        {/* Current bookings */}
        <div className="current-bookings">
          <h2>Current Bookings</h2>
          {
            bookings.map(booking => {
              if (booking.roomStatus === 'booked') {
                return (
                  <UserBookingCard
                    key={booking._id}
                    bookingId={booking._id}
                    room={booking.room}
                    transactionId={booking.transactionId}
                    inDate={booking.fromDate}
                    outDate={booking.toDate}
                    totalAmount={booking.totalAmount}
                    bookingStatus={booking.roomStatus}
                    roomid={booking.roomid}
                  />
                );
              }
              return null; // Return null if the condition is not met
            })
          }
         
        </div>

        {/* Previous bookings */}
        <div className="previous-bookings">
          <h2>Canceled Bookings</h2>
          {
            bookings.map(booking => {
              if (booking.roomStatus === 'cancelled') {
                return (
                  <UserBookingCard
                    key={booking._id}
                    bookingId={booking._id}
                    room={booking.room}
                    transactionId={booking.transactionId}
                    inDate={booking.fromDate}
                    outDate={booking.toDate}
                    totalAmount={booking.totalAmount}
                    bookingStatus={booking.roomStatus}
                    roomid={booking.roomid}
                  />
                );
              }
              return null; // Return null if the condition is not met
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default UserDashBoard