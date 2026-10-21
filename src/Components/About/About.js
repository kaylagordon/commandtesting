import './About.css';
import commandTruck from '../../assets/aerial-command-truck.jpg';
import logo from '../../assets/logo.png';

const About = ({ nav }) => {
  return (
    <div className="about" ref={nav}>
      <img
        src={commandTruck}
        className="about-photo"
        alt="Command Testing truck parked in front of a raised aerial ladder during on-site testing"
        loading="lazy"
      />
      <section className="half-page-section">
        <img src={logo} className="logo" alt="Command Testing logo" loading="lazy" />
        <h4>WHO WE ARE</h4>
        <p>We are based in Columbus, Ohio. Our owner, Cody Stallter, is an ASNT Level III in magnetic particle (MT), ultrasonic (UT), liquid penetrant (PT), and visual testing (VT). He brings more than 15 years in fire apparatus testing and non-destructive testing, and he is the only Level III on our team.</p>
        <br/>
        <p>Our inspections are performed by NDT Level II technicians with ASNT Level III oversight. We are ISO/IEC 17020 accredited. Firefighter safety comes first for us, and we hold our work to a standard fire departments can depend on.</p>
        <br/>
        <p>We test aerial devices and ground ladders for fire departments nationwide, from large city and county departments to smaller fleets. Fire pump testing is available locally in central Ohio and at apparatus manufacturers. Every department receives the same NFPA-compliant testing.</p>
      </section>
    </div>
  );
}

export default About;
