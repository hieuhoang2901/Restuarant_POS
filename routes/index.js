var express = require('express');
var router = express.Router();
var homeController = require('../app/controller/homeController');
var Cart = require('../app/middleware/cart')

var connection = require('../config/db/db');
/* GET home page. */
router.get('/', homeController.index);
var foodServices = require('../app/services/foodServices');



module.exports = router;