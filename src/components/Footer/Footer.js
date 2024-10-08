// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css'; // Import Footer.css for styling
import images from '../../assets/dashimages'; // Import images

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
          <img src={images.footer} alt="Download on Google Play" className="app-download" />
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Community</li>
            <li>Testimonies</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Tweet @ us</li>
            <li>Send a mail</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>Download App</li>
            <li>Shop now</li>
            <li>Donation Basket</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow our socials</h4>
          <ul className="social-links">
          <li>
  <a href="https://x.com/SmartMavuno" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i> smartmavuno
  </a>
</li>
            <li>
              <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> smartmavuno
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/smartmavuno" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> smartmavuno
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> smartmavuno
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
