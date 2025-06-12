import HomePage from './pages/home-page.js';
import SearchPage from './pages/search-page.js';
import LoginPage from './pages/login-page.js';
import RegisterPage from  './pages/register-page.js';

const routes = {
  '/': HomePage,
  '#home': HomePage,
  'home': HomePage,
  '#search': SearchPage,
  'search': SearchPage,
  '#login': LoginPage,
  'login' : LoginPage,
  '#register': RegisterPage,
  'register': RegisterPage,
  // route lainnya
};

export default routes;