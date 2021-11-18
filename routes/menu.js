var express = require('express');
var router = express.Router();

var menuController = require('../app/controller/menuController');
const upload = require('../app/middleware/multer');

router.get('/', menuController.listFood);
router.post('/', upload.single('image'), menuController.addNewFood);
router.get('/update/:id', menuController.getFood);
router.post('/update', upload.single('image'), menuController.updateFood);
router.get('/delete/:id', menuController.deleteFood);

module.exports = router;