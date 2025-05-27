let cart = [];

function toggleCart() {
document.getElementById("cart").classList.toggle("hidden");
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartCount.innerText = count;
  cartTotal.innerText = total.toFixed(2);
}

function clearCart() {
  cart = [];
  updateCart();
}