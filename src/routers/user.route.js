const express = require('express');

const router = express.Router();

 const UaerController = require('../controller/user.controller');

router.post('/', UaerController.createUser);

module.exports = router;