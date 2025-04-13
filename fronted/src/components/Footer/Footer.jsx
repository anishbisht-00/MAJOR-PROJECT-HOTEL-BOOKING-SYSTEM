import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    {/* <!-- footer start  --> */}
    <footer>
        {/* <!-- footer head section  --> */}
        <div className="footer-head">
            <span>"At CheckIn, we connect travelers with the best hotels, ensuring comfort, convenience, and great deals
                with every booking. Whether you're traveling for business or leisure, we're here to make your stay
                unforgettable."</span>

        </div>
        {/* <!-- footer main section  --> */}
        <section className="footer-main">
            {/* <!-- footer-main 1st coloumn --> */}
            <div className="aboutUs">
                <ul>
                    <li>
                        <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <i className="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;
                        <a href="#">X-Twitter </a>
                    </li>
                </ul>
            </div>
            {/* <!-- footer-main 2nd coloumn --> */}
            <div className="quickLinks">
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About Us</a></li>
                    <li> <a href="#">Facilities</a></li>
                    <li> <a href="#">Gallery</a></li>
                    <li> <a href="#">Contact</a></li>
                </ul>
            </div>
            {/* <!-- footer-main 3rd coloumn --> */}
            <div className="contactInfo">
                <h4>Contact</h4>
                <span> <i className="fa-solid fa-phone"></i>&nbsp;&nbsp; +91 879-268-3624</span>
                <span> <i className="fa-regular fa-envelope"></i>&nbsp;&nbsp; contact@checkin.com</span>
            </div>
            {/* <!-- footer-main 4th coloumn --> */}
            <div className="Legal">
                <ul>
                    <li> <a href="#">Privacy Policy</a></li>
                    <li> <a href="#">Terms & Conditions</a></li>
                    <li> <a href="#">Cookies Policy</a></li>
                </ul>
            </div>

        </section>

        {/* <!-- footer botom section  --> */}
        <section className="footer-bottom">
            <span className="gray">Copyright &copy; CheckIn.com | All rights reserverd - 2024</span>
        </section>
    </footer>
    </>
  )
}

export default Footer