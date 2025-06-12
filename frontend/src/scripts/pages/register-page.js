import RegisterPresenter from '../presenters/registerPresenter.js';

const RegisterPage = {
  async render() {
    return `
      <div class="auth-register-container">
      <img src="/image/auth-bg.png" class="background-img2" alt="background" />
        <div class="auth-register-box">
          <div class="auth-header">
            <img src="/image/magangin-logo.png" class="logo-auth" alt="Magangin Logo" />
          </div>
          <h2>Sign up</h2>
          <form id="register-form">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" placeholder="First name" required />

            <label for="lastName">Last name</label>
            <input type="text" id="lastName" placeholder="Last name" required />

            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="example@gmail.com" required />

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />

            <p class="terms-text">
              By creating an account here, I understand and agree to the
              <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
            </p>

            <button type="submit">Sign in</button>
            <p class="switch-auth">Already have an account? <a href="#login"><strong>Sign in</strong></a></p>
          </form>
          <div id="register-message"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    RegisterPresenter.init();
  }
};

export default RegisterPage;
