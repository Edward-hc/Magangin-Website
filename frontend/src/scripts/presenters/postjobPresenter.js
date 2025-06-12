import JobModel from '../models/jobModel.js';

const PostJobPresenter = {
  init() {
    const form = document.getElementById('post-job-form');
    const message = document.getElementById('post-job-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newJob = {
        id: Date.now(),
        title: document.getElementById('jobTitle').value.trim(),
        company: document.getElementById('companyName').value.trim(),
        industry: document.getElementById('industry').value,
        jobType: document.getElementById('jobType').value,
        location: document.getElementById('location').value.trim(),
        salaryDisplay: document.getElementById('salaryDisplay').value.trim(),
        description: document.getElementById('description').value.trim(),
        image: '/image/default-job.png',
        logo: '',
        bannerImage: '',
        isRecommended: false
      };

      if (newJob.description.split(' ').length < 75) {
        message.innerHTML = `<p class="error">Description must be at least 75 words.</p>`;
        return;
      }

      JobModel.addJob(newJob);
      message.innerHTML = `<p class="success">Job posted successfully!</p>`;
      setTimeout(() => window.location.hash = '#search', 1000);
    });
  }
};

export default PostJobPresenter;
