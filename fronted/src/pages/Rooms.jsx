import React, { useEffect, useState } from 'react'
import HeaderType2 from '../components/header/HeaderType2'
import './Room.css'
import axios from 'axios'
import RoomCard from '../components/Cards/RoomCard'
import SearchCard from '../components/Cards/SearchCard'
import moment from 'moment'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [duplicaterooms, setDuplicaterooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [searchKey, setSearchKey] = useState('')
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

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

  return (
    <>
      <HeaderType2 />

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
    </>
  )
}

export default Rooms;
