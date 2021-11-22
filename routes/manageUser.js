var express = require('express');
var router = express.Router();

var manageUserController = require('../app/controller/manageUserController');
const upload = require('../app/middleware/multer');

router.get('/', manageUserController.listUser);
router.post('/', manageUserController.addNewUser);
router.get('/update/:id', manageUserController.getUser);
router.post('/update', manageUserController.updateUser);
router.get('/delete/:id', manageUserController.deleteUser);


module.exports = router;