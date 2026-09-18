import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Home from '../Home/Home.js';
import NavBar from '../NavBar/NavBar.js';
import About from '../About/About.js';
import WhatWeDo from '../WhatWeDo/WhatWeDo.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';
import Credentials from '../Credentials/Credentials.js';

function App() {
  const top = useRef();
  const offerings = useRef();
  const about = useRef();
  const contact = useRef();

  function scrollTo(element) {
    element.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" })
  }

  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div className="app">
        <NavBar visible={ myElementIsVisible } offerings={ offerings } about={ about } contact={ contact } scrollTo={ scrollTo }/>
        <Home myRef={ myRef } top={ top } contact={ contact } scrollTo={ scrollTo } />
        <Credentials />
        <WhatWeDo nav={ offerings } />
        <About nav={ about } />
        <Contact nav={ contact } />
        <Footer nav={ top } scrollTo={ scrollTo } />
    </div>
  );
}

export default App;
