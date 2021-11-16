var connection = require('../../config/db/db');
const upload = require('../middleware/multer');


let findFoodById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `food` WHERE `id` = ?  ', parseInt(id),
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let food = rows[0];
                    resolve(food);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    findFoodById: findFoodById
};