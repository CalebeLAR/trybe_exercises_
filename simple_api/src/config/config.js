const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'senha',
  database: process.env.MYSQL_DATABASE || 'simpleAPI',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.PORT || 3000,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};