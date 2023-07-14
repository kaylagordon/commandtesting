import './Home.css';

function Home({ myRef, top }) {

  return (
    <main className="home" ref={ top }>
      <div className="transparent">
        <section className="title-box">
          <h1>COMMAND</h1>
          <h2>FIRE APPARATUS TESTING</h2>
          <h3 ref={ myRef }>AERIAL, PUMP, & GROUND LADDER TESTING</h3>
        </section>
      </div>
    </main>
  );
}

export default Home;
