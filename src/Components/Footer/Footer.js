import './Footer.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import GoogleReviewsLink from '../GoogleReviewsLink/GoogleReviewsLink';

const Footer = () => {
  const year = new Date().getFullYear();
  const history = useHistory();
  const location = useLocation();

  function backToTopClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.hash) history.replace(location.pathname);
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-name">COMMAND TESTING</p>
          <p>Based in Columbus, OH</p>
          <p>Aerial and ground ladder testing for fire departments nationwide</p>
          <p>Fire pump testing in central Ohio and at apparatus manufacturers</p>
        </div>
        <nav className="footer-links" aria-label="Services">
          <Link to="/aerial">Aerial ladder testing</Link>
          <Link to="/ground-ladders">Ground ladder testing</Link>
          <Link to="/pump">Fire pump testing</Link>
          <Link to="/ndt">Non-destructive testing</Link>
        </nav>
        <div className="footer-contact">
          <p><a href="tel:+16143980120">(614) 398-0120</a></p>
          <p><a href="mailto:info@commandtesting.com">info@commandtesting.com</a></p>
          <p><GoogleReviewsLink /></p>
        </div>
      </div>
      <p className="footer-copyright">&copy; {year} Command Testing. All rights reserved.</p>
      <button id="back-to-top-btn" type="button" onClick={backToTopClick} aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 14l6-6 6 6" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
