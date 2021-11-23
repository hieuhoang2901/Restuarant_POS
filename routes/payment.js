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
    res.render('payment/bill', { user: req.user, layout: 'index' })
});

router.post('/cash', function(req, res, next) {
    var userName = req.user.name;
    var userID = req.user.id;
    var totalCost = req.session.cart.totalPrice;
    var orderStatus = 'Dang chuan bi';
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var items = cart.getItems();
    var list = [];
    var itemList = [];
    for (let i = 0; i < items.length; i++) {
        itemList.push([items[i].item.name, items[i].quantity]);
    }
    console.log(itemList)
        // orderServices.saveOrder(userName, userID, totalCost, orderStatus).then(async function(rows) {
        //     try {
        // rows.insertId
        //     } catch (err) {
        //         console.log(err);
        //     }
        // });

});

module.exports = router;