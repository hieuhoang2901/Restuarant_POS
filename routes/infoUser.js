var express = require('express');
var router = express.Router();

var infoUserController = require('../app/controller/infoUserController');
const upload = require('../app/middleware/multer');

router.get('/:id', infoUserController.getUser);
router.post('/:id', infoUserController.updateUser);

module.exports = router;