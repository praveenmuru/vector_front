// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Workboard from './components/Workboard';
import CreateTask from './components/CreateTask';
import Projects from './components/Projects'; // Import the Projects component
import CreateProject from './components/CreateProject'; // Import the CreateProject component
import './App.css'; // Import the global CSS file

const addTask = (task) => {
  // Define the addTask function
  console.log('Task added:', task);
};

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Login setUserName={setUserName} />} />
          <Route path="/dashboard" element={<PrivateRoute userName={userName} component={Dashboard} />} />
          <Route path="/projects" element={<PrivateRoute userName={userName} component={Projects} />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/workboard" element={<PrivateRoute userName={userName} component={Workboard} />} />
          <Route path="/create-task" element={<CreateTask addTask={addTask} />} />
        </Routes>
        {userName} {/* Conditionally render Sidebar */}

      </div>

      <Footer />
    </div>
  );
};

export default App;