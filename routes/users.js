var express = require('express');
var router = express.Router();
var loginController = require('../app/controller/loginController')
var passport = require('passport');
var initPassportLocal = require('../app/controller/passport');

//upload image
var connection = require('../config/db/db');
const upload = require('../app/middleware/multer');

//get find user by id from LoginServices
var userServices = require('../app/services/manageServices');

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
router.get('/manageMenu', function(req, res, next) {
    connection.query('SELECT * FROM food', function(err, rows) {
        if (!err) {
            res.render('upload', { layout: 'index', rows });
        }
    })

});

router.post('/manageMenu', upload.single('image'), function(req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
    var price = parseInt(req.body.price);
    var typeFood = req.body.type_food;
    var image = req.file.filename;
    connection.query('INSERT INTO FOOD (name, description, price, type, image) VALUES (?, ?, ?, ?, ?)', [name, description, price, typeFood, image], function(err, result) {
        if (!err) {
            res.redirect('/user/manageMenu');
        }
    })
});

router.get('/manageMenu/update/:id', function(req, res, next) {
    var id = parseInt(req.params.id)
    connection.query('SELECT * FROM food where id = ?', [id], function(err, rows) {
        if (!err) {
            res.render('updateFood', { layout: 'index', rows });
        }
    })
});

router.post('/manageMenu/update', upload.single('image'), function(req, res, next) {
    var id = parseInt(req.body.id);
    var name = req.body.name;
    var description = req.body.description;
    var price = parseInt(req.body.price);
    var type = req.body.type;
    var image;
    if (req.file) {
        image = req.file.filename;
        fs.unlinkSync(path.join(__dirname, `../upload/allfood/${req.body.imageOriginal}`));
    } else {
        image = req.body.imageOriginal;
    }

    connection.query('UPDATE food SET name = ?, description = ?,price = ? , image = ?, type = ? WHERE id= ?', [name, description, price, image, type, id],
        function(err, results) {
            if (!err) {
                res.redirect('/user/manageMenu')
            } else {
                console.log(err);
            }
        })
});


router.get('/manageMenu/delete/:id', function(req, res, err) {
    const user = userServices.findFoodById(req.params.id);
    var userImage;
    user.then(async function(result) {
        userImage = await result.image;
        try {
            fs.unlinkSync(path.join(__dirname, `../upload/allfood/${userImage}`));
        } catch (e) {
            console.log(e);
        }
    });

    connection.query('DELETE FROM food where id = ?', [req.params.id], function(err, results) {
        if (!err) {
            res.redirect('/user/manageMenu');
        } else {
            console.log(err);
        }
    })
});
module.exports = router;