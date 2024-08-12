import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
       <Home /> 
      <Register />
       <Login /> *
      <Footer />
    </div>
  );
};

export default App;
