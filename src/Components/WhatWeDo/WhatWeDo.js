import './WhatWeDo.css';
import logo from '../../assets/logo.png';
import aerial from '../../assets/aerial-platform-basket.jpg';
import ladder from '../../assets/ground-ladder-test.jpg';
import pump from '../../assets/pump-panel.jpg';
import weld from '../../assets/ndt-welds.jpg';

const WhatWeDo = ({ nav }) => {
  return (
    <div className="WhatWeDo" ref={nav}>
      <img src={logo} className="logo" alt="Command Testing logo" loading="lazy" />
      <h4>WHAT WE DO</h4>
      <p className="service-area">Based in Columbus, OH<br />Aerial and ground ladder testing for fire departments nationwide</p>
      <section className="bundle-container">
        <section className="offer-bundle">
          <img src={aerial} className="offer-image" alt="Aerial platform basket raised beside a fire station during aerial device testing" loading="lazy" />
          <h5>Aerial Ladder Testing</h5>
          <p className="offer-text">Annual aerial device certification testing in accordance with NFPA 1900 and NFPA 1910 (formerly NFPA 1911), performed on-site for fire departments nationwide.</p>
        </section>
        <section className="offer-bundle">
          <img src={ladder} className="offer-image" alt="Ground ladder on a test rack with a gauge during annual ladder testing" loading="lazy" />
          <h5>Ground Ladder Testing</h5>
          <p className="offer-text">Annual ground ladder testing and certification in accordance with NFPA 1930 (formerly NFPA 1932), for fire departments nationwide.</p>
        </section>
        <section className="offer-bundle">
        <img src={pump} className="offer-image" alt="Fire apparatus pump panel with gauges and valves during pump testing" loading="lazy" />
        <h5>Fire Pump Testing</h5>
        <p className="offer-text">Apparatus fire pump testing in accordance with NFPA 1900 and NFPA 1910 (formerly NFPA 1911), offered locally in central Ohio and at apparatus manufacturers.</p>
        </section>
        <section className="offer-bundle">
          <img src={weld} className="offer-image" alt="Structural weld marked with layout lines for nondestructive testing" loading="lazy" />
          <h5>Non-Destructive Testing</h5>
          <p className="offer-text">Liquid penetrant, magnetic particle, ultrasonic, and visual testing performed by NDT Level II technicians with ASNT Level III oversight.</p>
        </section>
      </section>
    </div>
  );
}

export default WhatWeDo;
