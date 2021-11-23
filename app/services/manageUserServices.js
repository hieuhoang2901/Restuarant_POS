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
// function get all users from database
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
let addNewUser = (data) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'INSERT INTO users (name, email, password, address, phoneNumber, role) VALUES (?, ?, ?, ?, ?, ?)', [data.name, data.email, data.password, data.address, data.phoneNumber, data.userRole],
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


// let addNewUser = (data) => {
//     return new Promise(async(resolve, reject) => {
//         // check email is exist or not
//         let isEmailExist = await checkExistEmail(data.email);
//         if (isEmailExist) {
//             reject(`This email "${data.email}" has already exist. Please choose another email`);
//             return
//         } else {
//             let userItem = {
//                 name: data.name,
//                 email: data.email,
//                 password: data.password,
//                 address: data.address,
//                 phoneNumber: data.phoneNumber
//             };
//             console.log(userItem);
//             //create a new account
//             connection.query(
//                 ' INSERT INTO users set ? ', userItem,
//                 function(err, rows) {
//                     if (err) {
//                         reject(false)
//                     }
//                     resolve("Create a new user successful");
//                 }
//             );
//         }
//     });
// };

// let checkExistEmail = (email) => {
//     return new Promise((resolve, reject) => {
//         try {
//             connection.query(
//                 ' SELECT * FROM `users` WHERE `email` = ?  ', email,
//                 function(err, rows) {
//                     if (err) {
//                         reject(err)
//                     }
//                     if (rows.length > 0) {
//                         resolve(true)
//                     } else {
//                         resolve(false)
//                     }
//                 }
//             );
//         } catch (err) {
//             reject(err);
//         }
//     });
// };

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
//delete user
let deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'DELETE FROM users where id = ?', [id],
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
    getAllUser: getAllUser,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    getUser: getUser,
    updateUser: updateUser
};