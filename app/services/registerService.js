var bcrypt = require('bcryptjs');
var connection = require('../../config/db/db');

let createNewUser = (data) => {
    return new Promise(async(resolve, reject) => {
        // check email is exist or not
        let isEmailExist = await checkExistEmail(data.email);
        console.log(isEmailExist);
        if (isEmailExist) {
            reject(`This email "${data.email}" has already exist. Please choose an other email`);
        } else {
            // hash password
            let salt = bcrypt.genSaltSync(10);
            let userItem = {
                name: data.name,
                email: data.email,
                password: data.password/*bcrypt.hashSync(data.password, salt)*/,
            };
            console.log(userItem);
            //create a new account
            connection.query(
                ' INSERT INTO users set ? ', userItem,
                function(err, rows) {
                    if (err) {
                        reject(false)
                    }
                    resolve("Create a new user successful");
                }
            );
        }
    });
};

let checkExistEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `users` WHERE `email` = ?  ', email,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    if (rows.length > 0) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};
module.exports = {
    createNewUser: createNewUser
};