import './Home.css';
import { useHistory } from 'react-router-dom';
import Photo from '../Photo/Photo';
import { PHOTOS } from '../../photos';

function Home({ myRef }) {
  const history = useHistory();
  const hero = PHOTOS.hero;

  return (
    <main className="home" id="top">
      <Photo
        className="hero-frame"
        imgClassName="hero-image"
        webp={hero.webp}
        src={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        fetchPriority="high"
      />
      <div className="transparent">
        <section className="title-box">
          <h1>COMMAND</h1>
          <h2>FIRE APPARATUS TESTING</h2>
          <h3 ref={ myRef }>AERIAL, PUMP, &amp; GROUND LADDER TESTING</h3>
          <p className="hero-subtext">Based in Columbus, OH<br />Aerial and ground ladder testing for fire departments nationwide</p>
          <button className="hero-cta" type="button" onClick={() => history.push({ pathname: '/', hash: '#contact' })}>REQUEST A QUOTE</button>
        </section>
      </div>
    </main>
  );
}

export default Home;
