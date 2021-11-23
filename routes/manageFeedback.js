var express = require('express');
var router = express.Router();

var manageFeedbackController = require('../app/controller/manageFeedbackController');
// const upload = require('../app/middleware/multer');

router.get('/', manageFeedbackController.listFeedback);
// router.post('/', manageUserController.addNewUser);
// router.get('/update/:id', manageUserController.getUser);
// router.post('/update', manageUserController.updateUser);
// router.get('/delete/:id', manageUserController.deleteUser);


module.exports = router;