const JobModel = {
  getAllJobs() {
    const data = localStorage.getItem('postedJobs');
    return data ? JSON.parse(data) : [];
  },

  addJob(job) {
    const jobs = this.getAllJobs();
    jobs.push(job);
    localStorage.setItem('postedJobs', JSON.stringify(jobs));
  }
};

export default JobModel;
