import React, { useState } from 'react'
import HeroSection from '../components/header/HeroSection'
import CardType1 from '../components/Cards/CardType1'
import './Home.css'
import CardType2 from '../components/Cards/CardType2'
import SearchCard from '../components/Cards/SearchCard'

const Home = () => {

  const [from, setFrom] = useState()
  const [to, setTo] = useState()
<<<<<<< HEAD
  const [searchKey, setSearchKey] = useState('')
  
=======

>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
  const handleDataFromChild = (newFrom, newTo) => {
    setFrom(newFrom);
    setTo(newTo);
  }
<<<<<<< HEAD
  const handleSearch = (key) => {
    setSearchKey(key);
    // filterRooms(key, from, to); // Filter rooms when search key changes
  };
=======
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
  return (
    <>
      <HeroSection />
      {/* seach card */}
      <div className='home-search'>
<<<<<<< HEAD
        <SearchCard sendDataToParent={handleDataFromChild} searchFilter={handleSearch} />
=======
        <SearchCard sendDataToParent={handleDataFromChild} />
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
      </div>


      {/* Card Container1 start here */}
      <div className="card-container1">
        <div className="card-box1">
          <CardType1 img='/src//assets/room1.avif' title='Rooms' />
        </div>
        <div className="card-box2">
          <CardType1 img='/src//assets/dining3.jpg' title='Dining' />
          <CardType1 img='/src//assets/pool2.jpg' title='Service & Facilities' />
        </div>
        <div className="card-box3">
          <CardType1 img='/src/assets/confrence2.webp' title='Conference & Meetings' />
          <CardType1 img='/src//assets/venue4.jpeg' title='Wedding Package' />
        </div>
      </div>
      {/* Card Container1 ends here */}

      {/* Card Container2 ends here */}
      <div className="card-container2">
        <div className="title">
          <h2>Special Offers</h2>
        </div>
        <div className="title2">
          <h1>Best Offer Of The Month</h1>
          <h2>View all</h2>
        </div>
        <div className="description">
          <p>
            Experience Fantastic Benefits and Obtain Better Rates
          </p>
          <p>When You Make a Booking on Our Official Website.</p>
        </div>
        <div className="card-container">
          <div className="box1">
            <CardType2 img='/src/assets/room2.jpg' type='Room' title='HoneyMoon' disc='Indulge in a Memorable One-Time Romantic Dinner for Two' rate='5,499' />
          </div>
          <div className="box2">
            <CardType2 img='/src/assets/confrence1.jpg' type='Room' title='Meetings' disc='Experience an Exclusively Private Environment to Boost Your Productivity' rate='8,499' />
          </div>
          <div className="box3">
            <CardType2 img='/src/assets/dining1.jpg' type='Dining' title='Romantic Dining' disc='Indulge in a Memorable One-Time Romantic Dinner for Two' rate='2,499' />
          </div>
        </div>
      </div>
    </>

  )
}

export default Home