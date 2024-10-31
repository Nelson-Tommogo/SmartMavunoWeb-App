import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-black-removebg-preview.png';
import './topbar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <div className="navigation">
                    <NavLink to="/" className="nav-item">Home</NavLink>
                    <NavLink to="/market-insight" className="nav-item">Resources</NavLink>
                    <NavLink to="/more-insight" className="nav-item">More Insights</NavLink>
                    <NavLink to="/about" className="nav-item">About Us</NavLink>
                    <NavLink to="/contact" className="nav-item">Contact</NavLink>
                </div>
                <div className="auth-buttons">
                    <NavLink to="/signup" className="button">
                        <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                    </NavLink>
                    <NavLink to="/login" className="button">
                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
