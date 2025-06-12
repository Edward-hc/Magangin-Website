import PostJobPresenter from '../presenters/postjobPresenter.js';

const PostJobPage = {
  async render() {
    return `
      <section class="postjob-container">
        <form id="post-job-form" class="postjob-form">
          <h2>Complete Profile</h2>

          <label>Company Name</label>
          <input type="text" id="companyName" required>

          <label>Job Name / Job Title</label>
          <input type="text" id="jobTitle" required>

          <label>Industry</label>
          <select id="industry" required>
            <option value="">Select Industry</option>
            <option value="tech">Tech</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>

          <label>Job Type</label>
          <select id="jobType" required>
            <option value="">Select Job Type</option>
            <option value="Internship">Internship</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-time">Part-time</option>
          </select>

          <label>Location</label>
          <input type="text" id="location" required>

          <label>Company Link</label>
          <input type="url" id="companyLink">

          <label>Job Salary / Month</label>
          <input type="text" id="salaryDisplay" required>

          <label>Job Description (Min. 75 Words)</label>
          <textarea id="description" rows="6" required></textarea>

          <button type="submit">Post Job</button>
          <div id="post-job-message"></div>
        </form>
      </section>
    `;
  },

  async afterRender() {
    PostJobPresenter.init();
  }
};

export default PostJobPage;
