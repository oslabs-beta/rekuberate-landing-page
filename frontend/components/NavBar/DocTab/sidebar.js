import React from 'react';
import './sidebar.css';
export default function SideBar() {
  return (
    <>
      <div className='sidebar'>
        <h1 style={{ color: 'white' }}>Documentation</h1>
        <a href='#introduction'>Introduction</a>
        <a href='#install'>Installation</a>
        <a href='#about'>About</a>
      </div>
    </>
  );
}
