const { resolve } = require('path-posix');
var connection = require('../../config/db/db');
const upload = require('../middleware/multer');

// get one user
let getUser = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'SELECT * FROM users where id = ?', [id],
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


let updateUser = (data) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('id', data.id)
            connection.query(
                'UPDATE users SET name = ?, email = ?, password = ? , address = ?, phoneNumber = ?, role = ? WHERE id= ?', [data.name, data.email, data.password, data.address, data.phoneNumber, data.userRole, data.id],
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

module.exports = {
    getUser: getUser,
    updateUser: updateUser
};