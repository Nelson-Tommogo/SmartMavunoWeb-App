import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer'; // Import Footer
import './ModernFarming.css'; // Import CSS
import images from '../../assets/dashimages';
// Removed FontAwesomeIcon import as it is not used

const ModernFarming = () => {
    return (
        <div className="modern-farming">
            {/* Navigation */}
            <div className="home-page">
                <div className="top-bar">
                    <img src={images.logo} alt="Logo" className="logo" />
                    <div className="buttons">
                        <NavLink to="/signup" className="green-button">Sign Up</NavLink>
                        <NavLink to="/login" className="green-button">Login</NavLink>
                    </div>
                </div>
                <div className="navigation-bar">
                    <div className="dropdown">
                        <NavLink to="#" className="nav-item">Market Place</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/purchase" className="dropdown-item">Purchase</NavLink>
                            <NavLink to="/sell" className="dropdown-item">Sell</NavLink>
                        </div>
                    </div>
                    <a href="https://smartmvua-forecast.netlify.app/" className="nav-item" target="_blank" rel="noopener noreferrer">Weather</a>
                    <div className="dropdown">
                        <NavLink to="/market-insight" className="nav-item" activeClassName="active">Market Insight</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/workshops" className="dropdown-item">Workshops</NavLink>
                            <NavLink to="/projects" className="dropdown-item">Projects</NavLink>
                            <NavLink to="/modern-farming" className="dropdown-item">Modern Farming</NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="/more-insight" className="nav-item" activeClassName="active">More Insight</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/reach-us" className="dropdown-item">Reach Us</NavLink>
                            <NavLink to="/contact" className="dropdown-item">Contact</NavLink>
                            <NavLink to="/about" className="dropdown-item">About Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="top-container">
                <img className="" src="" alt="" />
                <h1>Modern-day Farming Technologies</h1>
                <img className="" src="" alt="" />
                <img src="" alt="" />
            </div>

            <div className="wrapper"></div>
            <div className="middle-container">
                <div className="profile">
                    <div className="image-group">
                        <img src={images.modern1} alt="iapp" className="IAPP" />
                        <img src={images.modern2} alt="iapp" className="IAPP2" />
                        <img className="IAPP3" src={images.modern3} alt="iapp3" />
                    </div>
                    
                    
                    <h2>Irrigation or Farming Apps</h2>
                    <p align="left">
                        One of the most important jobs of a farmer is to make sure that he uses the water he has judiciously (especially if rain is not in the forecast). A new set of smartphone apps called SmartIrrigation are aimed at helping cotton, strawberry, and citrus farmers manage the water they use on their crops by taking into account local weather conditions.
                        <br />
                        Smart irrigation systems can optimize water levels based on things such as soil moisture and weather predictions. This is done with wireless moisture sensors that communicate with the smart irrigation controls and help inform the system whether or not the landscape is in need of water.
                    </p>
                    <a href="https://www.smartmavuno.africa" target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="wrapper2"></div>
            <div className="middle2-container">
                <div className="profile">
                    <div className="image-group">
                        <img src={images.modern4} alt="mm1" className="mm1" />
                        <img className="" src={images.modern5} alt="mm2" />
                        <img className="" src={images.modern6} alt="mm3" />
                    </div>
                    
                    
                    <h2>Modern Machinery</h2>
                    <p align="left">
                        The modern farm machinery has upgraded the agricultural industry for the best. Some of the essential and most used machinery are Combine or Combine Harvester, Rotavator or Rotary Tiller, Plough or Plow, Tractor Trailer, Power Harrow, Leveler, water bowser, ripper machine, and disc harrow.
                        Mechanised agriculture includes the use of tractors, trucks, combine harvesters, countless types of farm implements, aeroplanes and helicopters (for aerial application), and other vehicles. By utilizing mechanical power in agriculture, it leads to reduce animal power so that raring of animals is not required and utilization of fodder area can be used to grow crops for producing food for human consumption.
                    </p>
                    <a href="https://www.fieldking.com/blogs/agriculture-machinery-and-their-uses/" target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="wrapper3"></div>
            <div className="middle3-container">
                <div className="profile">
                    <div className="image-group">
                       <img src={images.modern7} alt="ns1" className="n1" />
                       <img className="n2" src={images.modern8} alt="ns2" />
                       <img className="n3" src={images.modern9} alt="ns3" />
                    </div>
                    
                    
                    <h2>Nitrogen Sensors</h2>
                    <p align="left">
                        Sensing technology applied to agriculture is based on the typical light reflectance curve for vegetation. N-Sensor measures light reflectance at specific wave bands related to the crop's chlorophyll content and biomass. It calculates the actual N-uptake of the crop. Optimum application rates are derived from the N-uptake data and sent to the controller of the variable rate spreader or sprayer, which will adjust fertiliser rates accordingly.
                    </p>
                    <p>
                        N-Sensor use advantages:
                        <ol>
                            <li>Bring the optimal fertiliser rate in every part of the field</li>
                            <li>Increase fertiliser efficiency</li>
                            <li>Decrease nitrogen residues in soils post harvest</li>
                            <li>Increase yield</li>
                            <li>Reduce harvesting time and cost</li>
                            <li>Reduce risk of nitrogen losses to the environment</li>
                        </ol>
                    </p>
                    <a href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2023.1228221/full" target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="wrapper4"></div>
            <div className="bar-container">
                <div className="profile">
                    <div className="skills">
                        <h2>Improvement Percentage</h2>
                        <div className="skill-row">
                            <h3>Without using modern farming technology:</h3>
                            <div className="skills">
                                <div className="details">
                                    <span>Rate</span>
                                    <span>68%</span>
                                </div>
                                <div className="bar">
                                    <div id="Rate-bar"></div>
                                </div>
                            </div>
                            <h3>Using modern Farming Technology: </h3>
                            <div className="details">
                                <span>New Rate</span>
                                <span>97%</span>
                            </div>
                            <div className="bar">
                                <div id="NR-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper5"></div>
            <div className="last-container">
                <div className="profile">
                    <p>
                       Get Your First SmartMavuno Smart Devices NOW and ENjoy the Value of Modern and Remote Farming!!:
                        <a className="last-btn" href="https://www.plugandplaytechcenter.com/insights/new-agriculture-technology-modern-farming" target="_blank" rel="noopener noreferrer">Click here</a>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ModernFarming;
