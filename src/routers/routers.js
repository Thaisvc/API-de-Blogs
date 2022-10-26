const express = require('express');

const Routers = express.Router();

const loginRouter = require('./login.route');
const userLogin = require('./user.route');

Routers.use('/login', loginRouter);
Routers.use('/user', userLogin);

module.exports = Routers;