import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';

const body = {
  height: '600px',
  display: 'flex',
  alignItems: 'center',
};

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <Header />
      <div style={body}>
        <Routes>
          <Route path="/" element={<Login setUserName={setUserName} />} />
          <Route path="/dashboard" element={<PrivateRoute userName={userName} component={Dashboard} />} />
          <Route path="/projects" element={<PrivateRoute userName={userName} component={Projects} />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </div>
      {userName && <Sidebar />} {/* Conditionally render Sidebar */}
      <Footer />
    </div>
  );
};

export default App;