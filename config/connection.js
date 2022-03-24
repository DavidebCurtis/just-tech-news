const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  null,
  {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
    port: 3306,
  }
);

module.exports = sequelize;
