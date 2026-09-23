
var siteCart = JSON.parse(localStorage.getItem("watchCart")) || [];

function saveSiteCart() {
    localStorage.setItem("watchCart", JSON.stringify(siteCart));
    updateAllCartCounts();
}

function updateAllCartCounts() {
    var count = 0;

    siteCart.forEach(function(item) {
        count += item.quantity;
    });

    var cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }

    var homeCartCount = document.getElementById("homeCartCount");

    if (homeCartCount) {
        homeCartCount.textContent = count;
    }
}

function addToCart(name, price) {
    var existingItem = siteCart.find(function(item) {
        return item.name === name;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        siteCart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveSiteCart();

    alert(name + " has been added to your cart!");
}

function openCart() {
    siteCart = JSON.parse(localStorage.getItem("watchCart")) || [];

    var cartBody = document.getElementById("cartBody");
    var cartTotal = document.getElementById("cartTotal");

    if (!cartBody) {
        return;
    }

    if (siteCart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="bi bi-bag"></i>
                <h4>Your Cart Is Empty</h4>
                <p>Add your favourite watches to your cart.</p>
            </div>
        `;

        cartTotal.textContent = "$0";
    } else {
        var html = "";
        var total = 0;

        siteCart.forEach(function(item, index) {
            var priceNumber = parseFloat(
                item.price.replace(/[^0-9.]/g, "")
            );

            var itemTotal = priceNumber * item.quantity;

            total += itemTotal;

            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                    </div>

                    <div class="cart-quantity">
                        <button onclick="decreaseCartItem(${index})">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseCartItem(${index})">+</button>
                    </div>

                    <div class="cart-item-total">
                        $${itemTotal.toLocaleString()}
                    </div>

                    <button
                        class="remove-cart"
                        onclick="removeCartItem(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            `;
        });

        cartBody.innerHTML = html;
        cartTotal.textContent = "$" + total.toLocaleString();
    }

    var cartModal = new bootstrap.Modal(
        document.getElementById("cartModal")
    );

    cartModal.show();
}

function increaseCartItem(index) {
    siteCart[index].quantity++;
    saveSiteCart();
    openCart();
}

function decreaseCartItem(index) {
    if (siteCart[index].quantity > 1) {
        siteCart[index].quantity--;
    } else {
        siteCart.splice(index, 1);
    }

    saveSiteCart();
    openCart();
}

function removeCartItem(index) {
    siteCart.splice(index, 1);
    saveSiteCart();
    openCart();
}

function clearCart() {
    siteCart = [];
    saveSiteCart();
    openCart();
}

document.addEventListener("DOMContentLoaded", function() {
    siteCart = JSON.parse(localStorage.getItem("watchCart")) || [];
    updateAllCartCounts();
});