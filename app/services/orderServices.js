var connection = require('../../config/db/db');

let saveOrder = (userName, userID, totalCost, orderStatus, feedback) => {
    let orderItem = {
        userName: userName,
        userID: userID,
        totalCost: totalCost,
        orderStatus: orderStatus,
        feedback: feedback
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

let getFeedback = () => {

    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'SELECT * FROM orders where (feedback is not null and not feedback = "") LIMIT 4',
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    console.log(rows)
                    resolve(rows);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
}




module.exports = {
    saveOrder: saveOrder,
    getFeedback: getFeedback
};