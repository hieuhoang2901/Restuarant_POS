const foodServices = require("../services/foodServices");


class HomeController {

    //[Get / to load home page]
    index(req, res, next) {
        var userJson;
        if (req.user) {
            userJson = JSON.parse(JSON.stringify(req.user));
        }

        foodServices.getAllFood().then(async function(rows) {
            try {
                res.render('homepage', { title: 'Express', layout: 'main', user: userJson, rows });
            } catch (err) {
                console.log(err);
            }
        });
    }


}

module.exports = new HomeController();