module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id, quantity) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        }
        cartItem.quantity += quantity;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.price;
    };

    this.update = function(id, quantity) {
        var cartItem = this.items[id];
        cartItem.quantity = quantity;
        let temp = cartItem.price;
        cartItem.price = quantity * cartItem.item.price;
        this.totalPrice += cartItem.price;
        this.totalPrice -= temp;

    }

    this.delete = function(id) {
        var cartItem = this.items[id];
        this.totalItems -= 1;
        this.totalPrice -= cartItem.price;
        delete this.items[id];
    }

    // this.remove = function(id) {
    //     this.totalItems -= this.items[id].quantity;
    //     this.totalPrice -= this.items[id].price;
    //     delete this.items[id];
    // };

    // this.getItems = function() {
    //     var arr = [];
    //     for (var id in this.items) {
    //         arr.push(this.items[id]);
    //     }
    //     return arr;
    // };

    // this.update = function(id, quantity) {
    //     var cartItem = this.items[id];
    //     cartItem.quantity = parseInt(quantity);
    //     console.log(cartItem.quantity)
    // }
};