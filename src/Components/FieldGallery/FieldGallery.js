import './FieldGallery.css';
import Photo from '../Photo/Photo';
import { PHOTOS } from '../../photos';

const keys = ['aerialWide', 'ladder', 'pumpDraft'];

const FieldGallery = () => {
  return (
    <section className="field-gallery" aria-label="Aerial, ground ladder, and pump testing">
      {keys.map((key) => {
        const photo = PHOTOS[key];
        return (
          <Photo
            key={key}
            className={'field-photo field-photo-' + key}
            imgClassName="field-photo-img"
            webp={photo.webp}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
        );
      })}
    </section>
  );
};

export default FieldGallery;
