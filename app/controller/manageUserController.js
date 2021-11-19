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
};

module.exports = new manageUserController();