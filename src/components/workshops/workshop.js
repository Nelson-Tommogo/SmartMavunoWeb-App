import React from 'react';
import TopBar from '../tobars/topbars'; // Adjust the path as needed
import Footer from '../Footer/Footer'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faRecycle, faLeaf, faBug, faWater, faCarrot, faTools } from '@fortawesome/free-solid-svg-icons';
import soilHealthImage from '../../assets/projects/soil_health_workshop.jpg';
import cropRotationImage from '../../assets/projects/crop_rotation.jpg';
import sustainableFarmingImage from '../../assets/projects/sustainable_farming.jpg';
import pestManagementImage from '../../assets/projects/sustainable_farming.jpg';
import irrigationImage from '../../assets/projects/sustainable_farming.jpg';
import organicFarmingImage from '../../assets/projects/sustainable_farming.jpg';
import equipmentMaintenanceImage from '../../assets/projects/sustainable_farming.jpg';
import './workshop.css';

const workshops = [
  {
    title: 'Soil Health Workshop',
    description: 'Learn about soil health management and practices.',
    image: soilHealthImage,
    icon: faSeedling,
  },
  {
    title: 'Crop Rotation Techniques',
    description: 'Explore effective crop rotation strategies for better yields.',
    image: cropRotationImage,
    icon: faRecycle,
  },
  {
    title: 'Sustainable Farming Practices',
    description: 'Understand sustainable practices to enhance productivity.',
    image: sustainableFarmingImage,
    icon: faLeaf,
  },
  {
    title: 'Pest Management Solutions',
    description: 'Discover innovative solutions for pest management.',
    image: pestManagementImage,
    icon: faBug,
  },
  {
    title: 'Irrigation Techniques',
    description: 'Learn about modern irrigation methods to conserve water.',
    image: irrigationImage,
    icon: faWater,
  },
  {
    title: 'Organic Farming Practices',
    description: 'Discover the benefits and methods of organic farming.',
    image: organicFarmingImage,
    icon: faCarrot,
  },
  {
    title: 'Equipment Maintenance',
    description: 'Get tips on maintaining farming equipment for longevity.',
    image: equipmentMaintenanceImage,
    icon: faTools,
  },
];

const WorkshopPage = () => {
  return (
    <div className="workshop-page">
      <TopBar /> {/* Call the TopBar component */}
      <div className="workshop-container">
        <h1>Our Workshops</h1>
        <div className="workshop-grid">
          {workshops.map((workshop, index) => (
            <div className="workshop-card" key={index}>
              <img src={workshop.image} alt={workshop.title} className="workshop-image" />
              <div className="workshop-content">
                <div className="workshop-icon">
                  <FontAwesomeIcon icon={workshop.icon} size="2x" />
                </div>
                <h2>{workshop.title}</h2>
                <p>{workshop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Call the Footer component */}
    </div>
  );
};

export default WorkshopPage;
