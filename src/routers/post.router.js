const express = require('express');
const middlewareToken = require('../middlewares/valitedToken');

const routers = express.Router();

const postController = require('../controller/post.controller');

routers.use(middlewareToken.tokenValidate);
routers.get('/', postController.getAllPost);
routers.get('/:id', postController.getById);

module.exports = routers;