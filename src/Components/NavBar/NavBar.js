import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ top, offerings, about, contact }) => {
  function handleBackClick(nav) {
    nav.current.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header className='header' ref={top}>
      <section className='contact-header'>
        <div className='contact-unit'>
          <h3>EMAIL US</h3>
          <p>info@commandtesting.com</p>
        </div>
        <div className='contact-unit'>
          <h3>CALL US</h3>
          <p>(614) 398-0120</p>
        </div>
      </section>
      <nav>
        <NavLink className='navlink' activeClassName='active-navlink' to='/whatwedo' onClick={() => { handleBackClick(offerings)}}>WHAT WE DO</NavLink>
        <NavLink className='navlink' activeClassName='active-navlink' to='/about' onClick={() => { handleBackClick(about)}}>ABOUT US</NavLink>
        <NavLink className='navlink' activeClassName='active-navlink' to='/contact' onClick={() => { handleBackClick(contact)}}>CONTACT US</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
