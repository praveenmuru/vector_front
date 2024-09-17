// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
    // position: 'fixed',
    top: 0,
    left: 0,
    width: '20%',
    height: '100vh', // Changed to 100vh to fit the body
    backgroundColor: '#006ed7', // Same color as header and footer
    padding: '10px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    zIndex: '900', // Lower z-index than header and footer
    fontWeight: 'bold'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 0'
};

const Sidebar = () => {
    return (
        <div style={sidebarStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/workboard" style={linkStyle}>Workboard</Link>
            <Link to="/create-task" style={linkStyle}>Create Task</Link>
        </div>
    );
};

export default Sidebar;