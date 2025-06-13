const JobService = require('../services/jobService');

const getJobsHandler = async (request, h) => {
  try {
    const jobs = await JobService.getAllJobs();
    return h.response(jobs).code(200); // langsung kirim array
  } catch (err) {
    console.error(err);
    return h.response({
      status: 'error',
      message: 'Gagal mengambil data jobs',
    }).code(500);
  }
};

const getJobByIdHandler = async (request, h) => {
  try {
    const { id } = request.params;
    const job = await JobService.getJobById(id);

    if (!job) {
      return h.response({
        status: 'fail',
        message: `Job dengan id ${id} tidak ditemukan`,
      }).code(404);
    }

    return h.response({
      status: 'success',
      data: { job },
    });
  } catch (err) {
    console.error(err);
    return h.response({
      status: 'error',
      message: 'Gagal mengambil data job',
    }).code(500);
  }
};

const postJobHandler = async (request, h) => {
  try {
    const {
        title, company, location, jobType, industry, salaryRange,
        description, salaryDisplay, image, logo, bannerImage, isRecommended,
        companyLink, 
    } = request.payload;

    if (!title || !company || !location || !jobType || !industry ||
         !description || !salaryDisplay || !image ||
        !logo || !bannerImage) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan job. Semua field wajib diisi.',
      }).code(400);
    }

    const timestamp = new Date().toISOString();
    const newJob = await JobService.addJob({
        title,
        company,
        location,
        jobType,
        industry,
        salaryRange: salaryRange || '',
        description,
        salaryDisplay: salaryDisplay || '',
        image: image || '/image/default-job.png',
        logo,
        bannerImage,
        companyLink: companyLink || '', 
        isRecommended: isRecommended || false,
        postedAt: timestamp,
        updatedAt: timestamp,
    });

    return h.response({
      status: 'success',
      message: 'Job berhasil ditambahkan',
      data: { jobId: newJob._id },
    }).code(201);
  } catch (err) {
    console.error(err);
    return h.response({
      status: 'error',
      message: 'Terjadi kesalahan saat menambahkan job',
    }).code(500);
  }
};

const updateJobHandler = async (request, h) => {
  try {
    const { id } = request.params;
    const {
        title, company, location, jobType, industry, salaryRange,
        description, salaryDisplay, image, logo, bannerImage, isRecommended,
        companyLink,
    } = request.payload;

    const updatedJob = await JobService.updateJob(id, {
        title,
        company,
        location,
        jobType,
        industry,
        salaryRange,
        description,
        salaryDisplay,
        image,
        logo,
        bannerImage,
        companyLink: companyLink || '', // ✅ tambahkan ini juga
        isRecommended: isRecommended || false,
        updatedAt: new Date().toISOString(),
    });

    if (!updatedJob) {
      return h.response({
        status: 'fail',
        message: `Job dengan id ${id} tidak ditemukan`,
      }).code(404);
    }

    return h.response({
      status: 'success',
      message: 'Job berhasil diperbarui',
      data: { job: updatedJob },
    });
  } catch (err) {
    console.error(err);
    return h.response({
      status: 'error',
      message: 'Gagal memperbarui job',
    }).code(500);
  }
};

const deleteJobHandler = async (request, h) => {
  try {
    const { id } = request.params;
    const isDeleted = await JobService.deleteJob(id);

    if (!isDeleted) {
      return h.response({
        status: 'fail',
        message: `Job dengan id ${id} tidak ditemukan`,
      }).code(404);
    }

    return h.response({
      status: 'success',
      message: 'Job berhasil dihapus',
    });
  } catch (err) {
    console.error(err);
    return h.response({
      status: 'error',
      message: 'Gagal menghapus job',
    }).code(500);
  }
};

module.exports = {
  getJobsHandler,
  getJobByIdHandler,
  postJobHandler,
  updateJobHandler,
  deleteJobHandler,
};
