// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const sidebarStyle = {
        padding: '10px',
        backgroundColor: '#f4f4f4',
        height: '100vh',
        width: '15%',
        fontWeight: '500',
    };

    const linkStyle = {
        display: 'block',
        padding: '10px',
        textDecoration: 'none',
        color: '#000',
        marginBottom: '10px',
    };

    const hoverStyle = {
        ...linkStyle,
        backgroundColor: '#006ed7',
        color: 'white',
    };

    return (
        <div style={sidebarStyle}>
            <Link
                to="/dashboard"
                style={hoveredLink === 'dashboard' ? hoverStyle : linkStyle}
                onMouseEnter={() => setHoveredLink('dashboard')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Dashboard
            </Link>
            <Link
                to="/projects"
                style={hoveredLink === 'projects' ? hoverStyle : linkStyle}
                onMouseEnter={() => setHoveredLink('projects')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Projects
            </Link>
            <Link
                to="/workboard"
                style={hoveredLink === 'workboard' ? hoverStyle : linkStyle}
                onMouseEnter={() => setHoveredLink('workboard')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Workboard
            </Link>
            <Link
                to="/create-task"
                style={hoveredLink === 'create-task' ? hoverStyle : linkStyle}
                onMouseEnter={() => setHoveredLink('create-task')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Create Task
            </Link>
        </div>
    );
};

export default Sidebar;