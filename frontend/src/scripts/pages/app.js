import routes from '../routes';

class App {
  constructor() {
    this._content = document.querySelector('#mainContent');
  }

  async renderPage() {
    const hash = window.location.hash.slice(1).toLowerCase() || '/';
    const page = routes[hash];

    if (page) {
      this._content.innerHTML = await page.render();
      if (page.afterRender) await page.afterRender();

      // ✅ Scroll ke atas setelah render selesai
      window.scrollTo(0, 0);
    } else {
      this._content.innerHTML = '<p>Page not found</p>';
    }
  }
}

export default App;
