//  App js file
//  Vishva Patel 
//  301302055
//  28-09-2024
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import Contact from './contact'
import '../src/index.css';

const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;
