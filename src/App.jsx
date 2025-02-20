import React, { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { AboutUs } from './components/aboutUs';
import { Services } from './components/services';
// import { Gallery } from './components/gallery';
// import { Testimonials } from './components/testimonials';
import { Faqs } from './components/faqs';
import { Booking } from './components/booking';
// import { Team } from './components/team';
import { Contact } from './components/contact';
import { NotFound } from './components/notFound';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const url = window.location.href;
  const localhost = 'http://localhost:3000/';
  const website = 'https://www.allureguardianagency.com/';

  const myUrlList = [
    localhost,
    localhost + '#page-top',
    localhost + '#features',
    localhost + '#about_us',
    localhost + '#services',
    // localhost + '#gallery',
    localhost + '#faqs',
    localhost + '#booking',
    // localhost + '#team',
    localhost + '#contact',
    website,
    website + '#page-top',
    website + '#features',
    website + '#about_us',
    website + '#services',
    // website + '#gallery',
    website + '#faqs',
    website + '#booking',
    // website + '#team',
    website + '#contact',
  ];

  const exists = myUrlList.includes(url);

  if (exists) {
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <AboutUs data={landingPageData.AboutUs} />
        <Services data={landingPageData.Services} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Faqs data={landingPageData.Faqs} />
        <Booking />
        {/* <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
      </div>
    );
  }
  return <NotFound data={landingPageData.NotFound} />;
};

export default App;
