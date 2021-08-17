import './WhatWeDo.css';

function WhatWeDo() {
  return (
    <div className="WhatWeDo">
      <img src="logo" className="logo" alt="" />
      <h4>WHAT WE DO</h4>
      <section className="offer-bundle">
        <img src="TBD" className="offer-image" alt="" />
        <h5>Aerial Testing</h5>
        <p className="offer-text">Aerial certification testing in accordance with NFPA 1901 & 1911</p>
      </section>
      <section className="offer-bundle">
        <img src="TBD" className="offer-image" alt="" />
        <h5>Ground Ladder Testing</h5>
        <p className="offer-text">Ground ladder testing in accordance with NFPA 1932</p>
      </section>
      <section className="offer-bundle">
      <img src="TBD" className="offer-image" alt="" />
      <h5>Pump Testing</h5>
      <p className="offer-text">Pump testing in accordance with NFPA 1901 & 1911</p>
      </section>
      <section className="offer-bundle">
        <img src="TBD" className="offer-image" alt="" />
        <h5>Non-destructive Testing</h5>
        <p className="offer-text">Liquid Penetrant, Magnetic Particle, Ultrasonic, and Visual Testing.  Consulting and NDT Level III services.</p>
      </section>
    </div>
  );
}

// For the what we offer page, I’m thinking 4 pictures.  Aerial bucket picture, ground ladder picture, pump testing picture and then the welds picture.

export default WhatWeDo;
