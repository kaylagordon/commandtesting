import React, { forwardRef, useRef } from 'react';
import './App.css';
import Home from '../Home/Home.js';
import NavBar from '../NavBar/NavBar.js';
import About from '../About/About.js';
import WhatWeDo from '../WhatWeDo/WhatWeDo.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';

function App() {
  const top = useRef();
  const offerings = useRef();
  const about = useRef();
  const contact = useRef();

  function scrollTo(element) {
    element.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
        <NavBar offerings={ offerings } about={ about } contact={ contact } scrollTo={ scrollTo }/>
        <Home top={ top } />
        <WhatWeDo nav={ offerings } />
        <About nav={ about } />
        <Contact nav={ contact } />
        <Footer nav={ top } scrollTo={ scrollTo } />
    </div>
  );
}

export default App;
