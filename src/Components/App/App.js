import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Home from '../Home/Home.js';
import NavBar from '../NavBar/NavBar.js';
import About from '../About/About.js';
import WhatWeDo from '../WhatWeDo/WhatWeDo.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';
import Credentials from '../Credentials/Credentials.js';
import Testimonials from '../Testimonials/Testimonials.js';
import FieldGallery from '../FieldGallery/FieldGallery.js';
import WhatToExpect from '../WhatToExpect/WhatToExpect.js';
import Faq from '../Faq/Faq.js';
import QuoteCta from '../QuoteCta/QuoteCta.js';
import ServicePage from '../ServicePage/ServicePage.js';
import Seo from '../Seo/Seo.js';
import { PAGES } from '../../siteContent';

function HashScroller() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function HomePage({ myRef }) {
  return (
    <>
      <Seo title={PAGES.home.title} description={PAGES.home.description} path={PAGES.home.path} />
      <Home myRef={myRef} />
      <Credentials />
      <WhatWeDo />
      <FieldGallery />
      <QuoteCta />
      <About />
      <QuoteCta />
      <Testimonials />
      <QuoteCta />
      <WhatToExpect />
      <QuoteCta />
      <Faq />
      <QuoteCta />
      <Contact />
    </>
  );
}

function App() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div className="app">
      <HashScroller />
      <NavBar visible={myElementIsVisible} />
      <Switch>
        <Route exact path="/">
          <HomePage myRef={myRef} />
        </Route>
        <Route path="/aerial">
          <ServicePage id="aerial" />
        </Route>
        <Route path="/ground-ladders">
          <ServicePage id="ground" />
        </Route>
        <Route path="/pump">
          <ServicePage id="pump" />
        </Route>
        <Route path="/ndt">
          <ServicePage id="ndt" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
