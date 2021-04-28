const environment = require('./environment')

const { dbConfig } = environment

module.exports = {
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false,
  dialectOptions: {
    logging: false,
    useUTC: false,
    dateStrings: true,
    typeCast: function (field, next) {
      if (field.type === 'DATETIME') {
        return field.string()
      }
      return next()
    }
  },
  // ssl: true,
  timezone: '+03:00',
  autoreconnect: true
}
