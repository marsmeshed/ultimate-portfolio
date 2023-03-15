import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from  "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email"
import myselfImage from '../assets/myself.JPG';
import resumePdf from '../assets/resume.pdf';
import "../styles/Home.css";

function Home() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  }

  const handleResumeClick = () => {
    window.open(resumePdf);
  }

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Maleaque!</h2>
        <div className="prompt"> 
          <p> An ambitious full-stack developer.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
        <div className="about-me-link" onClick={handleAboutClick}>
          <h3>About Me</h3>
        </div>
        {showAbout && (
          <div className="about-me">
            <img className="myself-image" src={myselfImage} alt="Myself" />
            <span>
              I'm an aspiring programmer from Southern California. With my young age, I'll have extra
              time to better understand and create diverse and complex programs
              that'll showcase my abilities. I've lived in a small town for a few years, 
              but plan to venture out for better connections regarding my career path.
            </span>
          </div>
        )}
        <div className="resume-link" onClick={handleResumeClick}>
          <h3>Resume</h3>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, Tailwind and more!
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB, SQL and more!
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              I primarily work in JavaScript, but learning different languages is most definitely a goal of mine.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;