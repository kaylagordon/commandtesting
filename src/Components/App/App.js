import './App.css';
import Home from '../Home/Home.js';
import NavBar from '../NavBar/NavBar.js';
import About from '../About/About.js';
import WhatWeDo from '../WhatWeDo/WhatWeDo.js';
import Contact from '../Contact/Contact.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/whatwedo'>
        <WhatWeDo />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </div>
  );
}

export default App;
