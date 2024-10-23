import React, { useState, useEffect } from 'react';
import './HomePage.css'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faGraduationCap, faChartLine, faComments, faDollarSign, faProjectDiagram, faQuoteLeft, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/dashimages';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import CompanyImpact from '../CompanyImpact/ CompanyImpact';
import Partners from '../partners/Partners';
import ProductAds from '../ProductAds/ProductAds';



const services = [
    { name: "Land Leasing", image: images.lease, description: "We offer flexible land leasing options to suit your agricultural needs." },
    { name: "Agricultural Consultancies", image: images.coinnsultation, description: "Get expert advice and consultancy services for your farming projects." },
    { name: "Equipment Rental", image: images.equipment, description: "Rent the latest agricultural equipment at affordable rates." },
    { name: "Irrigation Services", image: images.irrigation, description: "Comprehensive irrigation services to keep your fields well-watered." },
];

const features = [
    { name: "Weather Report", icon: faSun, link: "https://smartmvua-forecast.netlify.app", description: "View weather forecasts for your farming activities." },
    { name: "Farmers Hub", icon: faGraduationCap, link: "/education", description: "Explore educational resources on modern farming techniques." },
    { name: "Farm Labour", icon: faChartLine, link: "/pricing", description: "Access market prices and agricultural information." },
    { name: "Food Donation", icon: faProjectDiagram, link: "/projects", description: "Manage and track your farming projects." },
    { name: "SmartMavuno IoT", icon: faComments, link: "/feedbacks", description: "Provide feedback and view customer reviews." },
    { name: "Market Place", icon: faDollarSign, link: "/market-insight", description: "Gain insights into market trends and analysis." },
];

const latestItems = [
    { name: "Cabbage", image: images.cabbage, serviceType: "Vegetable" },
    { name: "Chickens", image: images.chickens, serviceType: "Poultry" },
    { name: "Drip Irrigation", image: images.dripirrigation, serviceType: "Irrigation" },
    { name: "Eggs", image: images.eggs, serviceType: "Poultry" },
    { name: "Free Land", image: images.freeland, serviceType: "Land" },
    { name: "Labour Latest", image: images.labourlatest, serviceType: "Labour" },
    { name: "Maindi", image: images.maindi, serviceType: "Crop" },
    { name: "Onions", image: images.onions, serviceType: "Vegetable" },
    { name: "Tomatoes", image: images.tomatoes, serviceType: "Vegetable" },
    { name: "Tractor", image: images.tractor, serviceType: "Equipment" },
    { name: "Zero Grazing", image: images.zerograzing, serviceType: "Farming" },
];

// Testimonial data
const testimonials = [
    { name: "Jesse Jacktone", image: images.kevin, text: "SmartMavuno transformed my farming journey with its seamless integration of essential services like soil testing and pest control. Now, I farm with confidence knowing I have the right support at every step." },
    { name: "Kevin Otieno", image: images.martha, text: "Thanks to SmartMavuno, I no longer worry about finding reliable equipment rental or agricultural consultancy. Their platform simplifies these services, allowing me to focus more on growing my crops." },
    { name: "Spencer Aloyce", image: images.david, text: "SmartMavuno's dedication to connecting farmers to markets and fostering community among agricultural peers is unparalleled. They've created a platform that not only boosts productivity but also encourages collaboration." },
    { name: "Victoria Anyango", image: images.mitchel, text: "Using SmartMavuno for irrigation schemes and land leasing has been a game-changer for my farm. I've seen significant improvements in efficiency and yield, all while saving time and resources." },
    { name: "Lucy Waithera", image: images.thomas, text: "I highly recommend SmartMavuno to any farmer serious about maximizing their agricultural potential. Their comprehensive services and market connections have been essential to my farm's success." },
    { name: "Cynthia Kinyaa", image: images.cynthia, text: "SmartMavuno isn't just a software—it's a lifeline for farmers. From pest control to market connections, they've thought of everything. It's the partner every modern farmer needs." },
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            }, 7000); // Change slide every 7 seconds
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const handlePauseToggle = () => {
        setIsPaused((prev) => !prev);
    };

    return (
        <div className="home-page">
            <div className="top-bar">
                <img src={images.logo} alt="Logo" className="logo" />
                <Header />
                <div className="buttons">
                    <NavLink to="/signup" className="green-button">Sign Up</NavLink>
                    <NavLink to="/login" className="green-button">Login</NavLink>
                </div>
            </div>

            {/* Navigation Container */}
            <div className="navigation-container"> 
                <div className="navigation-bar">
                    <div className="dropdown">
                        <NavLink to="#" className="nav-item">Home</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/marketplavce" className="dropdown-item">Market Place</NavLink>
                            <NavLink to="/community" className="dropdown-item">Community</NavLink>
                        </div>
                    </div>
                    <a href={features.find(feature => feature.name === "Weather Report").link} className="nav-item">Weather</a>
                    <div className="dropdown">
                        <NavLink to="/market-insight" className="nav-item" activeClassName="active">Resources</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/workshops" className="dropdown-item">Workshops</NavLink>
                            <NavLink to="/projects" className="dropdown-item">Projects</NavLink>
                            <NavLink to="/modern-farming" className="dropdown-item">Modern Farming</NavLink>
                            <NavLink to="/articles" className="dropdown-item">Articles and Blogs</NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="/more-insight" className="nav-item" activeClassName="active">More insights</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/reach-us" className="dropdown-item">Reach Us</NavLink>
                            <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
                            <NavLink to="/about" className="dropdown-item">About US</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className={`hero-slide ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + services.length) % services.length ? 'previous' : ''}`}
                        style={{ backgroundImage: `url(${service.image})` }}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">{service.name}</h1>
                            <p className="hero-description">{service.description}</p>
                        </div>
                    </div>
                ))}
                <div className="hero-navigation">
                    <div className="circle-button" onClick={goToPreviousSlide}>
                        &lt; {/* Back Icon */}
                    </div>
                    <div className="circle-button pause-button" onClick={handlePauseToggle}>
                        <FontAwesomeIcon icon={isPaused ? faPlay : faPause} /> {/* Toggle Icon */}
                    </div>
                    <div className="circle-button" onClick={goToNextSlide}>
                        &gt; {/* Next Icon */}
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="container">
                    <h2>Features</h2>
                    <p className="features-description">What our customers and clients will get:</p>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={feature.icon} />
                                    </div>
                                    <div className="feature-content">
                                        <h5><NavLink to={feature.link}>{feature.name}</NavLink></h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ProductAds/>

            <CompanyImpact />

            
            <div className="latest-section">
                <div className="container">
                    <h2>Latest!</h2>
                    <div className="latest-container">
                        {latestItems.map((item, index) => (
                            <div key={index} className="latest-item">
                                <img src={item.image} alt={item.name} className="latest-image" />
                                <div className="latest-info">
                                    <h5>{item.name}</h5>
                                    <p>{item.serviceType}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Testimonials section */}
            <div className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="container">
                    <div className="testimonials-container">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-item">
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                <div className="testimonial-content">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                                    <p>{testimonial.text}</p>
                                    <h5>{testimonial.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Partners/>
            <Footer />
        </div>
    );
};

export default HomePage;
