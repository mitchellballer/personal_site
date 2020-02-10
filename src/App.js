import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage.js';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <div>

        <NavBar />

      <Route name="home" exact path="/" component={HomePage} />

      <Footer />
      
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
