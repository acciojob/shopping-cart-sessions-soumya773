const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Render products
function renderProducts() {
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price} `;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product));

    li.appendChild(addButton);
    productList.appendChild(li);
  });
}

// Load cart from sessionStorage
function loadCart() {
  const cartData = sessionStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
}

// Save cart to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Render cart items
function renderCart() {
  cartList.innerHTML = "";
  const cart = loadCart();

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Add product to cart
function addToCart(product) {
  let cart = loadCart();
  console.log('Before adding:', cart);
  cart.push(product);
  saveCart(cart);
  console.log('After adding:', cart);
  renderCart();
}


// Clear cart
function clearCart() {
  sessionStorage.removeItem("cart");
  renderCart();
}

// Attach clear cart button event
clearCartBtn.addEventListener("click", clearCart);

// Initial load
renderProducts();
renderCart();
