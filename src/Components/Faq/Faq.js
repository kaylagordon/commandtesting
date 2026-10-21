import './Faq.css';
import { FAQ } from '../../siteContent';

const Faq = () => {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">FAQ</h2>
      <div className="faq-list">
        {FAQ.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
