import React from 'react';
import '../CSS/about.css';
import linkedin from './pictures/linkedin2.png';
import kai from './pictures/kai.jpeg';
import thad from './pictures/thad.jpeg';
import hunter from './pictures/hunter.jpeg';
import fab from './pictures/fab.jpeg';
import kevin from './pictures/kevin.jpg';

export default function About() {
  return (
    <>
      <div className='gridsystem'>
        <div className='box'>
          <img src={kai} className='headShot'></img>
          Kai Farrell
          <div className='links'>
            <a href='https://www.linkedin.com/in/kaifarrell/'>
              <img src={linkedin} className='linkedin-logo'></img>
            </a>
            <a href='https://github.com/farrellkai'>
              <i className='fa-brands fa-github github'></i>
            </a>
          </div>
        </div>
        <div className='box'>
          <img src={hunter} className='headShot'></img>
          Hunter Shaw
          <div className='links'>
            <a href='https://www.linkedin.com/in/hunter-shaw-39430a181/'>
              <img src={linkedin} className='linkedin-logo'></img>
            </a>
            <a href='https://github.com/HShaw215'>
              <i className='fa-brands fa-github github'></i>
            </a>
          </div>
        </div>
        <div className='box'>
          <img src={thad} className='headShot'></img>
          Thad White
          <div className='links'>
            <a href='https://www.linkedin.com/in/thad-white/'>
              <img src={linkedin} className='linkedin-logo'></img>
            </a>
            <a href='https://github.com/thadd225'>
              <i className='fa-brands fa-github github'></i>
            </a>
          </div>
        </div>
        <div className='box'>
          <img src={fab} className='headShot'></img>
          Fabrizzio Quintanilla
          <div className='links'>
            <a href='https://www.linkedin.com/in/fabrizzio-quintanilla-b58388244/'>
              <img src={linkedin} className='linkedin-logo'></img>
            </a>
            <a href='https://github.com/Fab3005'>
              <i className='fa-brands fa-github github'></i>
            </a>
          </div>
        </div>
        <div className='box'>
          <img src={kevin} className='headShot'></img>
          Kevin Fan
          <div className='links'>
            <a href='https://www.linkedin.com/in/kfan1/'>
              <img src={linkedin} className='linkedin-logo'></img>
            </a>
            <a href='https://github.com/kfan1'>
              <i className='fa-brands fa-github github'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
