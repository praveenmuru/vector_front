import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <button className="hamburger-menu" onClick={toggleSidebar}>
                ☰
            </button>
            {isSidebarVisible && (
                <div className="sidebar">
                    <ul>
                        <li><Link to="Dashboard.js">Dashboard</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;