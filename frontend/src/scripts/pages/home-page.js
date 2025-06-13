import HomepagePresenter from '../presenters/homepagePresenter.js';

const HomePage = {
  async render() {
    return `
      <div id="main-content">
        
        <div class="new-here">
          <p>Step Into Your Future with Magangin. <a href="#login">New Here?</a></p>
        </div>
        
        <div class="get-started">
          <img src="/image/homepage.png" class="homepage1" />
          <img src="/image/medic.png" class="medic1" />
          <img src="/image/invest.png" class="invest1" />
          <img src="/image/laptop.png" class="laptop1" />
          <img src="/image/passion.png" class="passion1" />
          <button class="btn-get-started">
            Get Started
            <img src="/icons/arrow1.png" class="arrow-1" />
          </button>
        </div>
        <section id="top-searches"></section>
        
        <section class="action-boxes">
          <div class="signup-box">
            <img src="/image/logo9.png" class="logo9" />
            <img src="/image/logo8.png" class="logo8" />
            <img src="/image/logo7.png" class="logo7" />
            <button class="signup">Sign Up Now!</button>
          </div>
          <div class="postjob-box">
            <img src="/image/logo11.png" alt="Post Job" class="logo11" />
            <img src="/image/logo12.png" alt="Post Job" class="logo12" />
            <img src="/image/logo13.png" alt="Post Job" class="logo13" />
            <button class="postjob">Upload Job!</button>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    HomepagePresenter.init();
    
    const getStartedBtn = document.querySelector('.btn-get-started');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', () => {
        window.location.hash = '#search';
      });
    }

    const signUpBtn = document.querySelector('.signup');
    if (signUpBtn) {
      signUpBtn.addEventListener('click', () => {
        window.location.hash = '#register'; // arahkan ke halaman Sign Up
      });
    }

    const postJobBtn = document.querySelector('.postjob');
    if (postJobBtn) {
      postJobBtn.addEventListener('click', () => {
        window.location.hash = '#postjob'; // arahkan ke halaman Post Job
      });
    }
  }
};

export default HomePage;
