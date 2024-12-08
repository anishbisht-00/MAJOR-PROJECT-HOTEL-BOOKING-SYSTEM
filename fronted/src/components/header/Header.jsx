import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("currentUser"))

    const logoutHandler = () => {
        localStorage.removeItem("currentUser")
        window.location.href = '/login'
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  


    return (
        <>
            {/* <!-- header  --> */}
            <header>

                {/* <!-- logo/name --> */}
                <div className="logo">
                    <span>CheckIn</span>
                </div>

                {/* <!-- navigation bar --> */}
                <nav>
                    <ul>
                        <Link to='/' >
                            <li>Home</li>
                        </Link>

                        <Link to='/rooms' >
                            <li>Rooms</li>
                        </Link>
                        <Link to='/contact' >
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </nav>

                {/* <!-- loginSignup buttons --> */}
                {user ? (<>
                    {/* user icon */}
                    <div >
                        <button onClick={toggleMenu} className='btn-1 dropdown-btn'><i className="fa-solid fa-user"></i>{user.username} <i className="fa-solid fa-caret-down"></i> </button>

                        {isOpen && (
                            <div  className="dropdown-menu">
                               <Link to='/user-profile' ><button className='btn-2'>UserProfile</button></Link>
                               {user.isAdmin && (
                                <Link to='/admin' ><button className='btn-2'>AdminPannel</button></Link>
                               )}
                               
                               <button className='btn-2' onClick={logoutHandler}>Logout</button>
                            </div>
                        )}
                    </div>
                </>) : (<>
                    <div className="loginSignup-btn">

                        <Link to='/login' >
                            <button className="login btn-1">Log In</button>
                        </Link>
                        <Link to='/signup' >
                            <button className="signUp btn-1">Sign Up</button>
                        </Link>

                    </div></>)}
            </header>
        </>
    )
}

export default Header