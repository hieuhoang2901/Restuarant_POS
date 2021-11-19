var express = require('express');
var router = express.Router();

var manegeUserController = require('../app/controller/manageUserController');
// const upload = require('../app/middleware/multer');

router.get('/', manegeUserController.listUser);


module.exports = router;