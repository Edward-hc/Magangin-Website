import '../styles/tailwind.css';
import '../styles/styles.css';
import '../styles/homepage.css';
import '../styles/search.css';
import '../styles/login.css';
import '../styles/register.css';
import App from './pages/app';
import swRegister from './registerSW';

const app = new App();

if (!window.location.hash) {
  window.location.hash = '#home';
}

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
