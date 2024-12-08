
import React, { useEffect, useState } from 'react'
import HeaderType2 from '../header/HeaderType2'
import AdminNav from '../header/AdminNav'
import { Route, Routes } from 'react-router-dom'
import Bookings from '../adminComponents/Bookings'
import Rooms from '../adminComponents/Rooms'
import AddRoom from '../adminComponents/AddRoom'
import Users from '../adminComponents/Users'

const AdminDashBoard = () => {

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentUser"))
    if(!currentuser.isAdmin){
      window.location.href='/'
    }
  }, [])
  

  return (
    <>
    <HeaderType2 />
    <AdminNav />

    <Routes>
      <Route path='/' element={<Bookings />} />
      <Route path='/rooms' element={<Rooms/>} />
      <Route path='/add-room' element={<AddRoom/>} />
      <Route path='/users' element={<Users/>} />
    </Routes>
    </>
  )
}

export default AdminDashBoard