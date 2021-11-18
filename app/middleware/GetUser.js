const connection = require('../../config/db/db');
const loginService = require('../services/loginService');

module.exports = function GetUser(req, res, next) {
    if (req.session.email) {
        loginService.findUserByEmail(req.session.email).then(async function(rows) {
            try {
                let user = rows[0];
                req.user = user.toObject();
                next();
            } catch (err) {
                console.log(err);
            }
        })
    } else {
        next();
    }
}