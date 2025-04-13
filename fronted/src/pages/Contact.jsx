import React, { useState } from 'react'
import HeaderType2 from '../components/header/HeaderType2'
import './Contact.css'
const Contact = () => {
  return (
    <>
      <HeaderType2 />

      {/* Contact page starting.... */}
      <div className="contact-card">
        <h1>Contact Us</h1>
        <div className="contact-types">
          <div className="by-phone">
            <img src="/src/assets/phone.png" alt="" />
            <h2>By Phone</h2>
            <p>Monday to Friday, 10am to 5pm</p>
            <span>Contact Number : </span>
            <span>+91 879-168-3624</span>

          </div>
          <div className="by-mail">
            <img src="/src/assets/mail1.png" alt="" />
            <h2>By Phone</h2>
            <p>Monday to Friday, 10am to 5pm</p>
            <span>Mail : </span>
            <span>contact@checkin.com</span>
          </div>
          <div className="by-google-form">
            <img src="/src/assets/google_forms.png" alt="" />
            <h2>By Google-froms</h2>
            <p>Monday to Friday, 10am to 5pm</p>
            <a href="https://forms.gle/xCXqbgdi7wqe7UKP8" target="_blank">
              <button>Click Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact