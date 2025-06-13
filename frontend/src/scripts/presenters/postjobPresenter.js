const PostJobPresenter = {
  init() {
    const form = document.getElementById('post-job-form');
    const message = document.getElementById('post-job-message');

    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };

    const setupImageUpload = (previewId, inputId) => {
      const preview = document.getElementById(previewId);
      const input = document.getElementById(inputId);

      preview.addEventListener('click', () => input.click());

      input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          preview.style.backgroundImage = `url(${reader.result})`;
          preview.textContent = '';
        };
        reader.readAsDataURL(file);
      });
    };

    // Inisialisasi preview upload
    setupImageUpload('logo-preview', 'logo-upload');
    setupImageUpload('banner-preview', 'banner-upload');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const logoFile = document.getElementById('logo-upload').files[0];
      const bannerFile = document.getElementById('banner-upload').files[0];
      const logoBase64 = logoFile ? await toBase64(logoFile) : '';
      const bannerBase64 = bannerFile ? await toBase64(bannerFile) : '';

      const newJob = {
        title: document.getElementById('jobTitle').value.trim(),
        company: document.getElementById('companyName').value.trim(),
        industry: document.getElementById('industry').value,
        jobType: document.getElementById('jobType').value,
        location: document.getElementById('location').value.trim(),
        salaryDisplay: document.getElementById('salaryDisplay').value.trim(),
        description: document.getElementById('description').value.trim(),
        companyLink: document.getElementById('companyLink').value.trim(),
        image: '/image/default-job.png',
        logo: logoBase64,
        bannerImage: bannerBase64,
        isRecommended: true
      };

      if (newJob.description.split(' ').length < 75) {
        message.innerHTML = `<p class="error">Description must be at least 75 words.</p>`;
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newJob)
        });

        if (!response.ok) {
          throw new Error('Failed to post job');
        }

        message.innerHTML = `<p class="success">Job posted successfully!</p>`;
        setTimeout(() => window.location.hash = '#search', 1000);
      } catch (error) {
        message.innerHTML = `<p class="error">${error.message}</p>`;
      }
    });
  }
};

export default PostJobPresenter;
