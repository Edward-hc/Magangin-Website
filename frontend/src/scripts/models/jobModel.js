const API_URL = 'http://localhost:5000/jobs';

const JobModel = {
  async getAllJobs() {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log('API response:', result);

      // Sesuaikan return berdasarkan struktur aktual dari response
      return result.data?.jobs || result.jobs || result || [];
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
  },

  async addJob(jobData) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      const result = await response.json();
      return result.data || result;
    } catch (error) {
      console.error('Error adding job:', error);
      throw error;
    }
  }
};

export default JobModel; // ✅ ini yang penting
