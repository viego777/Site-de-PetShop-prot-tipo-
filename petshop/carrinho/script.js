const cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(name, price) {
  const existingProduct = cart.find(item => item.name === name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartItems.innerHTML = ""; // Limpa os itens antigos
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>R$ ${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>R$ ${subtotal.toFixed(2)}</td>
      <td><button onclick="removeFromCart(${index})">Remover</button></td>
    `;
    cartItems.appendChild(row);
  });

  totalDisplay.textContent = total.toFixed(2);
}

// Função para remover produtos do carrinho
function removeFromCart(index) {
  cart.splice(index, 1); // Remove o item do array
  updateCart();
}
