require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "local";
const config = require("./config");

// create connection to our db
if (process.env.NODE_ENV === "production") {
  var sequelize = new Sequelize(config[env].db_connection, config[env]);
} else if (process.env.NODE_ENV === "development") {
  console.log("DATABASE", config[env].database);
  console.log("username", config[env].username);
  console.log("password", config[env].password);
  var sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    {
      host: config[env].host,
      dialect: config[env].dialect,
      dialectOptions: {
        socketPath: process.env.MYSQL_SOCK
      },
      port: config[env].port
    }
  );
} else {
  var sequelize = new Sequelize(
    config.local.database,
    config.local.username,
    config.local.password,
    {
      host: config.local.host,
      dialect: config.local.dialect,
      port: config.local.port
    }
  );
}

module.exports = sequelize;
