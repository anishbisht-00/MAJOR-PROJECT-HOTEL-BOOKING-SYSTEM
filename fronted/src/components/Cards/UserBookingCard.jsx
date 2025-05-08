import React, { useEffect, useState } from 'react'
import './UserBookingCard.css'
import axios from 'axios'


const UserBookingCard = (props) => {
    console.log(props)

    const cancelButtonHandler = async (bookingId, roomId) => {
        console.log("booking id ", bookingId,", room id ",roomId)
        
        try {
            const result = await axios.post('/api/bookings/cancelbooking', {
                bookingid: bookingId,
                roomid: roomId,
            });
            alert("Booking cancelled successfully");
               window.location.href='/user-profile'
        } catch (error) {
            alert("Failed to cancel booking");
        }
    };
    
    useEffect(() => {
  const markExpiredBookings = async () => {
    try {
      await axios.put('/api/bookings/expire');
    } catch (error) {
      console.error('Failed to mark expired bookings:', error);
    }
  };

  markExpiredBookings();
}, []);

    return (
        <>
            <div className="user-booking-card-container">
                <div className="user-booking-card-room-name">
                    <h2>{props.room}</h2>
                </div>
                <div className="user-booking-card-bookingId">
                    <span>Booking Id : </span>
                    <span>{props.bookingId}</span>
                </div>
                <div className="user-booking-card-trasactionId">
                    <span>Transaction Id : </span>
                    <span>{props.transactionId}</span>
                </div>
                <div className="user-booking-card-checkIn-date">
                    <span>Check In Date : </span>
                    <span>{props.inDate}</span>
                </div>
                <div className="user-booking-card-checkOut-date">
                <span>Check Out Date : </span>
                <span>{props.outDate}</span>
                </div>
                <div className="user-booking-card-totalAmount">
                <span>Total Amount : </span>
                <span>{props.totalAmount}</span>
                </div>
                <div className="user-booking-card-bookingStatus">
                <span>Booking Status : </span>
                <span>{props.bookingStatus == 'booked' ? (<h3 className='bg-green'> Confirmed</h3> ) : (<h3 className='bg-red'> Cancelled</h3> )}</span>
                </div>
                {props.bookingStatus != 'cancelled' && (
                    <div className="user-booking-card-cancel-btn">
                    <button id='cancel-btn' onClick={()=>{cancelButtonHandler(props.bookingId, props.roomid)}} >Cancel</button>
                </div>)}
                
            </div>
        </>
    )
}

export default UserBookingCard