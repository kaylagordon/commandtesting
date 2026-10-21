import './WhatToExpect.css';

const steps = [
  {
    title: 'Schedule',
    text: 'Tell us the aerials, ground-ladder footage, and whether a pump test applies. We confirm the scope and a date.',
  },
  {
    title: 'On-site testing',
    text: 'We come to your station, or to the apparatus manufacturer for a pump test, and do the work there.',
  },
  {
    title: 'Report',
    text: 'You receive a written record of what was tested and what we found, for the department’s file.',
  },
  {
    title: 'Annual reminder',
    text: 'We note the test date and contact you before the next annual test is due.',
  },
];

const WhatToExpect = () => {
  return (
    <section className="expect" id="what-to-expect" aria-labelledby="expect-heading">
      <h2 id="expect-heading">What to expect</h2>
      <ol className="expect-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="expect-num" aria-hidden="true">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WhatToExpect;
