//  project js file
//  Vishva Patel 
//  301302055
//  28-09-2024

import projectImage1 from '../src/assets/project1.png'; 
import projectImage2 from '../src/assets/project2.png';
import projectImage3 from '../src/assets/project3.png'; 

export default function Project() {
    return (
      <>

        <div className="projects">
      <h1>My Projects</h1>
      <div className="project-item">
        <h3>1) A learning Website </h3>
        <img src={projectImage1} alt="Project 1" height={"500cm"} width={"1000cm"} />
        <p>This website is made for devslopes youtube channel where people from non It background can learn coding.</p>
        <p>There is good use of HTML , CSS and Javascript</p>
        <h3>My Role : Web Developer</h3>
      </div>
      <hr></hr>
      <div className="project-item">
        <h3>2) A Calculator</h3>
        <img src={projectImage2} alt="Project 2" />
        <p>It is a Calculator which is both standard and scientific.</p>
        <h4>Some useful feautures it has are: </h4>
        <ul>
          <li>Dark mode button</li>
          <li>Option for Scientific</li>
          <li>a standard panel</li>
          <li>all the mathemtical functions</li>
        </ul>
        <p>It has been made using C# programming.</p>
        <h3>My role : Programmer</h3>
      </div>
      <div className="project-item">
        <img src={projectImage3} alt="Project 3" height="500cm" width={"700cm"} />
        <p>This is a Bug Smasher Game.</p>
        <p>You can click on Bug to catch bug and increase score.The more you score , it increases the bug speed</p>
        <a href="http://studentweb.cencol.ca/vpate536/assignment3/assignment03.html">Click here to Play it.</a>
        <h3>My role: Web Developer</h3>
      </div>
    </div>
      </>
    );
  }

