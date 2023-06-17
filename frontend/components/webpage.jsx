import React from 'react';
import './CSS/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './NavBar/Homepage.jsx';
import NavBar from './NavBar/NavBar.jsx';
import DocPage from './NavBar/DocTab/Documents.jsx';
import About from './NavBar/AboutUs.jsx';

const WebPage = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/docs' element={<DocPage />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  );
};

export default WebPage;
