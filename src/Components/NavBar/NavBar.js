import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className='header'>
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
        <NavLink className='navlink' activeClassName='active-navlink' to='/home'>HOME</NavLink>
        <NavLink className='navlink' activeClassName='active-navlink' to='/about'>ABOUT US</NavLink>
        <NavLink className='navlink' activeClassName='active-navlink' to='/whatwedo'>WHAT WE DO</NavLink>
        <NavLink className='navlink' activeClassName='active-navlink' to='/contact'>CONTACT US</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
