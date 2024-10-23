import React from 'react';
import './Partners.css';

// Import your partner logos
import FspnLogo from '../../assets/partners/fspn.jpeg';
import alxLogo from '../../assets/partners/alx.jpeg';
import powerLearnLogo from '../../assets/partners/powerlearn.jpeg';
import mazetuLogo from '../../assets/partners/mazetu.png';
import mebiutLogo from '../../assets/partners/mebiut.png';
import Kalro from '../../assets/partners/kalro.png'; 
import uayo from '../../assets/partners/uayo.jpg'; 

const Partners = () => {
    const partnerData = [
        {
            title: "",
            logo: FspnLogo,
            link: "https://fspnafrica.org/", 
        },
        {
            title: "",
            logo: alxLogo,
            link: "https://www.alx.com", 
        },
        {
            title: "",
            logo: powerLearnLogo,
            link: "https://www.powerlearn.org",         
        },
        {
            title: "",
            logo: mazetuLogo,
            link: "https://www.mazetu.africa", 
        },
        {
            title: "",
            logo: mebiutLogo,
            link: "https://www.mebiut.com", 
        },
        {
            title: "",
            logo: Kalro,
            link: "https://www.kalro.org/",
        },
        {
            title: "",
            logo: uayo,
            link: "https://www.uayo.org/", 
        },
    ];

    return (
        <div className="partners">
            <h2>Our Partners</h2>
            <div className="partners-container">
                {partnerData.map((item, index) => (
                    <div key={index} className="partner-item">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="partner-link">
                            <div className="partner-logo-container">
                                <img src={item.logo} alt={item.title} className="partner-logo" />
                                <p>{item.title}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
