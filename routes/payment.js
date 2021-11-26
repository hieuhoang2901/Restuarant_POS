var express = require('express');
var router = express.Router();
var Cart = require('../app/middleware/cart')
var orderServices = require('../app/services/orderServices')
var listItemOrderServices = require('../app/services/listItemOrderService');
const cart = require('../app/middleware/cart');

router.get('/', function(req, res, next) {
    res.redirect('/cart');
});


router.get('/cash', function(req, res, next) {
    res.render('payment/cash', { user: req.user, layout: 'main', mode: 'cash' })
});

router.post('/cash', function(req, res, next) {
    var userName = req.user.name;
    var userID = req.user.id;
    var totalCost = req.session.cart.totalPrice;
    var orderStatus = 'preparing';
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var items = cart.getItems();

    orderServices.saveOrder(userName, userID, totalCost, orderStatus).then(async function(rows) {
        try {
            listItemOrderServices.saveListItem(rows.insertId, items).then(async function(rows) {
                try {
                    res.render('feedback/formFeedback', { layout: 'index', user: req.user })

                } catch (err) {
                    console.log(err);
                }
            })
        } catch (err) {
            console.log(err);
        }
    });

});


router.get('/online', function(req, res, next) {
    console.log(req.session.cart);
    res.render('payment/online', { layout: 'main', user: req.user, mode: 'online' });
});

router.post('/online', function(req, res, next) {
    var userName = req.user.name;
    var userID = req.user.id;
    var totalCost = req.session.cart.totalPrice;
    var orderStatus = 'preparing';
    var feedback = req.body.comment;
    console.log(req.body)
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var items = cart.getItems();

    orderServices.saveOrder(userName, userID, totalCost, orderStatus, feedback).then(async function(rows) {
        try {
            listItemOrderServices.saveListItem(rows.insertId, items).then(async function(rows) {
                try {
                    req.session.cart = {};
                    res.redirect('/');

                } catch (err) {
                    console.log(err);
                }
            })
        } catch (err) {
            console.log(err);
        }
    });
});

module.exports = router;