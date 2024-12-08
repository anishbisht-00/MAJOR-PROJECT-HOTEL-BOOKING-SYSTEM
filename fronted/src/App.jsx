import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Contact from './pages/Contact'
import HeroSection from './components/header/HeroSection'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import UserDashBoard from './components/dashboards/UserDashBoard'
import BookingScreen from './pages/BookingScreen'
import AdminDashBoard from './components/dashboards/AdminDashBoard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user-profile' element={<UserDashBoard />} />
        <Route path='/book/:roomid/:fromDate/:toDate' element={<BookingScreen />} />
        <Route path='/admin/*' element={<AdminDashBoard/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App