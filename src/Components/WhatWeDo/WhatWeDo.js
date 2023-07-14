import './WhatWeDo.css';
import logo from '../../assets/logo.png';
import aerial from '../../assets/aerial_bucket_square.jpg';
import ladder from '../../assets/ground_ladder_square.jpg';
import pump from '../../assets/pump_testing_square.jpg';
import weld from '../../assets/welds_square.jpg';

const WhatWeDo = ({ nav }) => {
  return (
    <div className="WhatWeDo" ref={nav}>
      <img src={logo} className="logo" alt="" />
      <h4>WHAT WE DO</h4>
      <section className="bundle-container">
        <section className="offer-bundle">
          <img src={aerial} className="offer-image" alt="" />
          <h5>Aerial Testing</h5>
          <p className="offer-text">Aerial certification testing in accordance with NFPA 1901 & 1911</p>
        </section>
        <section className="offer-bundle">
          <img src={ladder} className="offer-image" alt="" />
          <h5>Ground Ladder Testing</h5>
          <p className="offer-text">Ground ladder testing in accordance with NFPA 1932</p>
        </section>
        <section className="offer-bundle">
        <img src={pump} className="offer-image" alt="" />
        <h5>Pump Testing</h5>
        <p className="offer-text">Pump testing in accordance with NFPA 1901 & 1911</p>
        </section>
        <section className="offer-bundle">
          <img src={weld} className="offer-image" alt="" />
          <h5>Non-destructive Testing</h5>
          <p className="offer-text">Liquid Penetrant, Magnetic Particle, Ultrasonic, and Visual Testing.  Consulting and NDT Level III services.</p>
        </section>
      </section>
    </div>
  );
}

export default WhatWeDo;
