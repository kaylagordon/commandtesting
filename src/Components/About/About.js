import './About.css';
import pumpPanel from '../../assets/pump_panel1.jpg';
import logo from '../../assets/logo.png';
const About = ({ nav }) => {
  return (
    <div className="about" ref={nav}>
      <img src={pumpPanel} className="half-page-image" alt="Close-up of a fire apparatus pump panel gauges during Command Testing's NFPA pump testing" />
      <section className="half-page-section">
        <img src={logo} className="logo" alt="Command Testing logo" />
        <h4>WHO WE ARE</h4>
        <p>Owner, Cody Stallter, has over 10 years of experience in fire apparatus testing and non-destructive testing. He is an ASNT Level III in liquid penetrant, magnetic particle, ultrasonic, and visual testing. Having family in the fire protection services industry, firefighter safety is the highest importance for all personnel at Command.
        </p>
        <br/>
        <p>As a company, Command Testing strives to perform highest quality of work so that fire department personnel can depend on their life saving equipment — serving fire departments nationwide.</p>
      </section>
    </div>
  );
}
export default About;
