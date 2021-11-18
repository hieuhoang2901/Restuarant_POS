const foodServices = require("../services/foodServices");
const fs = require('fs');
const path = require('path');
class menuController {
    //get all food
    listFood(req, res, next) {
        foodServices.getAllFood().then(async function(rows) {
            try {
                res.render('upload', { layout: 'index', rows });
            } catch (err) {
                console.log(err);
            }
        });
    }

    //add new Food
    addNewFood(req, res, next) {
        var name = req.body.name;
        var description = req.body.description;
        var price = parseInt(req.body.price);
        var typeFood = req.body.type_food;
        var image = req.file.filename;
        foodServices.addNewFood(name, description, price, image, typeFood).then(async function(rows) {
            try {
                res.redirect('/menu');
            } catch (err) {
                console.log(err);
            }
        });
    }


    //get information of Food to update
    getFood(req, res, next) {
        var id = parseInt(req.params.id);
        foodServices.getFood(id).then(async function(rows) {
            try {
                res.render('updateFood', { layout: 'index', rows });
            } catch (err) {
                console.log(err);
            }
        });
    };

    //update Food
    updateFood(req, res, next) {
        var id = parseInt(req.body.id);
        var name = req.body.name;
        var description = req.body.description;
        var price = parseInt(req.body.price);
        var type = req.body.type;
        var image;

        //delete image
        if (req.file) {
            image = req.file.filename;
            fs.unlinkSync(path.join(__dirname, `../../upload/allfood/${req.body.imageOriginal}`));
        } else {
            image = req.body.imageOriginal;
        }

        foodServices.updateFood(name, description, price, image, type, id).then(async function(rows) {
            try {
                res.redirect('/menu');
            } catch (err) {
                console.log(err);
            }
        });
    };

    //delete food
    deleteFood(req, res, next) {
        var id = req.params.id
        const user = foodServices.findFoodById(req.params.id);
        var userImage;
        user.then(async function(result) {
            userImage = await result.image;
            try {
                fs.unlinkSync(path.join(__dirname, `../../upload/allfood/${userImage}`));
            } catch (e) {
                console.log(e);
            }
        });

        foodServices.deleteFood(id).then(async function(rows) {
            try {
                res.redirect('/menu');
            } catch (err) {
                console.log(err);
            }
        });
    };
};

module.exports = new menuController();