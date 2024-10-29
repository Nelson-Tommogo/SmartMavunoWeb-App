import React from 'react';
import Footer from '../Footer/Footer'; // Import Footer
import './ModernFarming.css'; // Import CSS
import images from '../../assets/dashimages';
import { faSun, faGraduationCap, faChartLine, faComments, faDollarSign, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import TopBar from '../tobars/topbars';

const features = [
    { name: "Weather Report", icon: faSun, link: "https://smartmvua-forecast.netlify.app", description: "View weather forecasts for your farming activities." },
    { name: "Farmers Hub", icon: faGraduationCap, link: "/farmerhub", description: "Explore educational resources on modern farming techniques." },
    { name: "Farm Labour", icon: faChartLine, link: "/pricing", description: "Access market prices and agricultural information." },
    { name: "Food Donation", icon: faProjectDiagram, link: "/donation", description: "Manage and track your farming projects." },
    { name: "SmartMavuno IoT", icon: faComments, link: "/smartmavunoiot", description: "Provide feedback and view customer reviews." },
    { name: "Market Place", icon: faDollarSign, link: "/marketplace", description: "Gain insights into market trends and analysis." },
];

const ModernFarming = () => {
    return (
        <div className="modern-farming">
            <TopBar /> {/* TopBar component */}

            <div className="main-content">
                <div className="top-container">
                    <h1>Modern-day Farming Technologies</h1>
                </div>

                {/* Profiles Section */}
                <div className="profiles-container">
                    <Profile
                        imageGroup={[images.modern1, images.modern2, images.modern3]}
                        title="Irrigation or Farming Apps"
                        description="One of the most important jobs of a farmer is to make sure that he uses the water he has judiciously. Smart irrigation systems can optimize water levels based on soil moisture and weather predictions."
                        learnMoreLink="https://www.smartmavuno.africa"
                    />
                    <Profile
                        imageGroup={[images.modern4, images.modern5, images.modern6]}
                        title="Modern Machinery"
                        description="The modern farm machinery has upgraded the agricultural industry significantly. Mechanised agriculture includes the use of tractors, trucks, and various implements."
                        learnMoreLink="https://www.fieldking.com/blogs/agriculture-machinery-and-their-uses/"
                    />
                    <Profile
                        imageGroup={[images.modern7, images.modern8, images.modern9]}
                        title="Nitrogen Sensors"
                        description="Sensing technology applied to agriculture is based on light reflectance. N-Sensor measures light reflectance related to the crop's chlorophyll content."
                        learnMoreLink="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2023.1228221/full"
                    />
                </div>

                {/* Improvement Percentage Section */}
                <div className="bar-container">
                    <h2>Improvement Percentage</h2>
                    <div className="skill-row">
                        <ImprovementBar title="Without using modern farming technology:" percentage={68} />
                        <ImprovementBar title="Using modern Farming Technology:" percentage={97} />
                    </div>
                </div>

                {/* Last Container */}
                <div className="last-container">
                    <p>
                        Get Your First SmartMavuno Smart Devices NOW and Enjoy the Value of Modern and Remote Farming!:
                        <a className="last-btn" href="https://www.plugandplaytechcenter.com/insights/new-agriculture-technology-modern-farming" target="_blank" rel="noopener noreferrer">Click here</a>
                    </p>
                </div>
            </div>

            <Footer /> {/* Footer */}
        </div>
    );
};

// Profile Component
const Profile = ({ imageGroup, title, description, learnMoreLink }) => (
    <div className="profile">
        <div className="image-group">
            {imageGroup.map((image, index) => (
                <img key={index} src={image} alt={title} className={`profile-image img-${index + 1}`} />
            ))}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
    </div>
);

// Improvement Bar Component
const ImprovementBar = ({ title, percentage }) => (
    <div className="improvement-bar">
        <h3>{title}</h3>
        <div className="details">
            <span>Rate</span>
            <span>{percentage}%</span>
        </div>
        <div className="bar">
            <div style={{ width: `${percentage}%` }} className="rate-bar"></div>
        </div>
    </div>
);

export default ModernFarming;
