import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Complete from './routes/Complete';
import FormComponent from './routes/Form';


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-4 bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-semibold text-white tracking-wider">AKTA</div>
          <div>
            <Link to="/" className="text-white hover:text-gray-300 px-4 transition-colors duration-300">Home</Link>
            <Link to="/AIPage" className="text-white hover:text-gray-300 px-4 transition-colors duration-300">AI Test</Link>
            <Link to="/form" className="text-white hover:text-gray-300 px-4 transition-colors duration-300">Form</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl mb-8 max-w-2xl text-center">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">Welcome to AKTA</h2>
          <p className="text-gray-600">
            This tool will guide you through a series of steps to gather essential information about your academic background.
            Fill in the details and proceed to get tailored insights and support.
          </p>
        </div>
        <Link
          to="/welcome"
          className="px-10 py-4 text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          BEGIN
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/complete"element={<Complete />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

