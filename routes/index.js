var express = require('express');
var router = express.Router();
var homeController = require('../app/controller/homeController');
var Cart = require('../app/middleware/cart')

var connection = require('../config/db/db');
/* GET home page. */
router.get('/', homeController.index);
// router.post('/', site_controller.redirect_to_search);
router.get('/search/:data', homeController.search);
var foodServices = require('../app/services/foodServices');



module.exports = router;