import React from 'react';
import TopBar from '../tobars/topbars'; // Ensure the path is correct
import Footer from '../Footer/Footer'; 
import './projects.css';

// Import images from the local src directory
import soilHealthImage from '../../assets/projects/soil_health_workshop.jpg';
import cropRotationImage from '../../assets/projects/crop_rotation.jpg';
import sustainableFarmingImage from '../../assets/projects/sustainable_farming.jpg';
import pestManagementImage from '../../assets/projects/pest_management.jpg';

const projects = [
  {
    title: 'Soil Health Workshop',
    description: 'Learn about soil health management and practices.',
    image: soilHealthImage,
    appLink: 'https://example.com/watch/soil-health-workshop',
    youtubeLink: 'https://youtu.be/74P20fGJv1w?si=MkCadpr0mpqNXLs0', // Updated YouTube link
  },
  {
    title: 'Crop Rotation Techniques',
    description: 'Explore effective crop rotation strategies for better yields.',
    image: cropRotationImage,
    appLink: 'https://example.com/watch/crop-rotation-techniques',
    youtubeLink: 'https://youtu.be/xIYsB_2_6go?si=bOJkNX6iyhMlNeI_', // Updated YouTube link
  },
  {
    title: 'Sustainable Farming Practices',
    description: 'Understand sustainable practices to enhance productivity.',
    image: sustainableFarmingImage,
    appLink: 'https://example.com/watch/sustainable-farming-practices',
    youtubeLink: 'https://youtu.be/iloAQmroRK0?si=5JyIVHBR_dKb3jLO', // Updated YouTube link
  },
  {
    title: 'Pest Management Solutions',
    description: 'Discover innovative solutions for pest management.',
    image: pestManagementImage,
    appLink: 'https://example.com/watch/pest-management-solutions',
    youtubeLink: 'https://youtu.be/_R0My-2ag94?si=COSMSZH02D3Uhb3n', // Updated YouTube link
  },
];


const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <TopBar /> {/* Call the TopBar component */}
      <h1 className="projects-title">SmartMavuno Projects</h1> {/* Title at the top */}
      <div className="container">
        {/* Project Cards Section */}
        <div className="workshop-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              {/* Buttons */}
              <div className="button-container">
                <a href={project.appLink} className="watch-button participate-button">Watch on App</a>
                <a href={project.youtubeLink} className="watch-button participate-button">Watch on YouTube</a>
              </div>

              <p className="testimonial">"This project really helped me understand the concepts better!"</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Call the Footer component */}
    </div>
  );
};

export default ProjectsPage;
