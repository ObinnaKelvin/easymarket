import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Subscribe from './Subscribe';
import OurPromise from './OurPromise';
import DownloadApp from './DownloadApp';

function About() {
    return (
      <div className="About">
        <Hero />
        <DownloadApp />
        <HowItWorks />
        <OurPromise />
        <Subscribe/>
      </div>
    );
  }
  
  export default About;