import React, { useEffect, useState } from 'react'
import './SearchCard.css'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import moment from 'moment'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
const SearchCard = ({ sendDataToParent,searchFilter }) => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const [searchKey, setSearchKey] = useState("")
=======
const SearchCard = ({ sendDataToParent }) => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
  
  const filterByDate = (dates) => {
    setFromDate(dates[0].format('DD-MM-YYYY')); // Format the moment object to a string
    setToDate(dates[1].format('DD-MM-YYYY'));   // Format the moment object to a string
  };
  

  useEffect(() => {
    sendDataToParent(fromDate,toDate)
<<<<<<< HEAD
    searchFilter(searchKey)
    // console.log(searchKey)
  }, [fromDate, toDate, searchKey]);
=======
  }, [fromDate, toDate]);
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
  

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
<<<<<<< HEAD
            <input
            value={searchKey}
            onChange={
              (e) => {
                setSearchKey(e.target.value)
              }
            }
             type="text" placeholder='Search Rooms' />
          </div>
          
=======
            <input type="text" placeholder='Search Rooms' />
          </div>
          <div className="search-btn">
            <Link to='/rooms' >
            <button className='search-button'>Search</button>
            </Link>
            
          </div>
>>>>>>> e6ceb427f0c19f12d026c9a0190b998a6271a984
        </div>

      </div>
    </>
  )
}

export default SearchCard