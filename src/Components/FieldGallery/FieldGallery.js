import './FieldGallery.css';
import aerial from '../../assets/aerial-test-2.jpg';
import ladder from '../../assets/ground-ladder-test.jpg';
import pumpDraft from '../../assets/hero-pump-testing.jpg';

const photos = [
  {
    src: aerial,
    alt: 'Aerial ladder extended over a fire station during on-site aerial device testing',
  },
  {
    src: ladder,
    alt: 'Ground ladder on a test rack with a gauge during annual ladder testing',
  },
  {
    src: pumpDraft,
    alt: 'Technician checking a flow meter and hose line during an annual fire pump test',
  },
];

const FieldGallery = () => {
  return (
    <section className="field-gallery" aria-label="Aerial, ground ladder, and pump testing">
      {photos.map((photo) => (
        <img key={photo.alt} src={photo.src} alt={photo.alt} loading="lazy" />
      ))}
    </section>
  );
};

export default FieldGallery;
