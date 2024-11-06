import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-black-removebg-preview.png';
import './topbar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="navigation">
                <img src={logo} alt="Logo" className="logo" />
                    <NavLink to="/" className="nav-item">Home</NavLink>
                    <NavLink to="/market-insight" className="nav-item">Resources</NavLink>
                    <NavLink to="/more-insight" className="nav-item">More Insights</NavLink>
                    <NavLink to="/about" className="nav-item">About Us</NavLink>
                    <NavLink to="/contact" className="nav-item">Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
