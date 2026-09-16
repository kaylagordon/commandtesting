import './Footer.css';
import backToTop from '../../assets/back_to_top.png';
const Footer = ({ nav, scrollTo }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-name">COMMAND TESTING</p>
          <p>NFPA-compliant aerial, ground ladder, pump &amp; non-destructive testing</p>
          <p>Serving fire departments nationwide</p>
        </div>
        <div className="footer-contact">
          <p><a href="tel:+16143980120">(614) 398-0120</a></p>
          <p><a href="mailto:info@commandtesting.com">info@commandtesting.com</a></p>
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
