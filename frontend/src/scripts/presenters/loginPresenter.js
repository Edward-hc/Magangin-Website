import AuthModel from '../models/authModel.js';

const LoginPresenter = {
  init() {
    const form = document.getElementById('login-form');
    const messageBox = document.getElementById('login-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      const result = AuthModel.login({ email, password });

      if (result.success) {
        
        localStorage.setItem('userFirstName', result.user.firstName);
        localStorage.setItem('userLastName', result.user.lastName); 
        localStorage.setItem('userEmail', result.user.email);
        messageBox.innerHTML = '<p class="success">Login successful!</p>';
        updateNavbarAfterLogin();
        window.location.hash = '#home';
      } else {
        messageBox.innerHTML = `<p class="error">${result.message}</p>`;
      }
    });
  }
};

export default LoginPresenter;
