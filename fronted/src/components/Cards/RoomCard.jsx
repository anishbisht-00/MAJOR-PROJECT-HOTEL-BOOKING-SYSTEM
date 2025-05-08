import React, { useEffect, useState } from 'react'
import './RoomCard.css'
import { Link } from 'react-router-dom'



const RoomCard = (props) => {

  const bookhandler = () => {
    if (!JSON.parse(localStorage.getItem('currentUser'))) {
      alert('Login Please')
      window.location.href = '/login'
    }
  }
  return (
    <>
      <div className="room-card-container">
        <img src={props.images[0]} alt="" />
        <div className="room-info">
          <div className="room-title"> {props.title} </div>
<<<<<<< HEAD
          <div className="room-location"> {props.location} </div>
=======
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
          <div className="room-description"> {props.desc} </div>
          <div className="rate">  <span className='blue'>{props.rent}</span> <span className='gray txt-1'> ₹/Night</span> </div>
          <div className="max-count">Max Guests :  {props.max} </div>
          <div className="phone-number">Phone Number :  {props.ph} </div>
          <div className="category">Category :  {props.category} </div>

          <div className="buttons">
            {(props.fromDate && props.toDate) && (
              <Link to={`/book/${props._id}/${props.fromDate}/${props.toDate}`} >
                <button onClick={bookhandler}>Book Now </button>
              </Link>
            )}


          </div>

        </div>
      </div>
    </>
  )
}

export default RoomCard