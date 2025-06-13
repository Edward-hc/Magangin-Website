import ProfilePresenter from '../presenters/profilePresenter.js';

const ProfilePage = {
  async render() {
    const firstName = localStorage.getItem('userFirstName') || '';
    const lastName = localStorage.getItem('userLastName') || '';
    const email = localStorage.getItem('userEmail') || '';

    return `
      <section class="profile-container">
        <h2>My Profile</h2>
        <form id="profile-form" class="profile-form">
          <label>First Name</label>
          <input type="text" id="firstName" value="${firstName}" required />

          <label>Last Name</label>
          <input type="text" id="lastName" value="${lastName}" required />

          <label>Email</label>
          <input type="email" id="email" value="${email}" disabled />

          <label>Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />

          <label>Industry Interest</label>
          <select id="interest">
            <option value="">Select Industry</option>
            <option value="tech">Tech</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>

          <label>Location</label>
          <input type="text" id="location" placeholder="Enter your location" />

          <button type="submit">Save Profile</button>
          <div id="profile-message"></div>
        </form>
      </section>
    `;
  },

    async afterRender() {
        document.getElementById('firstName').value = localStorage.getItem('userFirstName') || '';
        document.getElementById('lastName').value = localStorage.getItem('userLastName') || '';
        document.getElementById('email').value = localStorage.getItem('userEmail') || '';
        document.getElementById('phone').value = localStorage.getItem('userPhone') || '';
        document.getElementById('interest').value = localStorage.getItem('userInterest') || '';
        document.getElementById('location').value = localStorage.getItem('userLocation') || '';

        const form = document.getElementById('profile-form');
        const message = document.getElementById('profile-message');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();

            localStorage.setItem('userFirstName', firstName);
            localStorage.setItem('userLastName', lastName);
            localStorage.setItem('userPhone', document.getElementById('phone').value);
            localStorage.setItem('userInterest', document.getElementById('interest').value);
            localStorage.setItem('userLocation', document.getElementById('location').value);

            message.innerHTML = '<p class="success">Profile saved!</p>';

            if (typeof updateNavbarAfterLogin === 'function') {
             updateNavbarAfterLogin();
            }
        });
    }
};

export default ProfilePage;
