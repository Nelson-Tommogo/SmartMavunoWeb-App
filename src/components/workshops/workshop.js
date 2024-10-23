import React from 'react';
import './workshop.css';

const workshops = [
  {
    title: 'Soil Health Workshop',
    description: 'Learn about soil health management and practices.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Crop Rotation Techniques',
    description: 'Explore effective crop rotation strategies for better yields.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Sustainable Farming Practices',
    description: 'Understand sustainable practices to enhance productivity.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Pest Management Solutions',
    description: 'Discover innovative solutions for pest management.',
    image: 'https://via.placeholder.com/150',
  },
];

const WorkshopPage = () => {
  return (
    <div className="workshop-container">
      <h1>Our Workshops</h1>
      <div className="workshop-grid">
        {workshops.map((workshop, index) => (
          <div className="workshop-card" key={index}>
            <img src={workshop.image} alt={workshop.title} className="workshop-image" />
            <h2>{workshop.title}</h2>
            <p>{workshop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopPage; // Make sure this line is present
