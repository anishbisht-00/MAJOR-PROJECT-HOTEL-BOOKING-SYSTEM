import React, { useEffect, useState } from 'react'
import './SearchCard.css'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import moment from 'moment'
import { Link } from 'react-router-dom'

const SearchCard = ({ sendDataToParent }) => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  
  
  const filterByDate = (dates) => {
    setFromDate(dates[0].format('DD-MM-YYYY')); // Format the moment object to a string
    setToDate(dates[1].format('DD-MM-YYYY'));   // Format the moment object to a string
  };
  

  useEffect(() => {
    sendDataToParent(fromDate,toDate)
  }, [fromDate, toDate]);
  

  return (
    <>
      <div className="search-container">
        <div className="search-container-head">
          <h1>Book a Room</h1>
          <p>Discover the perfect space for you.</p>
        </div>
        <div className="search-filters">
          <div className="date-filter">
            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
          </div>
          <div className="search-box">
            <input type="text" placeholder='Search Rooms' />
          </div>
          <div className="search-btn">
            <Link to='/rooms' >
            <button className='search-button'>Search</button>
            </Link>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchCard