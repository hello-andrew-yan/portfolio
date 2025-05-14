import { useState, useEffect, type JSX } from 'react';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

type PageKey = 'home' | 'about';

const Pages = () => {
  const [currentPage, setCurrentPage] = useState<PageKey>(() => {
    const savedPage = sessionStorage.getItem('currentPage');
    return (savedPage as PageKey) || 'home';
  });

  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const pages: Record<PageKey, JSX.Element> = {
    home: <Home />,
    about: <Projects />,
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>Projects</button>
      </nav>
      
      <div className="page-content">
        {pages[currentPage] || <div>Page not found</div>}
      </div>
    </div>
  );
};

export default Pages;