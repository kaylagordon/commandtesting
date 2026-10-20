import './Credentials.css';

const items = [
  'ISO/IEC 17020 Accredited',
  'NDT Level II Technicians',
  'ASNT Level III Oversight',
  'NFPA 1900',
  'NFPA 1910 (formerly NFPA 1911)',
  'NFPA 1930 (formerly NFPA 1932)',
  '15+ Years Experience',
  'Based in Columbus, OH'
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
