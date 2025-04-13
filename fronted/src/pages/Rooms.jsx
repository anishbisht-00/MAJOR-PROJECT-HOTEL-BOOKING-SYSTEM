import React, { useEffect, useState } from 'react'
import HeaderType2 from '../components/header/HeaderType2'
import './Room.css'
import axios from 'axios'
import { data } from 'react-router-dom'
import RoomCard from '../components/Cards/RoomCard'
import SearchCard from '../components/Cards/SearchCard'
import moment from 'moment'




const Rooms = () => {

  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()


  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [duplicaterooms, setDuplicaterooms] = useState([])



  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/rooms/getallrooms');
        const data = await response.data;
        setRooms(data);
        setDuplicaterooms(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms(); // Call the async function inside useEffect

  }, [])

  const handleDataFromChild = (newFrom, newTo) => {
  
    // Set the new dates
    setFrom(newFrom);
    setTo(newTo);
    
    let temprooms = []
    let availability = false;
    // Debugging logs
    console.log("New From Date:", newFrom);
    console.log("New To Date:", newTo);

    // Iterate through duplicate rooms
    for (const room of duplicaterooms) {
      // Check if there are any current bookings
      if (room.currentBookings && room.currentBookings.length > 0) {
        console.log("Current Bookings for Room:", room.currentBookings);

        // Iterate through each booking
        for (const booking of room.currentBookings) {
          const bookedFrom = moment(booking.fromDate, 'YYYY-MM-DD'); // Ensure date format
          const bookedTo = moment(booking.toDate, 'YYYY-MM-DD');
          const parsedNewFrom = moment(newFrom, 'YYYY-MM-DD'); // Parse newFrom
          const parsedNewTo = moment(newTo, 'YYYY-MM-DD'); // Parse newTo

          // Debugging logs for booked dates
          console.log("Booking Start Date:", bookedFrom.format('YYYY-MM-DD'));
          console.log("Booking End Date:", bookedTo.format('YYYY-MM-DD'));

          // Check if the new dates conflict with the booked dates
          if (
            parsedNewFrom.isBetween(bookedFrom, bookedTo, null, '[]') || // Check for overlap
            parsedNewTo.isBetween(bookedFrom, bookedTo, null, '[]') ||
            bookedFrom.isBetween(parsedNewFrom, parsedNewTo, null, '[]') ||
            bookedTo.isBetween(parsedNewFrom, parsedNewTo, null, '[]')
          ) {
            console.log("Conflict detected!");
          } else {
            console.log("No conflict.");
            availability = true;
          }
        }
      } else {
        console.log("No current bookings for this room.");

      }
      if (availability === true || room.currentBookings.length == 0) {
        temprooms.push(room)
      }

 
    }
   setRooms(temprooms)
  };



  return (
    <>
      <HeaderType2 />


      <div className="room-main-section">
        <div className="search-section">
          <SearchCard sendDataToParent={handleDataFromChild} />
        </div>

        <div className="roomcard-section">

          {loading ? (<h1>Loading...</h1>) : error ? console.log(error) : (rooms.map((room) => {
            return (
              <RoomCard key={room._id} images={room.imageUrls} title={room.roomTitle} desc={room.description} max={room.maxCount} ph={room.phoneNumber} category={room.category} rent={room.rentPerDay} _id={room._id} fromDate={from} toDate={to} />
            )
          }))}


        </div>
      </div>

    </>
  )
}

export default Rooms