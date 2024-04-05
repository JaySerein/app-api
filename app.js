const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", require("./api/routes/authRoute"));

module.exports = app;
