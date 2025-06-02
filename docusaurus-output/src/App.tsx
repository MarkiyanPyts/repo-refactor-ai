import React from 'react';
import Home from './pages/index';
import Pricing from './pages/pricing';
import Company from './pages/company';
import Login from './pages/login';

function App() {
  const [currentPage, setCurrentPage] = React.useState(() => {
    const path = window.location.pathname;
    if (path === '/pricing') return 'pricing';
    if (path === '/company') return 'company';
    if (path === '/login') return 'login';
    return 'home';
  });

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/pricing') setCurrentPage('pricing');
      else if (path === '/company') setCurrentPage('company');
      else if (path === '/login') setCurrentPage('login');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple navigation function
  const navigate = (page: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setCurrentPage(page);
  };

  // Make navigate function available globally
  React.useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  switch (currentPage) {
    case 'pricing':
      return <Pricing />;
    case 'company':
      return <Company />;
    case 'login':
      return <Login />;
    default:
      return <Home />;
  }
}

export default App;