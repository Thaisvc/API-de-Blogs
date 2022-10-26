const express = require('express');

const Routers = express.Router();

const loginRouter = require('./login.route');

Routers.use('/', loginRouter);

module.exports = Routers;