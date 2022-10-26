const express = require('express');

const Routers = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const categoriesRouter = require('./categories.router');

Routers.use('/login', loginRouter);
Routers.use('/user', userRouter);
Routers.use('/categories', categoriesRouter);

module.exports = Routers;