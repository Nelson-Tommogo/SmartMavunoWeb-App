import React from 'react';
import './projects.css';

const project = [
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

const ProjectsPage = () => {
  return (
    <div className="workshop-container">
      <h1>SmartMavuno Projects</h1>
      <div className="workshop-grid">
        {project.map((project, index) => (
          <div className="workshop-card" key={index}>
            <img src={project.image} alt={project.title} className="workshop-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 
