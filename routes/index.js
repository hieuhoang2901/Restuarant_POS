var express = require('express');
var router = express.Router();

var connection = require('../config/db/db');
/* GET home page. */
router.get('/', function(req, res, next) {
    var userJson;
    if (req.user) {
        userJson = JSON.parse(JSON.stringify(req.user));
    }
    connection.query('SELECT * FROM food', function(err, rows) {
        if (!err) {
            res.render('homepage', { title: 'Express', layout: 'main', user: userJson, rows });
        }
    });

});

module.exports = router;