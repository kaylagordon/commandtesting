import './WhatWeDo.css';
import { Link } from 'react-router-dom';
import Photo from '../Photo/Photo';
import { PHOTOS } from '../../photos';

const services = [
  {
    key: 'aerial',
    path: '/aerial',
    title: 'Aerial Ladder Testing',
    text: 'Annual aerial device certification testing in accordance with NFPA 1900 and NFPA 1910 (formerly NFPA 1911), performed on-site for fire departments nationwide.',
  },
  {
    key: 'ladder',
    path: '/ground-ladders',
    title: 'Ground Ladder Testing',
    text: 'Annual ground ladder testing and certification in accordance with NFPA 1930 (formerly NFPA 1932), for fire departments nationwide.',
  },
  {
    key: 'pump',
    path: '/pump',
    title: 'Fire Pump Testing',
    text: 'Apparatus fire pump testing in accordance with NFPA 1900 and NFPA 1910 (formerly NFPA 1911), offered locally in central Ohio and at apparatus manufacturers.',
  },
  {
    key: 'ndt',
    path: '/ndt',
    title: 'Non-Destructive Testing',
    text: 'Liquid penetrant, magnetic particle, ultrasonic, and visual testing performed by NDT Level II technicians with ASNT Level III oversight.',
  },
];

const WhatWeDo = () => {
  const logo = PHOTOS.logo;

  return (
    <div className="WhatWeDo" id="what-we-do">
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
      <h4>WHAT WE DO</h4>
      <p className="service-area">Based in Columbus, OH<br />Aerial and ground ladder testing for fire departments nationwide</p>
      <section className="bundle-container">
        {services.map((service) => {
          const photo = PHOTOS[service.key];
          return (
            <Link className="offer-bundle" to={service.path} key={service.path}>
              <Photo
                className="offer-image"
                imgClassName="offer-image-img"
                webp={photo.webp}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
              <h5>{service.title}</h5>
              <p className="offer-text">{service.text}</p>
              <span className="offer-more">Service details</span>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default WhatWeDo;
