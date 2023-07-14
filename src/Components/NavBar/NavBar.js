import './NavBar.css';

const NavBar = ({ offerings, about, contact, scrollTo }) => {

  return (
    <header className='header'>
      <section className='contact-header'>
        <div className='contact-unit left'>
          <h3>EMAIL US</h3>
          <p>info@commandtesting.com</p>
        </div>
        <div className='contact-unit right'>
          <h3>CALL US</h3>
          <p>(614) 398-0120</p>
        </div>
      </section>
      <nav>
        <p className="test">TEST</p>
        <button className='navlink hide-small' onClick={() => { scrollTo(offerings) }}>WHAT WE DO</button>
        <button className='navlink hide-small' onClick={() => { scrollTo(about) }}>WHO WE ARE</button>
        <button className='navlink' onClick={() => { scrollTo(contact) }}>REQUEST A QUOTE</button>
      </nav>
    </header>
  );
}

export default NavBar;
