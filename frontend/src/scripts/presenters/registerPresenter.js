import AuthModel from '../models/authModel.js';

const RegisterPresenter = {
  init() {
    const form = document.getElementById('register-form');
    const messageBox = document.getElementById('register-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      const result = AuthModel.register({ firstName, lastName, email, password });

      if (result.success) {
        localStorage.setItem('userFirstName', firstName);
        messageBox.innerHTML = '<p class="success">Account created! Redirecting...</p>';
        updateNavbarAfterLogin();
        setTimeout(() => window.location.hash = '#home', 1500);
      } else {
        messageBox.innerHTML = `<p class="error">${result.message}</p>`;
      }
    });
  }
};

export default RegisterPresenter;
