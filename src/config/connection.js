require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

// create connection to our db
if (process.env.NODE_ENV === "production") {
  var sequelize = new Sequelize(config.db_connection, config);
} else if (process.env.NODE_ENV === "development") {
  console.log("DATABASE", config.database);
  console.log("username", config.username);
  console.log("password", config.password);
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      dialectOptions: {
        socketPath: "/tmp/mysql.sock"
      },
      port: config.port
    }
  );
} else {
  console.log("DATABASE", config.database);
  console.log("username", config.username);
  console.log("password", config.password);
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      port: config.port
    }
  );
}

module.exports = sequelize;
