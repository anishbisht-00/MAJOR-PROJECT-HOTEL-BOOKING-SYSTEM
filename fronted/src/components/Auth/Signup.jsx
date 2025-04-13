import React, { useState } from 'react'
import './Signup.css'
import HeaderType2 from '../header/HeaderType2'
import { Link } from 'react-router-dom'
import axios from 'axios'




const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')

  const signupHandler = async () => {
    if (password == confirmpassword) {
      const user = {
        username,
        email,
        password,
        confirmpassword
      }
      try {
        const result = (await axios.post('/api/users/signup', user)).data
        alert('Signed Up Successfully.')
        window.location.href='/login'
      } catch (error) {
        alert('Something went wrong please try again later.')
      }
    }
    else {
      alert("Passwords doesn't match.")
    }
  }



  // return function
  return (
    <>
      <HeaderType2 />
      <div className="container">
        <h2 className="form-head">Sign up</h2>


        {/* Form starts......................................  */}
        <form onSubmit={(e) => {
          e.preventDefault()
          setUsername('')
          setEmail('')
          setPassword('')
          setConfirmpassword('')
        }}
          className="loginSignupForm"
          id="signupForm">

          {/* <!-- Full Name --> */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              required />
          </div>

          {/* <!-- Email --> */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
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
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required />
          </div>

          {/* <!-- Confirm Password --> */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              value={confirmpassword}
              onChange={(e) => {
                setConfirmpassword(e.target.value)
              }}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required />
          </div>

          {/* <!-- Signup Button --> */}
          <div className="form-group">
            <button type="submit" onClick={signupHandler}>Signup</button>
          </div>
        </form>

        <p>Already have an account? <Link to='/login' >Login here</Link>.</p>
      </div>
    </>
  )
}

export default Signup