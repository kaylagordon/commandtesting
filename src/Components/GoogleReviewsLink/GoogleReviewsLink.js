import './GoogleReviewsLink.css';
import { GOOGLE_REVIEWS_URL, isGoogleReviewsConfigured } from '../../googleReviews';

const GoogleReviewsLink = () => {
  const configured = isGoogleReviewsConfigured();

  return (
    <a
      className="google-reviews-link"
      href={configured ? GOOGLE_REVIEWS_URL : '#google-reviews'}
      {...(configured ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={configured ? undefined : (event) => event.preventDefault()}
    >
      Read or leave a Google review
    </a>
  );
};

export default GoogleReviewsLink;
