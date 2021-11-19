const { resolve } = require('path-posix');
var connection = require('../../config/db/db');
const upload = require('../middleware/multer');


//function get all food from database
let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `users`',
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
    getAllUser: getAllUser

};