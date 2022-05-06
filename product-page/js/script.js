let cart = {
    cart_array: [],
    add: function (product) {
        this.cart_array.push(product);

        this.rewriteCart();
    },
    rewriteCart: function () {
        let products = '';

        for (i = 0; i < this.cart_array.length; i++) {
            products += '<div class="flex"><div class="fb-20"><img src="images/image-product-1-thumbnail.jpg"></div><div class="fb-80">' + this.cart_array[0] + '</div></div>';
        }
        document.querySelector("#cartContainer").innerHTML = products;
    },
}

let page_product = {
    //Produit
    name_product: "Fall Limited Edition Sneakers",
    description_product: "",
    price_product: 125,
    nbr_product: 0,

    //HTML
    inputNbrProduct: document.querySelector('#nbrProduct'),
    contentPrice: document.querySelector('#price'),
    contentPromo: document.querySelector('#promo'),

    count: function (t) {
        this.nbr_product = this.nbr_product + t;
        this.inputNbrProduct.innerHTML = this.nbr_product;

        //Modification du prix en fonction du nombre d'exemplaires
        this.contentPrice.innerHTML = '$' + this.nbr_product * 125;
        this.contentPromo.innerHTML = this.nbr_product * 125 + (50 * this.nbr_product * 125 / 100) + '$';
    },
    popup: function () {
        document.getElementById('popup').classList.toggle('popup-actif');
    }
}

document.querySelector('#cartButton').addEventListener('click', function () {
    cart.add([page_product.name_product, 125.00]);
});

document.querySelector('#plus').addEventListener('click', function () {
    page_product.count(1);
});
document.querySelector('#moins').addEventListener('click', function () {
    page_product.count(-1);
});