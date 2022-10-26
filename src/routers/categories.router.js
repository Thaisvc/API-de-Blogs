const express = require('express');
const middlewareToken = require('../middlewares/valitedToken');
const categoryController = require('../controller/categories.controller');

const router = express.Router();

router.use(middlewareToken.tokenValidate);

router.post('/', categoryController.addCategory);

module.exports = router;