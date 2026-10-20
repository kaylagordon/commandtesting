import './Testimonials.css';
import GoogleReviewsLink from '../GoogleReviewsLink/GoogleReviewsLink';

const quotes = [
  {
    text: 'I very much appreciate how well you both communicate and the outstanding service you have provided us. It would be my pleasure to recommend your agency for any department looking for a reputable and reliable testing company.',
    attribution: 'Fire Chief, Pennsylvania',
  },
  {
    text: "I cannot say enough about this company's reliability and consistent support of our business. We've worked together for many years, have developed a great working relationship, and I highly recommend them.",
    attribution: 'Production Manager, Apparatus Manufacturer, New York',
  },
  {
    text: 'I appreciate you taking the time to walk everything at an understandable pace and filling in all the gaps.',
    attribution: 'Technical Support Specialist, Apparatus Manufacturer, Ohio',
  },
  {
    text: 'It was great meeting and working with your technician, please schedule us for next year.',
    attribution: 'Fire Department, New York',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" aria-label="Testimonials">
      <h4>TESTIMONIALS</h4>
      <div className="testimonials-grid">
        {quotes.map((quote) => (
          <blockquote className="testimonial" key={quote.attribution}>
            <p>{quote.text}</p>
            <footer>
              <cite>{quote.attribution}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="testimonials-reviews">
        <GoogleReviewsLink />
      </p>
    </section>
  );
};

export default Testimonials;
