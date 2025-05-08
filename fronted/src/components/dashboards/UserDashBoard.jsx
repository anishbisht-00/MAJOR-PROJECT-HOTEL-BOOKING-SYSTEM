import React, { useEffect, useState } from 'react'
import './UserDashBoard.css'
import HeaderType2 from '../header/HeaderType2'
import UserBookingCard from '../Cards/UserBookingCard'
import axios from 'axios'


const UserDashBoard = () => {

  const user = JSON.parse(localStorage.getItem("currentUser"))
  const [bookings, setBookings] = useState([])
  const [editMode, setEditMode] = useState(false)

  // current user variables 
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [profilePic, setProfilePic] = useState(user.profilePic)
  const [email, setEmail] = useState(user.email)
  const [address, setAddress] = useState(user.address)
  const [gender, setGender] = useState(user.gender)
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber)




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




  // edit profile button handler
  const editButtonHandler = () => {

    setEditMode(true)
  }


  // save profile button handler
 const saveButtonHandler = async () => {
  console.log(user);
  const updatedUser = {
    _id: user._id,
    name,
    username,
    profilePic,
    email,
    address,
    gender,
    mobileNumber,
  };

  try {
    const result = (await axios.post('/api/users/update', updatedUser)).data;



    // Update localStorage with the new user data
    localStorage.setItem("currentUser", JSON.stringify(result.user));
    
    // Optionally, update the state as well
    setEditMode(false);
  } catch (error) {
    alert('Something went wrong, please try again later.');
  }
};


  return (

    <>
      <HeaderType2 />

      <div className="main">
        {/* Left section of user profile */}
        {editMode ? (
          <form 
          onSubmit={(e) => {
            e.preventDefault()
           
          }}
          className="left-section">

            {/* Usernames and display picture */}
            <div className="user-dp">
              <div className="dp">
                <img src={user.profilePic} alt="User" />
              </div>
              <div className="user-display-name">{user.name} </div>
              <div className="user-name gray"> {(user.username).toLowerCase().split(" ").join("")} </div>
            </div>

            {/* User basic information */}
            <div className="user-info">
              <div className="user-full-name">
                <span>Name </span>
                <span className="gray">
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    type="text" id='name' name='name' />
                </span>
              </div>
              <hr />
              <div className="user-email">
                <span>E-mail </span>
                <span>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type="email" id='email' name='email' />
                </span>

              </div>
              <hr />
              <div className="user-address">
                <span>Address </span>
                <span>
                  <input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value)
                    }}
                    type="text" id='address' name='address' />
                </span>

              </div>
              <hr />
              <div className="user-contact">
                <span>Mobile Number </span>
                <span>
                  <input
                    value={mobileNumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value)
                    }}
                    type="text" id='mobileNumber' name='mobileNumber' />
                </span>

              </div>
              <hr />
              <div className="user-gender">
                <span>Gender </span>
                <span>
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Not Specified">Not Specified</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </span>

              </div>
              <hr />

              <button onClick={saveButtonHandler}>Save Profile</button>

            </div>

          </form>

        ) : (
          <div className="left-section">
            {/* Usernames and display picture */}
            <div className="user-dp">
              <div className="dp">
                <img src={user.profilePic} alt="User" />
              </div>
              <div className="user-display-name">{user.name} </div>
              <div className="user-name gray"> {(user.username).toLowerCase().split(" ").join("")} </div>
            </div>

            {/* User basic information */}
            <div className="user-info">
              <div className="user-full-name">
                <span>Name </span>
                <span className="gray">{user.name}</span>
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
                  {user.address}

                </span>
              </div>
              <hr />
              <div className="user-contact">
                <span>Mobile Number </span>
                <span className="gray">
                  {user.mobileNumber}
                </span>
              </div>
              <hr />
              <div className="user-gender">
                <span>Gender </span>
                <span className="gray">
                  {user.gender}
                </span>
              </div>
              <hr />

              <button onClick={editButtonHandler}>Edit Profile</button>

            </div>
          </div>
        )}

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

          {/* Cancelled bookings */}
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

          {/* Previous bookings */}
          <div className="previous-bookings">
            <h2>Previous Bookings</h2>
            {
              bookings.map(booking => {
                if (booking.roomStatus === 'bookingExpired') {
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