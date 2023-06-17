import React from "react";
import "../CSS/about.css";
import linkedin from "./pictures/linkedin2.png";
import githubLogo from "./pictures/githubLogo.png"
export default function About() {
  return (
    <>
      <div className="gridsystem">
        <div className="box">
          Kai Farrell
          <div className="links">
            <a href="https://www.linkedin.com/in/kaifarrell/">
            <img src={linkedin} className="linkedin-logo"></img>
          </a>
            <a href="https://github.com/farrellkai">
            <i classClass="fa-brands fa-github"></i>
              </a>
          </div>
        </div>
        <div className="box">
          Hunter Shaw
          <div className="links">
            <a href="https://www.linkedin.com/in/hunter-shaw-39430a181/">
            <img src={linkedin} className="linkedin-logo"></img>
          </a>
          <a href="https://github.com/HShaw215">
          <i classClass="fa-brands fa-github"></i>
          </a>
          </div>
          
        </div>
        <div className="box">
          Thad White
          <div className="links">
          <a href="https://www.linkedin.com/in/thad-white/">
            <img src={linkedin} className="linkedin-logo"></img>
            </a>
            <a href="https://github.com/thadd225">
            <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="box">
          Fabrizzio Quintanilla
          <div className="links">
            <a href="https://www.linkedin.com/in/fabrizzio-quintanilla-b58388244/">
            <img src={linkedin} className="linkedin-logo"></img>
            </a>
            <a href="https://github.com/Fab3005">
            <i className="fa-brands fa-github"></i>
            </a>
          </div>
         
        </div>
        <div className="box">
          Kevin Fan
          <div className="links">
            <a href="https://www.linkedin.com/in/kfan1/">
            <img src={linkedin} className="linkedin-logo"></img>
          </a>
          <a href="https://github.com/kfan1">
          <i className="fa-brands fa-github"></i>
          </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
