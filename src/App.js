import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home";
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import Subscribe from './components/Subscribe';
// import OurPromise from './components/OurPromise';
// import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import About from './components/AboutUs/About';
import Contact from './components/ContactUs/Contact';

function App() {
  return (
      <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ContactUs" component={Contact} />
        <Footer />
        {/* <Route path="/" component={} />
        <Route path="/" component={} /> */}
      </Router>
  );
}

export default App;
