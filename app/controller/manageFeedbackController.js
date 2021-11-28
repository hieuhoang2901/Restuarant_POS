const manageFeedbackServices = require("../services/manageFeedbackServices");
const fs = require('fs');
const path = require('path');
class manageFeedbackController {
    listFeedback(req, res, next) {
        manageFeedbackServices.getAllFeedback().then(async function(rows) {
            try {
                res.render('manageFeedback', { layout: 'index', rows, user: req.user });
            } catch (err) {
                console.log(err);
            }
        });
    }
};

module.exports = new manageFeedbackController();