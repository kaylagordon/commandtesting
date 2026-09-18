import './WhatWeDo.css';
import logo from '../../assets/logo.png';
import aerial from '../../assets/aerial_bucket_square.jpg';
import ladder from '../../assets/ground_ladder_square.jpg';
import pump from '../../assets/pump_testing_square.jpg';
import weld from '../../assets/welds_square.jpg';

const WhatWeDo = ({ nav }) => {
  return (
    <div className="WhatWeDo" ref={nav}>
      <img src={logo} className="logo" alt="Command Testing logo" />
      <h4>WHAT WE DO</h4>
      <p className="service-area">Serving fire departments and municipalities nationwide</p>
      <section className="bundle-container">
        <section className="offer-bundle">
          <img src={aerial} className="offer-image" alt="Fire department aerial ladder truck bucket during annual aerial ladder testing" />
          <h5>Aerial Ladder Testing</h5>
          <p className="offer-text">Annual aerial device certification testing in accordance with NFPA 1900 & 1910, performed on-site at your station.</p>
        </section>
        <section className="offer-bundle">
          <img src={ladder} className="offer-image" alt="Ground ladders laid out for annual ground ladder testing" />
          <h5>Ground Ladder Testing</h5>
          <p className="offer-text">Annual ground ladder testing and certification in accordance with NFPA 1930.</p>
        </section>
        <section className="offer-bundle">
        <img src={pump} className="offer-image" alt="Fire engine pump truck during annual fire pump testing" />
        <h5>Fire Pump Testing</h5>
        <p className="offer-text">Apparatus fire pump testing in accordance with NFPA 1900 & 1910.</p>
        </section>
        <section className="offer-bundle">
          <img src={weld} className="offer-image" alt="Close-up of aerial device welds inspected during non-destructive testing" />
          <h5>Non-Destructive Testing</h5>
          <p className="offer-text">Liquid penetrant, magnetic particle, ultrasonic, and visual testing performed by ASNT Level II certified technicians.</p>
        </section>
      </section>
    </div>
  );
}

export default WhatWeDo;
