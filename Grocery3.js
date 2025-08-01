let cart = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (username === "Admin" && password === "1234") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("storePage").classList.remove("hidden");
        errorMsg.innerText = "";
    } else {
        errorMsg.innerText = "Invalid username or password!";
    }
}

function logout() {
    document.getElementById("storePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("errorMsg").innerText = "";
    clearCart(); // Clear the cart on logout
}

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmountElement = document.getElementById("totalAmount");

    // Clear the previous cart display
    cartItemsContainer.innerHTML = "";

    let totalAmount = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(cartItem);
        totalAmount += item.price;
    });

    totalAmountElement.innerText = `Total: $${totalAmount.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    displayCart();
}

function clearCart() {
    cart = []; // Clear the cart array
    displayCart();
}
