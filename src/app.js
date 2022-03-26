const express = require("express");
const routes = require("../src/routes");

let app = express(); // Compliant
app.disable("x-powered-by");

let helmet = require("helmet");
let app1 = express(); // Compliant
app1.use(helmet.hidePoweredBy());
app1.use(express.json());
app1.use(express.urlencoded({ extended: true }));

// turn on routes
app1.use(routes);

module.exports = app1;
