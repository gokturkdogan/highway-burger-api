// path: ./config/database.js
module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  return {
    connection: {
      client,
      connection: {
        connectionString: env('postgresql://highway_burger_db_user:4MrCDwN4SoHnOkMWMtpHq2PRhV090j6Q@dpg-d3j8bgpgv73c73bl9620-a/highway_burger_db'), // Render'dan aldığın Internal Database URL
        ssl: {
          rejectUnauthorized: false, // Render PostgreSQL için gerekli
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { 
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10) 
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};