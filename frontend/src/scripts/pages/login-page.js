import LoginPresenter from '../presenters/loginPresenter.js';

const LoginPage = {
  async render() {
    return `
      <div class="auth-login-container">
      <img src="/image/auth-bg.png" class="background-img1" alt="background" />
        <div class="auth-login-box">
          <div class="auth-header">
            <img src="/image/magangin-logo.png" class="logo-auth" alt="Magangin Logo" />
          </div>
          <h2>Sign in</h2>
          <form id="login-form">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="example@gmail.com" required />

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />

            <div class="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Sign in</button>
            <p class="switch-auth">Don't have an account? <a href="#register"><strong>Create Now</strong></a></p>
          </form>
          <div id="login-message"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    LoginPresenter.init();
  }
};

export default LoginPage;
