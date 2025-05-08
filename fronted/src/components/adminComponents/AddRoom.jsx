import React, { useEffect, useState } from 'react'
import './AddRoom.css'
import axios from 'axios'


const AddRoom = () => {

  const [roomTitle, setRoomTitle] = useState('')
  const [location, setLocation] = useState('')
  const [rentPerDay, setRentPerDay] = useState(0)
  const [maxCount, setMaxCount] = useState(0)
  const [description, setDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [category, setCategory] = useState('')
  const [imageUrl1, setImageUrl1] = useState('')
  const [imageUrl2, setImageUrl2] = useState('')
  const [imageUrl3, setImageUrl3] = useState('')


  const addRoom = async () => {

    const newroom = {
      roomTitle,
      location,
      rentPerDay,
      maxCount,
      description,
      phoneNumber,
      category,
      imageUrls: [imageUrl1, imageUrl2, imageUrl3]
    }

    console.log(newroom)

    try {
      const result = (await axios.post('/api/rooms/addroom',newroom)).data
      console.log(result)
       alert('Room Added Successfully.')
        window.location.href='/rooms'
    } catch (error) {
      console.log(error)
    }



  }




  return (
    <>
      <div className="admin-add-room">
        <h1>Add Room</h1>
        <div className="room-inputs">
          <div className="room-name">
            <span>Name of Hotel Room : </span>
            <input
              value={roomTitle}
              onChange={(e) => {
                setRoomTitle(e.target.value)
              }}
              type="text" placeholder='Enter Name of Hotel Room' />
          </div>

          <div className="room-name">
            <span>Address : </span>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              type="text" placeholder='Enter Address of Hotel Room' />
          </div>

          <div className="rentperday">
            <span>Rent Per Night : </span>
            <input
              value={rentPerDay}
              onChange={(e) => {
                setRentPerDay(e.target.value)
              }}
              type="number" placeholder='Enter Rent Per Night' />
          </div>

          <div className="maxguests">
            <span>Max Guests : </span>
            <input
              value={maxCount}
              onChange={(e) => {
                setMaxCount(e.target.value)
              }}
              type="number" placeholder='How Many guests can stay in a room' />
          </div>

          <div className="room-description">
            <span>Room Description : </span>
            <input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              type="text" placeholder='Description of the Room' />
          </div>

          <div className="phonenumber">
            <span>Phone Number : </span>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
              type="number" placeholder='Enter Phone Number' />
          </div>

          <div className="category">
            <span>Room Category</span>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }} type="text" placeholder='Room Category (e.g. Delux, Non-Delux)' />
          </div>

          <div className="imageurls">
            <span>Images Urls : </span>
            <input
              value={imageUrl1}
              onChange={(e) => {
                setImageUrl1(e.target.value)
              }}
              type="text" placeholder='Image url 1' />
            <input
              value={imageUrl2}
              onChange={(e) => {
                setImageUrl2(e.target.value)
              }}
              type="text" placeholder='Image url 2' />
            <input
              value={imageUrl3}
              onChange={(e) => {
                setImageUrl3(e.target.value)
              }}
              type="text" placeholder='Image url 3' />
          </div>

        </div>
        {/* room inputs end */}

        <div className="addbtn">
          <button onClick={addRoom}>Add</button>
        </div>
      </div>
    </>
  )
}

export default AddRoom