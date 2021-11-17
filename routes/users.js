var express = require('express');
var router = express.Router();
var loginController = require('../app/controller/loginController')
var passport = require('passport');
var initPassportLocal = require('../app/controller/passport');

//upload image
var connection = require('../config/db/db');
const upload = require('../app/middleware/multer');

//get find user by id from LoginServices
var userServices = require('../app/services/foodServices');

const fs = require('fs');
const path = require('path');
var registerController = require('../app/controller/registerController');
const { none } = require('../app/middleware/multer');

// Init all passport
initPassportLocal();

router.get("/login", loginController.checkLoggedOut, loginController.getPageLogin);
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    successFlash: true,
    failureFlash: true
}));


router.get("/register", registerController.getPageRegister);
router.post("/register", registerController.createNewUser);
router.post("/logout", loginController.postLogOut);

module.exports = router;