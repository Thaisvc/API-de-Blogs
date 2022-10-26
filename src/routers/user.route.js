const express = require('express');

const router = express.Router();
const middlewareToken = require('../middlewares/valitedToken');
 const UaerController = require('../controller/user.controller');

router.post('/', UaerController.createUser);
router.get('/', middlewareToken.tokenValidate, UaerController.searchAllUser);

module.exports = router;