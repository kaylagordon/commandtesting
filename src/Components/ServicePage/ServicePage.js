import { Link } from 'react-router-dom';
import Seo from '../Seo/Seo';
import Photo from '../Photo/Photo';
import QuoteCta from '../QuoteCta/QuoteCta';
import { PAGES, SERVICES } from '../../siteContent';
import { PHOTOS } from '../../photos';
import './ServicePage.css';

const ServicePage = ({ id }) => {
  const page = PAGES[id];
  const service = SERVICES[id];
  const photo = PHOTOS[service.imageKey];

  return (
    <article className="service-page">
      <Seo title={page.title} description={page.description} path={page.path} />
      <p className="service-kicker">Based in Columbus, OH</p>
      <h1>{service.h1}</h1>
      <Photo
        className="service-photo"
        imgClassName="service-photo-img"
        webp={photo.webp}
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
      />
      <p className="service-lede">{service.lede}</p>
      {service.accredited ? <p className="service-accredited">ISO/IEC 17020 accredited</p> : null}
      <h2>What’s included</h2>
      <ul>
        {service.included.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h2>Standards</h2>
      <ul>
        {service.standards.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h2>What you receive</h2>
      <ul>
        {service.deliverables.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {id === 'aerial' ? <p className="service-crosslink">The five-year aerial examination is on the <Link to="/ndt">NDT page</Link>.</p> : null}
      <QuoteCta />
    </article>
  );
};

export default ServicePage;
