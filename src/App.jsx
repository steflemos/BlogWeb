import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IssuePage from './pages/IssuePage';
import Header from './components/Header';
import './App.css'; 

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/issue/:number" element={<IssuePage />} />
    </Routes>
  </div>
);

export default App;
