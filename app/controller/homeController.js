const foodServices = require("../services/foodServices");
const orderServices = require('../services/orderServices')

class HomeController {

    //[Get / to load home page]
    index(req, res, next) {
        var userJson;
        if (req.user) {
            userJson = JSON.parse(JSON.stringify(req.user));
        }

        foodServices.getAllFood().then(async function(rows) {
            try {
                orderServices.getFeedback().then(async function(results) {
                    try {
                        res.render('homepage', { title: 'Express', layout: 'main', user: userJson, rows, results });
                    } catch (err) {
                        console.log(err);
                    }
                });

            } catch (err) {
                console.log(err);
            }
        });
    }
    search(req, res, next) {
        var data = (req.params.data).replace('-', ' ');
        foodServices.search(data).then(async function(rows) {
            try {
                console.log(rows)
                res.render('searchResult', { layout: 'main', rows, user: req.user });
            } catch (err) {
                console.log(err);
            }
        });
    }


}

module.exports = new HomeController();