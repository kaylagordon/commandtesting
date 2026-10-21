/**
 * Google Business Profile "write a review" URL.
 * This is the only place that URL is set. Footer and testimonial links read it.
 */
export const GOOGLE_REVIEWS_URL = 'https://g.page/r/CSBGSkR0niSxECE/review';

export function isGoogleReviewsConfigured() {
  return /^https?:\/\//i.test(GOOGLE_REVIEWS_URL);
}
