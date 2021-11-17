var express = require('express');
var router = express.Router();
var homeController = require('../app/controller/homeController');


var connection = require('../config/db/db');
/* GET home page. */
router.get('/', homeController.index);


module.exports = router;