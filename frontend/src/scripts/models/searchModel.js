import JobModel from './jobModel.js';

const SearchModel = {
  async searchJobs({ keyword, location, jobType, industry, salary }) {
    const postedJobs = await JobModel.getAllJobs();
    console.log("Posted jobs from MongoDB:", postedJobs);

    // Normalisasi data dari MongoDB
    const normalizedPostedJobs = postedJobs.map((job, index) => ({
      id: job._id?.toString() || index + 1,
      title: job.title || 'No Title',
      company: job.company || 'Unknown Company',
      location: job.location || 'Unknown Location',
      jobType: job.jobType || 'Full-Time',
      industry: job.industry || '',
      salaryRange: (job.salaryRange || 'medium').toLowerCase(),
      salaryDisplay: job.salaryDisplay || 'IDR 5 - 6 M',
      image: job.image || '/image/default.png',
      logo: job.logo || '/image/default-logo.png',
      bannerImage: job.bannerImage || '/image/default-banner.png',
      companyLink: job.companyLink || '#',
      description: job.description || '',
      isRecommended: job.isRecommended ?? true,
    }));

    const allEmpty = !keyword && !location && !jobType && !industry && !salary;

    if (allEmpty) {
      return normalizedPostedJobs.filter(job => job.isRecommended);
    }

    const filtered = normalizedPostedJobs.filter(job => {
      const keywordMatch = keyword
        ? job.title.toLowerCase().includes(keyword.toLowerCase()) ||
          job.company.toLowerCase().includes(keyword.toLowerCase())
        : true;

      const locationMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const jobTypeMatch = jobType
        ? job.jobType.toLowerCase().replace('-', '') === jobType.toLowerCase().replace('-', '')
        : true;

      const industryMatch = industry
        ? job.industry.toLowerCase() === industry.toLowerCase()
        : true;

      const salaryMatch = salary
        ? job.salaryRange.toLowerCase() === salary.toLowerCase()
        : true;

      return (
        keywordMatch &&
        locationMatch &&
        jobTypeMatch &&
        industryMatch &&
        salaryMatch
      );
    });

    return filtered;
  }
};

export default SearchModel;
