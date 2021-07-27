import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/whatwedo'>What We Do</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
    </div>
  );
}

export default NavBar;
