// var validationResult = require('express-validator');
var loginService = require('../services/loginService');
var registerService = require('../services/registerService');
let getPageRegister = (req, res) => {
    return res.render("auth/register", {
        errors: req.flash("errors"),
        layout: 'index'
    });
};

let createNewUser = async(req, res) => {
    //validate required fields
    // let errorsArr = [];
    // let validationErrors = validationResult(req);
    // if (!validationErrors.isEmpty()) {
    //     let errors = Object.values(validationErrors.mapped());
    //     errors.forEach((item) => {
    //         errorsArr.push(item.msg);
    //     });
    //     req.flash("errors", errorsArr);
    //     return res.redirect("/register");
    // }

    //create a new user
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phoneNumber: req.body.phonenumber
    };
    try {
        await registerService.createNewUser(newUser);
        return res.redirect("/user/login");
    } catch (err) {
        req.flash("errors", err);
        console.log(err);
        return res.redirect("/user/register");
    }
};
module.exports = {
    getPageRegister: getPageRegister,
    createNewUser: createNewUser
};