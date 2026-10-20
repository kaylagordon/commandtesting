/**
 * Google Business Profile reviews URL.
 *
 * PLACEHOLDER: a public Google listing for Command Testing was not found.
 * Replace this string with the profile's reviews URL (the Maps listing or
 * the "Write a review" link). This is the only place that URL is set.
 */
export const GOOGLE_REVIEWS_URL = 'GOOGLE_BUSINESS_PROFILE_URL_PLACEHOLDER';

export function isGoogleReviewsConfigured() {
  return /^https?:\/\//i.test(GOOGLE_REVIEWS_URL);
}
