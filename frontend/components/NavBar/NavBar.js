import React from "react";
import { useNavigate } from 'react-router-dom';
import "../CSS/Nav.css";
import wheel from "./pictures/wheel.png";


export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div>
          <button onClick={() => navigate('/')}>
            <img src={wheel} alt="logo" className="nav-logo"/>
          </button>
        </div>
        <div className="nav_actions">
          <button className="nav_links" onClick={() => navigate('/docs')}> Docs </button>
          <button className="nav_links" onClick={() => navigate('/about')}> About Us </button>
          <a
            className="nav_link nav_links"
            href="https://medium.com/the-programmer/kubernetes-fundamentals-for-absolute-beginners-architecture-components-1f7cda8ea536"
          >
            Blog
          </a>
          <a className="nav_link nav_links" href="https://github.com/oslabs-beta/ReKuberate">
            Github
          </a>
        </div>
      </nav>
    </>
  );
}
