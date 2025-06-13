const ProfilePresenter = {
  init() {
    const form = document.getElementById('profile-form');
    const message = document.getElementById('profile-message');

    const user = JSON.parse(localStorage.getItem('userProfile')) || {};
    document.getElementById('firstName').value = user.firstName || '';
    document.getElementById('lastName').value = user.lastName || '';
    document.getElementById('email').value = localStorage.getItem('userEmail') || '';
    document.getElementById('phone').value = user.phone || '';
    document.getElementById('industry').value = user.industry || '';
    document.getElementById('location').value = user.location || '';

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const updatedProfile = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        industry: document.getElementById('industry').value,
        location: document.getElementById('location').value.trim()
      };

        localStorage.setItem('userFirstName', firstName);
        localStorage.setItem('userLastName', lastName);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userInterest', interest);
        localStorage.setItem('userLocation', location);
        message.innerHTML = '<p class="success">Profile updated successfully!</p>';
        if (typeof window.updateNavbarAfterLogin === 'function') {
            window.updateNavbarAfterLogin();
        }
    });
  }
};

export default ProfilePresenter;
