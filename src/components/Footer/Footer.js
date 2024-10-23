// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css'; // Import Footer.css for styling
import images from '../../assets/dashimages'; // Import images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <div className="newsletter-section">
        <img src={images.smart} alt="Newsletter" className="newsletter-image" />
        <div className="vertical-line"></div>
        <div className="newsletter-content">
          <p>Subscribe to our newsletter to get our updates and recommendations</p>
          <div className="input-icon-wrapper">
            <i className="fas fa-envelope email-icon"></i>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-section">
        <h4>Download our app Today.</h4>
          <a href="https://play.google.com/store/apps/details?id=com.yourapp" target="_blank" rel="noopener noreferrer">
            <img src={images.footer} alt="Download on Google Play" className="app-download" />
          </a>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="tel:+254759735505">
                <FontAwesomeIcon icon={faPhone} /> (+254707687930)
              </a>
            </li>
            <li>
              <a href="mailto:info@smartmavuno.africa">
                <FontAwesomeIcon icon={faEnvelope} /> info@smartmavuno.africa
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Kasarani,+Kenya" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Kasarani, Kenya
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#agrijenga">AgriJenga</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#urban-farming">Urban Farming</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#farm-input-stores">Farm Input Stores</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Import Links</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#smartmavuno-launch">smartMavuno Launch</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#register-farmer">Register as Farmer</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#donation-basket">Donation Basket</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
              <a href="#register-labour-provider">Register as Labour Provider</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us On</h4>
          <ul className="social-links">
            <li>
              <a href="https://x.com/SmartMavuno" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/smartmavuno" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy;2023 SmartMavuno. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
