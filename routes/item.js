var express = require('express');
var router = express.Router();

var foodServices = require('../app/services/foodServices');
var Cart = require('../app/middleware/cart')
router.get('/', function(req, res, next) {
    res.redirect('/')
});
router.get('/:id', function(req, res, next) {
    var productId = parseInt(req.params.id);
    foodServices.getFood(productId).then(async function(rows) {
        try {
            console.log(req.user)
            res.render('viewItem', { layout: 'main', rows, user: req.user });
        } catch (err) {
            console.log(err);
        }
    });
});

router.post('/:id', function(req, res, next) {
    var productId = parseInt(req.params.id);
    var quantity = parseInt(req.body.quantity);
    foodServices.getFood(productId).then(async function(rows) {
        try {
            var products = JSON.parse(JSON.stringify(rows));
            var cart = new Cart(req.session.cart ? req.session.cart : {});
            var product = products.filter(function(item) {
                return item.id == productId;
            });
            req.session.cart = cart;
            console.log(product[0])
            cart.add(product[0], productId, quantity);
            console.log(req.session.cart)

            res.redirect('/item/' + productId);
        } catch (err) {
            console.log(err);
        }
    });
});
module.exports = router;