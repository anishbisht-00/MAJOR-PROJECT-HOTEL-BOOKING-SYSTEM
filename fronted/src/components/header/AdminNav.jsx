import React from 'react'
import './AdminNav.css'
import { Link } from 'react-router-dom'
const AdminNav = () => {
  return (
    <>
    <div className="admin-nav">
        <Link to='/admin' >
        <span>Bookings</span>
        </Link >

        <Link to='/admin/rooms' >
        <span>Rooms</span>
        </Link>

        <Link to='/admin/add-room' >
        <span>Add Room</span>
        </Link>

        <Link to='/admin/users' >
        <span>Users</span>
        </Link>
    </div>
    </>
  )
}

export default AdminNav