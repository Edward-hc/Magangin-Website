const {
  //isi nama routes
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/jobs',
    handler: {},
  },
  {
    method: 'GET',
    path: '/jobs',
    handler: {},
  },
  {
    method: 'GET',
    path: '/jobs/{jobId}',
    handler: {},
  },
  {
    method: 'PUT',
    path: '/jobs/{jobId}',
    handler: {},
  },
  {
    method: 'DELETE',
    path: '/jobs/{jobId}',
    handler: {},
  },
];

module.exports = routes;