//  about js file
//  Vishva Patel 
//  301302055
//  28-09-2024
import React from 'react';
import profile from '../src/assets/PROFILE.jpg';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      
      <div className="about-content">
        <div className="about-left"> 
          <img src={profile} alt="My Profile" height={"500cm.."} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>My name is Vishva Patel</p>
            <p>I am a fresh web developer.My home country is India.</p>
           <p> Showing creativity is one of my hobbies which I use in my projects and life.</p>
          </div>

          <div className="skills"> 
            <h3>skills</h3>
            <div className="skill-item">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="skill-item">
              <p>React & JavaScript</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="skill-item">
              <p>C# Programming</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="skill-item">
              <p> PL/SQL </p>
              <hr style={{ width: "100%" }} />
            </div>
          </div>
          <a href="../src/assets/MyResume.pdf" download>Download My Resume</a>
        </div>
      </div>

      
    </div>
  );
};

export default About;
