const infoUserServices = require("../services/infoUserServices");
const fs = require('fs');
const path = require('path');
class infoUserController {
    // get information of user to update
    getUser(req, res, next) {
        var id = parseInt(req.params.id);
        infoUserServices.getUser(id).then(async function(rows) {
            try {
                res.render('userInfo', { layout: 'index', rows });
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
        infoUserServices.updateUser(currentUser).then(async function(rows) {
            try {
                res.redirect('/infoUser/'+currentUser.id);
            } catch (err) {
                console.log(err);
            }
        });
    };
};

module.exports = new infoUserController();