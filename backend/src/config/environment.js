const dotenv = require('dotenv')

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  dbConfig: {
    schema: process.env.DATABASE_SCHEMA || 'public',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'poc_maxxi_db',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    port: process.env.DATABASE_PORT || '5432',
    pool: {
      max: process.env.DATABASE_POOL_MAX || '5',
      min: process.env.DATABASE_POOL_MIN || '0',
      acquire: process.env.DATABASE_POOL_ACQUIRE || 10000,
      idle: process.env.DATABASE_POOL_IDLE || 60000,
      evict: process.env.DATABASE_POOL_EVICT || 1000
    }
  },
  appPort: process.env.APP_PORT,
  production: process.env.NODE_ENV === 'production',
  host: process.env.APPLICATION_HOSTNAME,
  nodeEnv: process.env.NODE_ENV,
}
