import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faChartLine, faSeedling, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './CompanyImpact.css';

const CompanyImpact = () => {
    const impactData = [
        {
            title: "Farmers Empowered",
            value: "10,000+",
            icon: faUsers,
        },
        {
            title: "Counties Reached",
            value: "46",
            icon: faGlobe,
        },
        {
            title: "Market Value",
            value: "$50M+",
            icon: faChartLine,
        },
        {
            title: "Seeds Distributed",
            value: "1M+",
            icon: faSeedling,
        },
        {
            title: "Sustainable Projects",
            value: "50+",
            icon: faHandHoldingHeart,
        },
    ];

    return (
        <div className="company-impact">
            <h2>Our Impact</h2>
            <div className="impact-container">
                {impactData.map((item, index) => (
                    <div key={index} className="impact-item">
                        <FontAwesomeIcon icon={item.icon} className="impact-icon" />
                        <h3>{item.value}</h3>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyImpact;
