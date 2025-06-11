import HomePage from './pages/home-page.js';
import SearchPage from './pages/search-page.js';

const routes = {
  '/': HomePage,
  '#home': HomePage,
  'home': HomePage,
  '#search': SearchPage,
  'search': SearchPage,
  // route lainnya
};

export default routes;