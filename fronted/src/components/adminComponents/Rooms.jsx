import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
       
        const response = await axios.get('/api/rooms/getallrooms');
        const data = await response.data;
        setRooms(data);
      } catch (error) {
       
        console.log(error);
      } 
    };

    fetchRooms(); // Call the async function inside useEffect

  }, [])
  console.log(rooms)
  return (
    <>
    <div className="admin-table">
   <h1>Rooms</h1>

    <div className="table-head">

      <div className="room-id">
        Room Id
      </div>

      <div className="room-name">
        Room Name
      </div>

      <div className="room-categroy">
       Category
      </div>

      <div className="room-rent">
       Rent Per Day
      </div>

      <div className="Guests">
        Max Guests
      </div>

      <div className="Phone">
        Phone Number
      </div>

    </div>

    {rooms && rooms.length > 0 ? (
  rooms.map((room) => (
    <div className="table-body" key={room._id}>
      <div className="room-id">{room._id}</div>
      <div className="room-name">{room.roomTitle}</div>
      <div className="room-category">{room.category}</div>
      <div className="room-rent">{room.rentPerDay}</div>
      <div className="guests">{room.maxCount}</div>
      <div className="phone">{room.phoneNumber}</div>
    </div>
  ))
) : (
  <div className="no-rooms">No rooms available.</div>
)}

  </div>
    </>
  )
}

export default Rooms