let cart = {
    cart_array: [],
    add: function (product) {
        this.cart_array.push(product);
    }
}

cart.add(['Fall Limited Edition Sneakers', 125.00]);