import './Home.css';
import hero from '../../assets/hero-pump-testing.jpg';

function Home({ myRef, top, contact, scrollTo }) {

  return (
    <main className="home" ref={ top }>
      <img
        className="hero-image"
        src={hero}
        alt="Technician checking a flow meter and hose line during an annual fire pump test"
        fetchPriority="high"
      />
      <div className="transparent">
        <section className="title-box">
          <h1>COMMAND</h1>
          <h2>FIRE APPARATUS TESTING</h2>
          <h3 ref={ myRef }>AERIAL, PUMP, &amp; GROUND LADDER TESTING</h3>
          <p className="hero-subtext">Based in Columbus, OH<br />Aerial and ground ladder testing for fire departments nationwide</p>
          <button className="hero-cta" onClick={() => { scrollTo(contact) }}>REQUEST A QUOTE</button>
        </section>
      </div>
    </main>
  );
}

export default Home;
