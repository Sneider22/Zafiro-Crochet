// Estado de la aplicación
let state = {
  products: products, // viene de products.js
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  filter: 'all',
  search: ''
};

// Elementos del DOM
const grid = document.getElementById('product-grid');
const offersGrid = document.getElementById('offers-grid');
const offersContainer = document.getElementById('offers-container');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

/* === INICIALIZACIÓN === */
function init() {
  renderApp();
  setupEventListeners();
  updateCartCount();
}

/* === RENDERIZADO === */
function renderApp() {
  // 1. Filtrar productos
  let filtered = state.products.filter(p => {
    const matchesCategory = state.filter === 'all' || p.category === state.filter;
    const matchesSearch = p.name.toLowerCase().includes(state.search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Renderizar Grid Principal
  grid.innerHTML = filtered.map(product => createProductCard(product)).join('');

  // 3. Renderizar Ofertas (Solo si no hay búsqueda activa para no ensuciar)
  if (state.filter === 'all' && state.search === '') {
    const sensitiveOffers = state.products.filter(p => p.oldPrice);
    if (sensitiveOffers.length > 0) {
      offersContainer.classList.remove('hidden');
      offersGrid.innerHTML = sensitiveOffers.map(product => createProductCard(product, true)).join('');
    } else {
      offersContainer.classList.add('hidden');
    }
  } else {
    offersContainer.classList.add('hidden');
  }
}

function createProductCard(product, isOfferSelect = false) {
  const priceDisplay = product.oldPrice
    ? `<div class="card-price-container">
             <span class="price">$${product.price.toFixed(2)}</span>
             <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
           </div>`
    : `<div class="card-price-container">
             <span class="price">$${product.price.toFixed(2)}</span>
           </div>`;

  const badge = product.oldPrice ? `<span class="card-badge">OFERTA</span>` : '';

  return `
        <article class="card" onclick="openProductModal(${product.id})" style="cursor: pointer;">
            <div class="card-image-container">
                <img src="${product.image}" alt="${product.name}" class="card-img">
                ${badge}
            </div>
            <div class="card-content">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${product.name}</h3>
                ${priceDisplay}
                <div class="card-actions">
                    <button class="btn btn-outline" style="flex: 1; justify-content: center; padding: 0.5rem;" title="Ver Detalle">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn btn-primary" style="flex: 1; justify-content: center; padding: 0.5rem;" title="Agregar al Carrito">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </article>
    `;
}

/* === LÓGICA DEL DETALLE (MODAL) === */
let currentDetailId = null;

function openProductModal(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  currentDetailId = id;

  // Llenar datos modal
  document.getElementById('detailImage').src = product.image;
  document.getElementById('detailCategory').innerText = product.category;
  document.getElementById('detailName').innerText = product.name;
  document.getElementById('detailDesc').innerText = product.description || "Sin descripción disponible.";
  document.getElementById('detailPrice').innerText = `$${product.price.toFixed(2)}`;
  document.getElementById('qtyInput').value = 1;

  document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

function addToCartFromModal() {
  if (!currentDetailId) return;
  const qty = parseInt(document.getElementById('qtyInput').value);
  addToCart(currentDetailId, qty);
  closeProductModal();
}

/* === LÓGICA DEL CARRITO === */
function addToCart(id, quantity = 1) {
  const product = state.products.find(p => p.id === id);
  const existing = state.cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ ...product, quantity: quantity });
  }

  saveCart();
  updateCartCount();
  openCart(); // Opcional: abrir carrito al agregar para confirmar
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  saveCart();
  renderCartItems();
  updateCartCount();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
}

function updateCartCount() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = count;
}

/* === MODAL & UI CONTROLS === */
function openCart() {
  document.getElementById('cartModal').classList.add('active');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('active');
}

function renderCartItems() {
  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; margin-top:2rem;">Tu carrito está vacío ☹️</p>';
    cartTotalElement.innerText = "$0.00";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = state.cart.map(item => {
    total += item.price * item.quantity;
    return `
            <div class="cart-item">
                <div style="display:flex; align-items:center; gap:1rem;">
                    <img src="${item.image}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">
                    <div>
                        <h4 style="font-size:0.9rem; margin-bottom:0.2rem;">${item.name}</h4>
                        <span style="font-size:0.8rem; color:#666;">$${item.price} x ${item.quantity}</span>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="color: #ff4d6d; background: none; border: none; cursor: pointer;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
  }).join('');

  cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) return alert("Agrega productos primero :)");

  const phoneNumber = "584142826330";
  let message = "Hola! 👋 Quiero realizar el siguiente pedido:\n\n";
  let total = 0;

  state.cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `🧸 *${item.name}* (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
  });

  message += `\n💰 *TOTAL A PAGAR: $${total.toFixed(2)}*`;
  message += `\n\nQuedo atento a la confirmación. Gracias!`;

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* === FILTROS & EVENTOS === */
function setupEventListeners() {
  // Búsqueda
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderApp();
  });

  // Filtros de Categoría
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase active de todos
      filterButtons.forEach(b => b.classList.remove('active'));
      // Activar el actual
      btn.classList.add('active');
      // Actualizar estado
      state.filter = btn.dataset.category;
      renderApp();
    });
  });

  // Admin Login Logic
  document.getElementById('adminBtn').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('active');
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('usernameInput').value;
    const pass = document.getElementById('passwordInput').value;

    if (user === 'sofiavsh' && pass === 'pato1234..') {
      closeLogin();
      // Mostrar Panel de Admin (Generador de Código)
      document.getElementById('adminPanelModal').classList.add('active');
    } else {
      alert("Credenciales incorrectas");
    }
  });

  // Generador de Código de Producto
  document.getElementById('generateBtn').addEventListener('click', () => {
    const name = document.getElementById('newProdName').value;
    const price = parseFloat(document.getElementById('newProdPrice').value);
    const oldPrice = parseFloat(document.getElementById('newProdOldPrice').value) || null;
    const category = document.getElementById('newProdCategory').value;
    const image = document.getElementById('newProdImage').value || "https://placehold.co/400";
    const desc = document.getElementById('newProdDesc').value;

    // Generar ID aleatorio basado en timestamp
    const id = Date.now();

    const newObj = {
      id: id,
      name: name,
      price: price,
      category: category,
      image: image,
      description: desc,
      rating: 5
    };

    if (oldPrice) newObj.oldPrice = oldPrice;

    const codeSnippet = `,\n    ${JSON.stringify(newObj, null, 4)}`;

    document.getElementById('generatedCode').value = codeSnippet;
    alert("¡Código generado! Copia el texto y pégalo en products.js al final de la lista.");
  });
}

function closeLogin() {
  document.getElementById('loginModal').classList.remove('active');
}

function sendSuggestion() {
  const input = document.getElementById('suggestionInput').value;
  if (!input.trim()) return alert("Por favor escribe algo :)");

  const phoneNumber = "584142826330";
  const message = `Hola! 👋 Tengo una sugerencia para un nuevo producto:\n\n✨ *${input}*\n\n¿Qué te parece?`;

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  // Limpiar el input después de enviar
  document.getElementById('suggestionInput').value = '';
}

function closeAdminPanel() {
  document.getElementById('adminPanelModal').classList.remove('active');
}

// Iniciar app
init();
