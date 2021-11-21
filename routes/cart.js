var express = require('express');
var router = express.Router();
var Cart = require('../app/middleware/cart')

router.get('/', function(req, res, next) {
    res.render('cart', { user: req.user, layout: 'index' });
});

router.get('/update', function(req, res, next) {
    var productId = req.query.id;
    var quantity = req.query.quantity;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.update(productId, quantity);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/delete/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.delete(productId);
    req.session.cart = cart;
    res.redirect('/cart');
})

module.exports = router;