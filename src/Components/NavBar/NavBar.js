import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';
import Photo from '../Photo/Photo';
import { PHOTOS } from '../../photos';

const NavBar = ({ visible }) => {
  const history = useHistory();
  const logo = PHOTOS.logo;

  function goTo(id) {
    history.push({ pathname: '/', hash: '#' + id });
  }

  return (
    <header className='header'>
      <a className="mobile-call" href="tel:+16143980120">Call (614) 398-0120</a>
      <section className='contact-header'>
        <div className='contact-unit left'>
          <h3>EMAIL US</h3>
          <p><a href="mailto:info@commandtesting.com">info@commandtesting.com</a></p>
        </div>
        <Link to="/" className={visible ? 'hidden' : 'title'}>
          <p>COMMAND TESTING</p>
          <Photo
            className="title-logo"
            imgClassName="title-logo-img"
            webp={logo.webp}
            src={logo.src}
            alt="Command Testing"
            width={logo.width}
            height={logo.height}
            loading="lazy"
          />
        </Link>
        <div className='contact-unit right'>
          <h3>CALL US</h3>
          <p><a href="tel:+16143980120">(614) 398-0120</a></p>
        </div>
      </section>
      <nav>
        <button className='navlink' type="button" onClick={() => { goTo('what-we-do') }}>WHAT WE DO</button>
        <button className='navlink' type="button" onClick={() => { goTo('who-we-are') }}>WHO WE ARE</button>
        <button className='navlink navlink-cta' type="button" onClick={() => { goTo('contact') }}>REQUEST A QUOTE</button>
      </nav>
    </header>
  );
}

export default NavBar;
