import './Footer.css';

const Footer = ({ nav }) => {
  function scrollToTop() {
    nav.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="Footer">
      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default Footer;
