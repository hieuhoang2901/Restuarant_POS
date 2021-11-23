const manageUserServices = require("../services/manageUserServices");
const fs = require('fs');
const path = require('path');
class manageUserController {
    listUser(req, res, next) {
        manageUserServices.getAllUser().then(async function(rows) {
            try {
                res.render('manageUser', { layout: 'index', rows });
            } catch (err) {
                console.log(err);
            }
        });
    }
    addNewUser(req, res, next) {
        //create a new user
        let newUser = {
            name: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword,
            address: req.body.userAddress,
            phoneNumber: req.body.userPhone,
            userRole: req.body.userRole
        };
        console.log(newUser)

        manageUserServices.addNewUser(newUser).then(async function(rows) {
            try {
                res.redirect('/manageUser');
            } catch (err) {
                console.log(err)
            }
        });
    }
    // get information of user to update
    getUser(req, res, next) {
        var id = parseInt(req.params.id);
        manageUserServices.getUser(id).then(async function(rows) {
            try {
                res.render('updateUser', { layout: 'index', rows });
            } catch (err) {
                console.log(err);
            }
        });
    };
    // update user
    updateUser(req, res, next) {
        let currentUser = {
            name: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword,
            address: req.body.userAddress,
            phoneNumber: req.body.userPhone,
            userRole: req.body.userRole,
            id: req.body.id
        };
        console.log(currentUser)
        manageUserServices.updateUser(currentUser).then(async function(rows) {
            try {
                res.redirect('/manageUser');
            } catch (err) {
                console.log(err);
            }
        });
    };
    //delete user
    deleteUser(req, res, next) {
        var id = req.params.id

        manageUserServices.deleteUser(id).then(async function(rows) {
            try {
                res.redirect('/manageUser');
            } catch (err) {
                console.log(err);
            }
        });
    };
};

module.exports = new manageUserController();