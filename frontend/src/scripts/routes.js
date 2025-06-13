import HomePage from './pages/home-page.js';
import SearchPage from './pages/search-page.js';
import LoginPage from './pages/login-page.js';
import RegisterPage from  './pages/register-page.js';
import PostJobPage from  './pages/postjob-page.js';
import ProfilePage from './pages/profile-page.js';

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
  '#postjob' : PostJobPage,
  'postjob' : PostJobPage,
  '#profile' : ProfilePage,
  'profile' : ProfilePage,
  // route lainnya
};

export default routes;