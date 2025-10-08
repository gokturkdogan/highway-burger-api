module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // Render için kritik
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
});