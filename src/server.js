const app1 = require("./app");
const sequelize = require("../src/config/connection");
const PORT = process.env.PORT || 3001;

// start the app
// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
  app1.listen(PORT, () => console.log("Now listening"));
});
