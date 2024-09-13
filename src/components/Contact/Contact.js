import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Contact.css';
import images from '../../assets/dashimages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-page">
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

      {/* Contact Information and Map */}
      <div className="contact-container">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335424496!2d36.84739685!3d-1.3032089500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1726168796028!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nairobi Location"
          ></iframe>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through any of the following methods:</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} /> Phone: +254 712 345678
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Email: info@smartmavuno.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
