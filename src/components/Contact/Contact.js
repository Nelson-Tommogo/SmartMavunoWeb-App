import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import contactStyles from './Contact.css';
import TopBar from '../tobars/topbars';

const Contact = () => {
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
            <TopBar />

            <div className={`container ${contactStyles.contain}`}>
                <p data-aos='fade-up' className={`${contactStyles.heading}`}>
                    We'd Love to Hear From You
                </p>

                <div className="contact-info">
                    <div data-aos='fade-right'>
                        <h3>Address</h3>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Nairobi, Kenya
                        </p>
                    </div>

                    <div data-aos='fade-up'>
                        <h3>Contact</h3>
                        <p>
                            <FontAwesomeIcon icon={faPhone} /> Phone: +254 707687930
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} /> Email: info@smartmavuno.africa
                        </p>
                    </div>

                    <div data-aos='fade-left'>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 09:00 - 20:00</p>
                        <p>Saturday & Sunday: 10:30 - 22:00</p>
                    </div>
                </div>

                <h2>You can email us</h2>

                <div className={contactStyles.contactForm}>
                    <label>Name</label>
                    <input 
                        name="name" 
                        value={formContent.name || ''} 
                        onChange={handleChange} 
                        type="text" 
                        required 
                    />

                    <label>Email</label>
                    <input 
                        name="email" 
                        value={formContent.email || ''} 
                        onChange={handleChange} 
                        type="email" 
                        required 
                    />

                    <label>Subject</label>
                    <input 
                        name="subject" 
                        value={formContent.subject || ''} 
                        onChange={handleChange} 
                        type="text" 
                        required 
                    />

                    <label>Message</label>
                    <textarea 
                        name="message" 
                        value={formContent.message || ''} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">SEND</button>
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
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
