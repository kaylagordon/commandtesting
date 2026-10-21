import './About.css';
import Photo from '../Photo/Photo';
import { PHOTOS } from '../../photos';

const About = () => {
  const truck = PHOTOS.commandTruck;
  const logo = PHOTOS.logo;

  return (
    <div className="about" id="who-we-are">
      <Photo
        className="about-photo"
        imgClassName="about-photo-img"
        webp={truck.webp}
        src={truck.src}
        alt={truck.alt}
        width={truck.width}
        height={truck.height}
        loading="lazy"
      />
      <section className="half-page-section">
        <Photo
          className="logo"
          imgClassName="logo-img"
          webp={logo.webp}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          loading="lazy"
        />
        <h4>WHO WE ARE</h4>
        <p>We are based in Columbus, Ohio. Our owner, Cody Stallter, is an ASNT Level III in magnetic particle (MT), ultrasonic (UT), liquid penetrant (PT), and visual testing (VT). He brings more than 15 years in fire apparatus testing and non-destructive testing.</p>
        <br/>
        <p>Our inspections are performed by NDT Level II technicians with ASNT Level III oversight. We are ISO/IEC 17020 accredited. Firefighter safety comes first for us, and we hold our work to a standard fire departments can depend on.</p>
        <br/>
        <p>We test aerial devices and ground ladders for fire departments nationwide, from large city and county departments to smaller fleets. Fire pump testing is available locally in central Ohio and at apparatus manufacturers. Every department receives the same NFPA-compliant testing.</p>
      </section>
    </div>
  );
}

export default About;
