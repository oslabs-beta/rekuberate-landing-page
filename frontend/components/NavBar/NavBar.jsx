import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Nav.css';
import wheel from './pictures/wheel.png';

export default function NavBar() {
  const navigate = useNavigate();

  const [colorTheme, setColorTheme] = useState('');

  if (window.matchMedia('(prefers-color-scheme: dark)').matches && colorTheme === null) {
    setColorTheme('dark');
  }

  document.querySelector('body').setAttribute('theme', colorTheme);

  return (
    <>
      <nav className='navbar'>
        <div>
          <button onClick={() => navigate('/')}>
            <img src={wheel} alt='logo' className='nav-logo' />
          </button>
        </div>
        <div className='nav_actions'>
          <button className='nav_links' onClick={() => navigate('/docs')}>
            Docs
          </button>
          <button className='nav_links' onClick={() => navigate('/about')}>
            About Us
          </button>
          <button
            className='nav_links'
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://medium.com/@hu.shaw215/introducing-rekuberate-an-all-new-way-to-visualize-k8s-environments-and-metrics-778876004d82';
            }}>
            Blog
          </button>
          <button
            className='nav_links'
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/oslabs-beta/ReKuberate';
            }}>
            Github
          </button>
          <button
            className='nav_links'
            onClick={() => {
              colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');
            }}>
            <i className='fa-solid fa-sun'></i>
          </button>
        </div>
      </nav>
    </>
  );
}
