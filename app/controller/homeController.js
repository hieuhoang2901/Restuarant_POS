const foodServices = require("../services/foodServices");


class HomeController {

    //[Get / to load home page]
    index(req, res, next) {
        foodServices.getAllFood().then(async function(rows) {
            try {
                res.render('homepage', { title: 'Express', layout: 'main', user: req.user, rows });
            } catch (err) {
                console.log(err);
            }
        });
    }


}

module.exports = new HomeController();