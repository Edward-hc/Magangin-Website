const Hapi = require('@hapi/hapi');
const routes = require('./api/routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // agar bisa diakses dari frontend
      },
      payload: {
        maxBytes: 10485760, // 10MB (ganti sesuai kebutuhan)
      },
    },
  });

  const connectDB = require('./db/mongo').default;
  await connectDB();

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
