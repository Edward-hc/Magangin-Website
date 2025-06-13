const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  industry: { type: String, required: true },
  salaryRange: { type: String, required: false },
  salaryDisplay: { type: String, required: false },
  description: { type: String, required: true },
  image: { type: String, default: '/image/default-job.png' },
  logo: { type: String },
  bannerImage: { type: String },
  companyLink: { type: String }, // ✅ Tambahkan ini
  isRecommended: { type: Boolean, default: false },
  postedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', JobSchema, 'jobs');

module.exports = Job;
