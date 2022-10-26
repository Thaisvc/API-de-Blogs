const express = require('express');

const router = express.Router();

const authController = require('../controller/authLogin.controller');

router.post('/login', authController.login);

module.exports = router;