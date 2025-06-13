const {
  getJobsHandler,
  getJobByIdHandler,
  postJobHandler,
  updateJobHandler,
  deleteJobHandler,
} = require('./handler');

const routes = [
  // Get all jobs
  {
    method: 'GET',
    path: '/jobs',
    handler: getJobsHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  // Get single job by ID
  {
    method: 'GET',
    path: '/jobs/{id}',
    handler: getJobByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  // Create a new job
  {
    method: 'POST',
    path: '/jobs',
    handler: postJobHandler,
    options: {
      cors: {
        origin: ['*'],
      },
      payload: {
        maxBytes: 10 * 1024 * 1024, // 10MB
        parse: true,
        allow: 'application/json',
      },
    },
  },

  // Update job
  {
    method: 'PUT',
    path: '/jobs/{id}',
    handler: updateJobHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  // Delete job
  {
    method: 'DELETE',
    path: '/jobs/{id}',
    handler: deleteJobHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];

module.exports = routes;
