var express = require('express');
var router = express.Router();
var async = require('async');
var connection = require('../config/db/db')

router.get('/', function(req, res, next) {

    /*querry -----------------------*/
    if (req.user.role == 'Customer') {
        connection.query('SELECT * FROM orders WHERE userID = ? ORDER BY orderID DESC', [req.user.id], function(err, rows) {
            var array = [];
            rows.forEach(element => {
                array.push(element.orderID)
            });
            connection.query('SELECT * FROM listitemorder WHERE orderID IN (?)', ([array]), function(err, results) {
                rows.forEach(element => {
                    let arr = [];
                    results.forEach(ele => {
                        if (element.orderID == ele.orderID) {
                            let eleT = JSON.parse(JSON.stringify(ele));
                            arr.push(eleT);
                        }
                        element['items'] = arr;
                    })
                });

                res.render('order/manageOrder', { layout: 'main_ver1', user: req.user, rows });

            });

        });
    } else if (req.user.role == 'Admin') {
        connection.query('SELECT * FROM orders ORDER BY orderID DESC', function(err, rows) {

            connection.query('SELECT * FROM listitemorder', function(err, results) {
                rows.forEach(element => {
                    let arr = [];
                    results.forEach(ele => {
                        if (element.orderID == ele.orderID) {
                            let eleT = JSON.parse(JSON.stringify(ele));
                            arr.push(eleT);
                        }
                        element['items'] = arr;
                    })
                });

                res.render('order/manageOrder', { layout: 'main_ver1', user: req.user, rows });

            });

        });
    } else if (req.user.role == 'Clerk' || req.user.role == 'Chef') {
        connection.query('SELECT * FROM orders WHERE orderStatus = "preparing"', function(err, rows) {

            connection.query('SELECT * FROM listitemorder', function(err, results) {
                rows.forEach(element => {
                    let arr = [];
                    results.forEach(ele => {
                        if (element.orderID == ele.orderID) {
                            let eleT = JSON.parse(JSON.stringify(ele));
                            arr.push(eleT);
                        }
                        element['items'] = arr;
                    })
                });

                res.render('order/manageOrderforClerk', { layout: 'main_ver_clerk', user: req.user, rows });

            });

        });
    }
    /*querry -----------------------*/
});


router.get('/:id', function(req, res, next) {
    orderID = req.params.id;
    connection.query('UPDATE orders SET orderStatus = "complete" WHERE orderID = ?', [orderID], function(err, rows) {
        if (err) {
            console.log(this.sql);
            console.log(err);
        }
        res.redirect('/manageOrder');
    });

});

module.exports = router;