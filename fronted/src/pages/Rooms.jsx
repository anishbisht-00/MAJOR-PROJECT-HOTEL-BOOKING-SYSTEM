import React, { useEffect, useState } from 'react'
import HeaderType2 from '../components/header/HeaderType2'
import './Room.css'
import axios from 'axios'
<<<<<<< HEAD
=======
import { data } from 'react-router-dom'
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
import RoomCard from '../components/Cards/RoomCard'
import SearchCard from '../components/Cards/SearchCard'
import moment from 'moment'

<<<<<<< HEAD
const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [duplicaterooms, setDuplicaterooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [searchKey, setSearchKey] = useState('')
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
=======



const Rooms = () => {

  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()


  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [duplicaterooms, setDuplicaterooms] = useState([])


>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984

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

<<<<<<< HEAD
    fetchRooms();
  }, [])

  useEffect(() => {
    filterRooms(searchKey, from, to);
  }, [searchKey,from, to]); 

  const filterRooms = (searchValue, fromDate, toDate) => {
    let tempRooms = [...duplicaterooms];

    // Apply search filter
    if (searchValue) {
      tempRooms = tempRooms.filter((room) => {
        const titleMatch = room.roomTitle?.toLowerCase().includes(searchValue.toLowerCase());
        const locationMatch = room.location?.toLowerCase().includes(searchValue.toLowerCase());
        return titleMatch || locationMatch;
      });
    }

    // Apply date availability filter
    if (fromDate && toDate) {
      const parsedFrom = moment(fromDate, 'DD-MM-YYYY');
      const parsedTo = moment(toDate, 'DD-MM-YYYY');

      tempRooms = tempRooms.filter(room => {
        let isAvailable = true;

        for (const booking of room.currentBookings || []) {
          const bookedFrom = moment(booking.fromDate, 'DD-MM-YYYY');
          const bookedTo = moment(booking.toDate, 'DD-MM-YYYY');

          if (
            (parsedFrom.isBetween(bookedFrom, bookedTo, null, '[]') || // selected 'from' date is inside the booked range
            parsedTo.isBetween(bookedFrom, bookedTo, null, '[]') || // selected 'to' date is inside the booked range
            bookedFrom.isBetween(parsedFrom, parsedTo, null, '[]') || // booking 'from' date is inside the selected range
            bookedTo.isBetween(parsedFrom, parsedTo, null, '[]') || // booking 'to' date is inside the selected range
            parsedFrom.isSame(bookedFrom, 'day') || // selected 'from' date is the same as the booking's 'from' date
            parsedTo.isSame(bookedTo, 'day') // selected 'to' date is the same as the booking's 'to' date
            )
          ) {
            
            isAvailable = false;
            break;
          }
        }

        return isAvailable;
      });
    }

    setRooms(tempRooms); // Update the rooms after filtering
  };

  const handleDataFromChild = (newFrom, newTo) => {
    setFrom(newFrom);
    setTo(newTo);
  };

  const handleSearch = (key) => {
    setSearchKey(key);
    filterRooms(key, from, to); // Filter rooms when search key changes
  };
=======
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


>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984

  return (
    <>
      <HeaderType2 />

<<<<<<< HEAD
      <div className="room-main-section">
        <div className="search-section">
          <SearchCard sendDataToParent={handleDataFromChild} searchFilter={handleSearch} />
        </div>

        <div className="roomcard-section">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error loading rooms</h1>
          ) : (
            rooms.map((room) => (
              <RoomCard
                key={room._id}
                images={room.imageUrls}
                title={room.roomTitle}
                location={room.location}
                desc={room.description}
                max={room.maxCount}
                ph={room.phoneNumber}
                category={room.category}
                rent={room.rentPerDay}
                _id={room._id}
                fromDate={from}
                toDate={to}
              />
            ))
          )}
        </div>
      </div>
=======

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

>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
    </>
  )
}

<<<<<<< HEAD
export default Rooms;
=======
export default Rooms
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
