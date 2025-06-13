const Job = require('../model/jobm.js');

const getAllJobs = async () => {
  return await Job.find({});
};

const addJob = async (jobData) => {
  console.log('Data yang dikirim ke MongoDB:', jobData);
  const job = new Job(jobData);
  const savedJob = await job.save();
  console.log('Hasil dari MongoDB:', savedJob);
  return savedJob;
};

const getJobById = async (id) => {
  return await Job.findById(id);
};

const updateJob = async (id, newData) => {
  return await Job.findByIdAndUpdate(id, newData, { new: true });
};

const deleteJob = async (id) => {
  const result = await Job.findByIdAndDelete(id);
  return result !== null;
};

module.exports = {
  getAllJobs,
  addJob,
  getJobById,
  updateJob,
  deleteJob,
};
