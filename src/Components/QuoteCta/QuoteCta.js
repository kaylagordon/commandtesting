import { useHistory } from 'react-router-dom';
import './QuoteCta.css';

const QuoteCta = () => {
  const history = useHistory();

  return (
    <div className="quote-cta-row">
      <button
        type="button"
        className="quote-cta"
        onClick={() => history.push('/#contact')}
      >
        Request a Quote
      </button>
    </div>
  );
};

export default QuoteCta;
