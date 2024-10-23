import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/MainContent/Dashboard/Dashboard';
import Wallet from './components/MainContent/Wallet/Wallet';
import Donation from './components/MainContent/Donations/Donation';
import ThankYou from './components/MainContent/ThankYou/ThankYou';
import ReachUs from './components/MainContent/ReachUs/ReachUs';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ResetConfirmation from './components/ResetConfirmation/ResetConfirmation';
import About from './components/About/About'; // Update path to About.js
import Contact from './components/Contact/Contact';
import ModernFarming from './components/ModernFarming/ModernFarming';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WorkShopPage from './components/workshops/workshop';
import ProjectsPage from './components/projects/project'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/reach-us" element={<ReachUs />} />
        <Route path="/about" element={<About />} /> {/* Route for About */}
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/modern-farming" element={<ModernFarming />} /> 
        <Route path="/workshops" element={<WorkShopPage />} /> 
        <Route path="/project" element={<ProjectsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
