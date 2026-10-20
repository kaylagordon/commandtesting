import './Footer.css';
import backToTop from '../../assets/back_to_top.png';
import GoogleReviewsLink from '../GoogleReviewsLink/GoogleReviewsLink';

const Footer = ({ nav, scrollTo }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-name">COMMAND TESTING</p>
          <p>Based in Columbus, OH</p>
          <p>Aerial and ground ladder testing for fire departments nationwide</p>
          <p>Fire pump testing in central Ohio and at apparatus manufacturers</p>
        </div>
        <div className="footer-contact">
          <p><a href="tel:+16143980120">(614) 398-0120</a></p>
          <p><a href="mailto:info@commandtesting.com">info@commandtesting.com</a></p>
          <p><GoogleReviewsLink /></p>
        </div>
      </div>
      <p className="footer-copyright">&copy; {year} Command Testing. All rights reserved.</p>
      <button id="back-to-top-btn" onClick={() => { scrollTo(nav) }} aria-label="Back to top">
        <img src={backToTop} alt="" />
      </button>
    </footer>
  );
}

export default Footer;
