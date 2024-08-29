import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const padding20 = {
  padding: '20px',
};

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <Header />
      <div style={padding20}>
        <Routes>
          <Route path="/" element={<Login setUserName={setUserName} />} />
          <Route path="/dashboard" element={<PrivateRoute userName={userName} component={Dashboard} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;