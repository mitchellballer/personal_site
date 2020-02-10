import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage.js';

function App() {
  return (

    <Router>
      <div>

      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="">About</Link></li>
        </ul>
      </header>

      <Route name="home" exact path="/" component={HomePage} />

      </div>
    
    </Router>
   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
