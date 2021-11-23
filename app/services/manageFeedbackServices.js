const { resolve } = require('path-posix');
var connection = require('../../config/db/db');
const upload = require('../middleware/multer');

// function get all users from database
let getAllFeedback = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `orders`',
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    resolve(rows);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    getAllFeedback: getAllFeedback
};