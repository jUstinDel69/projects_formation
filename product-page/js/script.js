let cart = {
    cart_array: [],
    add: function (product) {
        this.cart_array.push(product);

        this.rewriteCart();
    },
    rewriteCart: function () {
        let products = '';

        for (i = 0; i < this.cart_array.length; i++) {
            products += this.cart_array[0];
        }
        document.querySelector("#cart").innerHTML = products;
    }
}

cart.add(['Fall Limited Edition Sneakers', 125.00]);