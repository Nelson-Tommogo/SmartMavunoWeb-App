import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import contactStyles from './Contact.module.css'; // Renamed import
import globalStyles from './Contact.css'; // Renamed import
import images from '../../assets/dashimages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact= () => {
    const [formContent, setFormContent] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            {/* Top navigation structure */}
            <div className={`home-page ${globalStyles.homePage}`}>
                <div className={`top-bar ${globalStyles.topBar}`}>
                    <img src={images.logo} alt="Logo" className={`logo ${globalStyles.logo}`} />
                    <div className={`buttons ${globalStyles.buttons}`}>
                        <NavLink to="/signup" className={`green-button ${globalStyles.greenButton}`}>Sign Up</NavLink>
                        <NavLink to="/login" className={`green-button ${globalStyles.greenButton}`}>Login</NavLink>
                    </div>
                </div>

                <div className={`navigation-bar ${globalStyles.navigationBar}`}>
                    <div className={`dropdown ${globalStyles.dropdown}`}>
                        <NavLink to="#" className={`nav-item ${globalStyles.navItem}`}>Market Place</NavLink>
                        <div className={`dropdown-content ${globalStyles.dropdownContent}`}>
                            <NavLink to="/purchase" className={`dropdown-item ${globalStyles.dropdownItem}`}>Purchase</NavLink>
                            <NavLink to="/sell" className={`dropdown-item ${globalStyles.dropdownItem}`}>Sell</NavLink>
                        </div>
                    </div>
                    <a href="https://smartmvua-forecast.netlify.app/" className={`nav-item ${globalStyles.navItem}`}>Weather</a>
                    <div className={`dropdown ${globalStyles.dropdown}`}>
                        <NavLink to="/market-insight" className={`nav-item ${globalStyles.navItem}`} activeClassName="active">Market Insight</NavLink>
                        <div className={`dropdown-content ${globalStyles.dropdownContent}`}>
                            <NavLink to="/workshops" className={`dropdown-item ${globalStyles.dropdownItem}`}>Workshops</NavLink>
                            <NavLink to="/projects" className={`dropdown-item ${globalStyles.dropdownItem}`}>Projects</NavLink>
                            <NavLink to="/modern-farming" className={`dropdown-item ${globalStyles.dropdownItem}`}>Modern Farming</NavLink>
                        </div>
                    </div>
                    <div className={`dropdown ${globalStyles.dropdown}`}>
                        <NavLink to="/more-insight" className={`nav-item ${globalStyles.navItem}`} activeClassName="active">More Insight</NavLink>
                        <div className={`dropdown-content ${globalStyles.dropdownContent}`}>
                            <NavLink to="/reach-us" className={`dropdown-item ${globalStyles.dropdownItem}`}>Reach Us</NavLink>
                            <NavLink to="/contact" className={`dropdown-item ${globalStyles.dropdownItem}`}>Contact</NavLink>
                            <NavLink to="/about" className={`dropdown-item ${globalStyles.dropdownItem}`}>About Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information and Map */}
            <div className={`container ${contactStyles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${contactStyles.heading} mx-auto`}>We'd Love to Hear From You</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={contactStyles.head}>Address</p>
                        <p className={contactStyles.content}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Nairobi, Kenya
                        </p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={contactStyles.head}>Contact</p>
                        <p className={contactStyles.content}>
                            <FontAwesomeIcon icon={faPhone} /> Phone: +254 712 345678
                        </p>
                        <p className={contactStyles.content}>
                            <FontAwesomeIcon icon={faEnvelope} /> Email: info@smartmavuno.com
                        </p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={contactStyles.head}>Working Hours</p>
                        <p className={contactStyles.content}>Monday - Friday: 09:00 - 20:00</p>
                        <p className={contactStyles.content}>Sunday & Saturday: 10:30 - 22:00</p>
                    </div>
                </div>

                <p className={contactStyles.email} data-aos='fade-up'>You can email us</p>

                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{ textAlign: 'left' }}>
                        <label className={contactStyles.label}>Name</label><br />
                        <input name="name" value={formContent.name} onChange={handleChange} className={contactStyles.input} type="text" />

                        <label className={contactStyles.label}>Email</label><br />
                        <input name="email" value={formContent.email} onChange={handleChange} className={contactStyles.input} type="email" />

                        <label className={contactStyles.label}>Subject</label><br />
                        <input name="subject" value={formContent.subject} onChange={handleChange} className={contactStyles.input} type="text" />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{ textAlign: 'left' }}>
                        <label className={contactStyles.label}>Message</label><br />
                        <textarea name="message" value={formContent.message} onChange={handleChange} className={`${contactStyles.input} ${contactStyles.msg}`} type="text" />
                        <div style={{ textAlign: 'right' }}>
                            <button className={`btn custom_btn ${contactStyles.btn}`}>SEND</button>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335424496!2d36.84739685!3d-1.3032089500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1726168796028!5m2!1sen!2ske"
                        width="1100"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nairobi Location"
                    ></iframe>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Contact;
