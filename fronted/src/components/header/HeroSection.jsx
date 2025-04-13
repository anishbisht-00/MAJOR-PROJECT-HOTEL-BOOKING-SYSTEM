import React from 'react'
import './HeroSection.css'
import Header from './Header'
const HeroSection = () => {
    return (
        <>
            {/* <!-- hero-section --> */}
            <section className="hero">

                {/* <!-- header  --> */}
                <Header />
                {/* <!-- hero-main section --> */}
                <div className="hero-main">
                    <span>Enjoy Every Stay</span>
                    <span>Your adventure begins the moment you <span className="orange fnt-sz-2">CheckIn.</span></span>
                    <span>Welcome to our hotel, where modern luxury meets timeless elegance. Enjoy spacious rooms, exceptional
                        amenities, and personalized service for an unforgettable stay.</span>
                </div>

                {/* <!-- cover over the hero section --> */}
                <div className="hero-cover"></div>
            </section>
            {/* <!-- hero section ends here  --> */}
        </>
    )
}

export default HeroSection