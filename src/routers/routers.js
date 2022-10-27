const express = require('express');

const Routers = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const categoriesRouter = require('./categories.router');
const postRouter = require('./post.router');

Routers.use('/login', loginRouter);
Routers.use('/user', userRouter);
Routers.use('/categories', categoriesRouter);
Routers.use('/post', postRouter);

module.exports = Routers;