// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import Workboard from './components/Workboard';
import CreateTask from './components/CreateTask';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
import ViewProject from './components/ViewProject';
import './App.css';
import withAuth from './components/withAuth';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = sessionStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {userName && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login setUserName={setUserName} />} />
            <Route path="/" element={<PrivateRoute userName={userName} component={Dashboard} />} />

            <Route path="/dashboard" element={<PrivateRoute userName={userName} component={withAuth(Dashboard)} />} />
            <Route path="/projects" element={<PrivateRoute userName={userName} component={withAuth(Projects)} />} />
            <Route path="/create-project" element={<PrivateRoute userName={userName} component={withAuth(CreateProject)} />} />
            <Route path="/projects/view-project" element={<PrivateRoute userName={userName} component={withAuth(ViewProject)} />} />
            <Route path="/workboard" element={<PrivateRoute userName={userName} component={withAuth(Workboard)} />} />
            {/* <Route path="/create-task" element={<CreateTask />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;