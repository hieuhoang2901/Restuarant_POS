var connection = require('../../config/db/db');

let saveListItem = (orderId, items) => {
    var itemList = [];
    for (let i = 0; i < items.length; i++) {
        itemList.push([orderId, items[i].item.name, items[i].quantity, items[i].item.image, items[i].item.price]);
    }
    console.log(itemList)

    return new Promise((resolve, reject) => {
        try {
            connection.query(
                'INSERT INTO listitemorder (orderID, name, quantity, image, price) VALUES ?', [itemList],
                function(err, rows) {
                    if (err) {
                        console.log(this.sql)
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
    saveListItem: saveListItem
};