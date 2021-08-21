import './Footer.css';
import backToTop from '../../assets/back_to_top.png';

const Footer = ({ nav, scrollTo }) => {

  return (
    <div className="footer">
      <button id="back-to-top-btn" onClick={() => { scrollTo(nav) }}>
        <img src={backToTop} alt="back to top of page" />
      </button>
    </div>
  );
}

export default Footer;
