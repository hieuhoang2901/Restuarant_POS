var connection = require('../../config/db/db');

let saveOrder = (userName, userID, totalCost, orderStatus) => {
    let orderItem = {
        userName: userName,
        userID: userID,
        totalCost: totalCost,
        orderStatus: orderStatus
    }

    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'INSERT INTO orders SET ?', orderItem,
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


module.exports = {
    saveOrder: saveOrder
};