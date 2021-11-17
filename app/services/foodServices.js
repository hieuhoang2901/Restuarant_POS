const { resolve } = require('path-posix');
var connection = require('../../config/db/db');
const upload = require('../middleware/multer');

//Find food using id
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

//function get all food from database
let getAllFood = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `food`',
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

let addNewFood = (name, description, price, image, type) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'INSERT INTO FOOD (name, description, price, type, image) VALUES (?, ?, ?, ?, ?)', [name, description, price, type, image],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    resolve();
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

//Get one Food
let getFood = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'SELECT * FROM food where id = ?', [id],
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
}

let updateFood = (name, description, price, image, type, id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'UPDATE food SET name = ?, description = ?,price = ? , image = ?, type = ? WHERE id= ?', [name, description, price, image, type, id],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    resolve();
                }
            );
        } catch (err) {
            reject(err);
        }
    });

};
//delete food
let deleteFood = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'DELETE FROM food where id = ?', [id],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    resolve();
                }
            );
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    findFoodById: findFoodById,
    getAllFood: getAllFood,
    addNewFood: addNewFood,
    getFood: getFood,
    updateFood: updateFood,
    deleteFood: deleteFood
};