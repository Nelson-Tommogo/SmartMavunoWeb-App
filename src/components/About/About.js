import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './About.css';
import images from '../../assets/dashimages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTractor, faLandmark, faStore, faHandshake } from '@fortawesome/free-solid-svg-icons';

// About page component. Displays an image and text content about the platform.
const About = () => {
    return (
        <div>
            {/* Top navigation structure */}
            <div className="home-page">
                <div className="top-bar">
                    <img src={images.logo} alt="Logo" className="logo" />
                    <div className="buttons">
                        <NavLink to="/signup" className="green-button">Sign Up</NavLink>
                        <NavLink to="/login" className="green-button">Login</NavLink>
                    </div>
                </div>
                <div className="navigation-bar">
                    <div className="dropdown">
                        <NavLink to="#" className="nav-item">Market Place</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/purchase" className="dropdown-item">Purchase</NavLink>
                            <NavLink to="/sell" className="dropdown-item">Sell</NavLink>
                        </div>
                    </div>
                    {/* Direct link for the Weather Report */}
                    <a href="https://smartmvua-forecast.netlify.app/" className="nav-item">Weather</a>
                    <div className="dropdown">
                        <NavLink to="/market-insight" className="nav-item" activeClassName="active">Market Insight</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/workshops" className="dropdown-item">Workshops</NavLink>
                            <NavLink to="/projects" className="dropdown-item">Projects</NavLink>
                            <NavLink to="/modern-farming" className="dropdown-item">Modern Farming</NavLink>
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <NavLink to="/more-insight" className="nav-item" activeClassName="active">More Insight</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/reach-us" className="dropdown-item">Reach Us</NavLink>
                            <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
                            <NavLink to="/about" className="dropdown-item">About Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* About section content */}
            <div className="about-section">
                <div className="about-content">
                    {/* Left side: Image */}
                    <div className="about-image">
                        <img src={images.about} alt="About Us" />
                    </div>
                    
                    {/* Right side: Content */}
                    <div className="about-text">
                        <h2 className="about-title-italic">Get to know us</h2>
                        <h1 className="about-title-bold">THE BEST AGRICULTURE PLATFORM</h1>
                        <p className="about-description">
                            Smart Mavuno is a leading platform providing innovative agricultural solutions to farmers worldwide. 
                            Our mission is to empower farmers with the latest tools and technology to improve productivity and sustainability.
                        </p>
                        {/* Button to navigate to homepage */}
                        <NavLink to="/" className="discover-more-btn">
                            Discover More
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Meet Our Team Members Section */}
            {/* Meet Our Team Members Section */}
<div className="team-section">
    <h2 className="team-title">Meet Our Team Members</h2>
    
    <div className="team-network">
        {/* Smart Mavuno at the core */}
        <div className="team-core">
            <img src={images.logo} alt="Smart Mavuno" className="team-core-logo" />
            <p>SmartMavuno</p>
        </div>

        {/* Arrows originating from Smart Mavuno */}
        <div className="connection-arrow arrow-to-farmers">&#8644;</div>
        <div className="connection-arrow arrow-to-government">&#8644;</div>
        <div className="connection-arrow arrow-to-buyers">&#8644;</div>
        <div className="connection-arrow arrow-to-leasers">&#8644;</div>

        {/* Farmers */}
        <div className="team-node farmers">
            <FontAwesomeIcon icon={faTractor} className="team-icon" />
            <p>Farmers</p>
        </div>

        {/* Government */}
        <div className="team-node government">
            <FontAwesomeIcon icon={faLandmark} className="team-icon" />
            <p>Government</p>
        </div>

        {/* Buyers */}
        <div className="team-node buyers">
            <FontAwesomeIcon icon={faStore} className="team-icon" />
            <p>Buyers</p>
        </div>

        {/* Leasers */}
        <div className="team-node leasers">
            <FontAwesomeIcon icon={faHandshake} className="team-icon" />
            <p>Leasers</p>
        </div>
    </div>
</div>

           

            <Footer />
        </div>
    );
}

export default About;
