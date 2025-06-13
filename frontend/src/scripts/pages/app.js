import routes from '../routes';

class App {
  constructor() {
    this._content = document.querySelector('#mainContent');
  }

  async renderPage() {
    const hash = window.location.hash.slice(1).toLowerCase(); // 'search'
    const page = routes[hash]; // cocokkan dengan 'search' di routes

    if (page && typeof page.render === 'function') {
      this._content.innerHTML = await page.render();
      if (typeof page.afterRender === 'function') {
        await page.afterRender();
      }
      window.scrollTo(0, 0);
    } else {
      this._content.innerHTML = '<p>Page not found</p>';
    }
  }
}

export default App;
