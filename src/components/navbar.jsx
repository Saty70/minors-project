import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import '../static/navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">Ques Hai</a>
      <div className="menu-icon" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/services" className="nav-item">Services</a>
        <a href="/contact" className="nav-item">Contact</a>
      </div>
      <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn"><FaSearch /></button>
        </div>
    </nav>
  );
};

export default Navbar;
