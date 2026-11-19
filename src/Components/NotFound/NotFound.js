import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ServicePage/ServicePage.css';

function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page not found | Command Testing';
    let robots = document.head.querySelector('meta[name="robots"]');
    const created = !robots;
    const previous = robots ? robots.getAttribute('content') : null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex');
    return () => {
      document.title = previousTitle;
      if (created) robots.remove();
      else if (previous == null) robots.removeAttribute('content');
      else robots.setAttribute('content', previous);
    };
  }, []);

  return (
    <article className="service-page">
      <h1>Page not found</h1>
      <p className="service-lede">That address is not a page on this site.</p>
      <p className="service-crosslink"><Link to="/">Back to the homepage</Link></p>
    </article>
  );
}

export default NotFound;
