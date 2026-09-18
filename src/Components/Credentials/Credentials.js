import './Credentials.css';

const items = [
  'ISO/IEC 17020 Accredited',
  'ASNT Level III Certified',
  'NFPA 1900, 1910 & 1930 Compliant',
  '10+ Years Experience',
  'Nationwide Service'
];

const Credentials = () => {
  return (
    <div className="credentials-bar">
      {items.map((item, i) => (
        <span className="credential-item" key={item}>
          <svg className="credential-check" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7.5 13.5L3.5 9.5l1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4z" fill="currentColor" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  );
}

export default Credentials;
