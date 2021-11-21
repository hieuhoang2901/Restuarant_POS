const connection = require('../../config/db/db');
const loginService = require('../services/loginService');

module.exports = function GetUser(req, res, next) {
    if (req.session.passport) {
        if (req.session.passport.user) {
            loginService.findUserById(parseInt(req.session.passport.user)).then(async function(rows) {
                try {
                    let user = rows[0];
                    req.user = user;
                    next();
                } catch (err) {
                    console.log(err);
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }
}