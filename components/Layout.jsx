//  layout of website js file
//  Vishva Patel 
//  301302055
//  28-09-2024
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.svg'

export default function Layout() {
  return (
    <>

      <div class="logo-container">
        <img src="../src/assets/logo.svg" alt="Logo" class="logo" />
      </div>
      
      <nav>

        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Project</Link> | <Link to="/services"> Services </Link> | <Link to="/contact">Contact</Link>
      </nav>

      <br></br>
      <br />
      <hr />
      
    </>

  );
}


