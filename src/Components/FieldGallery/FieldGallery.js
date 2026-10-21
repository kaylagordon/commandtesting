import './FieldGallery.css';
import aerial from '../../assets/aerial-test-2.jpg';
import pumpDraft from '../../assets/hero-pump-testing.jpg';
import nightFlow from '../../assets/pump-night-flow.jpg';

const photos = [
  {
    src: aerial,
    alt: 'Aerial ladder extended over a fire station during on-site aerial device testing',
  },
  {
    src: pumpDraft,
    alt: 'Technician checking a flow meter and hose line during an annual fire pump test',
  },
  {
    src: nightFlow,
    alt: 'Water discharging from a hose during a nighttime fire pump flow test',
  },
];

const FieldGallery = () => {
  return (
    <section className="field-gallery" aria-label="Testing in the field">
      {photos.map((photo) => (
        <img key={photo.alt} src={photo.src} alt={photo.alt} loading="lazy" />
      ))}
    </section>
  );
};

export default FieldGallery;
