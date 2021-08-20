import './Footer.css';

const Footer = ({ nav, scrollTo }) => {

  return (
    <div className="footer">
      <button onClick={() => { scrollTo(nav) }}>Back to Top</button>
      <p>yelp link</p>
      <p>insta/fb</p>
    </div>
  );
}

export default Footer;
