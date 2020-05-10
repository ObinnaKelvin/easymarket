import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Subscribe from './components/Subscribe';
import OurPromise from './components/OurPromise';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <DownloadApp />
      <HowItWorks />
      <OurPromise />
      <Subscribe/>
      <Footer />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
