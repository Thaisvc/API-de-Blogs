const express = require('express');

const Routers = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');

Routers.use('/login', loginRouter);

Routers.use('/user', userRouter);

module.exports = Routers;