const express = require('express');

const router = express.Router();
const middlewareToken = require('../middlewares/valitedToken');
 const UaerController = require('../controller/user.controller');

router.post('/', UaerController.createUser);
router.use(middlewareToken.tokenValidate);
router.get('/', UaerController.searchAllUser);
router.get('/:id', UaerController.searchById);

module.exports = router;