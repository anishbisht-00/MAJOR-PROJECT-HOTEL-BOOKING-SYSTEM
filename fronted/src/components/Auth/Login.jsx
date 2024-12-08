import React, { useState } from 'react'
import './Login.css'
import HeaderType2 from '../header/HeaderType2'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    const user = {

      email,
      password
    }
    console.log(user)
    try {
      const result = (await axios.post('/api/users/login', user)).data
      localStorage.setItem('currentUser', JSON.stringify(result))
      window.location.href = '/user-profile'

    } catch (error) {
      alert('Invalid Credentials')
    }
  }



  return (
    <>
      <HeaderType2 />
      <div className="container">
        <h2 className="form-head">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setEmail('')
            setPassword('')
          }}
          className="loginSignupForm"
          id="loginForm" >
          {/* <!-- Email --> */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required />
          </div>

          {/* <!-- Password --> */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required />
          </div>

          {/* <!-- Login Button --> */}
          <div className="form-group">
            <button type="submit" onClick={loginHandler}>Login</button>
          </div>
        </form>

        <p>Don't have an account? <Link to='/signup' >Sign up here</Link>.</p>
      </div>
    </>
  )
}

export default Login