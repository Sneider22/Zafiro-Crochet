// Estado de la aplicación
let state = {
  products: products, // viene de products.js
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  filter: 'all',
  search: '',
  currentPage: 1,
  itemsPerPage: 6
};

// Elementos del DOM
const grid = document.getElementById('product-grid');
const offersGrid = document.getElementById('offers-grid');
const offersContainer = document.getElementById('offers-container');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const searchInput = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');
const filterButtons = document.querySelectorAll('.filter-btn');

// Mapeo de categorías a emojis
const categoryEmojis = {
  'ramos': '•',
  'snoopy': '•',
  'superheroes': '•',
  'llaveros': '•',
  'personajes': '•',
  'peluches': '•',
};

/* === INICIALIZACIÓN === */
function init() {
  renderApp();
  setupEventListeners();
  updateCartCount();
  setupHistoryManagement();
}

// Manejar el botón "atrás" del navegador
function setupHistoryManagement() {
  window.addEventListener('popstate', (event) => {
    // Cerrar cualquier modal abierto cuando se presiona "atrás"
    const cartModal = document.getElementById('cartModal');
    const productModal = document.getElementById('productModal');
    const loginModal = document.getElementById('loginModal');
    const adminModal = document.getElementById('adminPanelModal');

    if (cartModal.classList.contains('active')) {
      cartModal.classList.remove('active');
    }
    if (productModal.classList.contains('active')) {
      productModal.classList.remove('active');
    }
    if (loginModal.classList.contains('active')) {
      loginModal.classList.remove('active');
    }
    if (adminModal.classList.contains('active')) {
      adminModal.classList.remove('active');
    }
  });
}

/* === RENDERIZADO === */
function renderApp() {
  // 1. Filtrar productos
  let filtered = state.products.filter(p => {
    // Soporte para categorías múltiples (array o string)
    let matchesCategory = state.filter === 'all';
    if (!matchesCategory) {
      if (Array.isArray(p.category)) {
        // Si category es un array, verificar si incluye el filtro
        matchesCategory = p.category.includes(state.filter);
      } else {
        // Si category es un string, comparar directamente
        matchesCategory = p.category === state.filter;
      }
    }
    const matchesSearch = p.name.toLowerCase().includes(state.search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Calcular paginación
  const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  // 3. Renderizar Grid Principal (solo productos de la página actual)
  grid.innerHTML = paginatedProducts.map(product => createProductCard(product)).join('');

  // 4. Renderizar controles de paginación
  renderPagination(totalPages);

  // 5. Renderizar Ofertas (Solo si no hay búsqueda activa)
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

function renderPagination(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;

  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let paginationHTML = '<div class="pagination-controls">';

  // Botón anterior
  paginationHTML += `
    <button class="pagination-btn" onclick="changePage(${state.currentPage - 1})" ${state.currentPage === 1 ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;

  // Números de página
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
      <button class="pagination-btn ${i === state.currentPage ? 'active' : ''}" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  // Botón siguiente
  paginationHTML += `
    <button class="pagination-btn" onclick="changePage(${state.currentPage + 1})" ${state.currentPage === totalPages ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  paginationHTML += '</div>';
  paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
  const filtered = state.products.filter(p => {
    const matchesCategory = state.filter === 'all' || p.category === state.filter;
    const matchesSearch = p.name.toLowerCase().includes(state.search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / state.itemsPerPage);

  if (page < 1 || page > totalPages) return;

  state.currentPage = page;
  renderApp();

  // Scroll suave al inicio del catálogo
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
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
                <span class="card-category">${Array.isArray(product.category) ? product.category[0] : product.category}</span>
                <h3 class="card-title">${product.name}</h3>
                ${priceDisplay}
                ${!isOfferSelect ? `
                <div class="card-actions">
                    <button class="btn btn-outline" style="flex: 1; justify-content: center; padding: 0.5rem;" title="Ver Detalle">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn btn-primary" style="flex: 1; justify-content: center; padding: 0.5rem;" title="Agregar al Carrito">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>` : `
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})" style="flex: 1; justify-content: center; padding: 0.5rem;" title="Agregar al Carrito">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>`}
            </div>
        </article>
    `;
}

/* === LÓGICA DEL DETALLE (MODAL) === */
let currentDetailId = null;
let currentImageIndex = 0;
let currentProductImages = [];

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
  // Agregar estado al historial para manejar el botón "atrás"
  history.pushState({ modal: 'cart' }, '');
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('active');
}

function openProductModal(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  currentDetailId = id;
  currentImageIndex = 0;

  // Obtener imágenes (usar array si existe, sino crear array con imagen única)
  currentProductImages = product.images || [product.image];

  // Llenar datos modal
  updateProductImage();
  const displayCategory = Array.isArray(product.category) ? product.category[0] : product.category;
  document.getElementById('detailCategory').innerText = displayCategory;
  document.getElementById('detailName').innerText = product.name;
  document.getElementById('detailDesc').innerText = product.description || "Sin descripción disponible.";
  document.getElementById('detailPrice').innerText = `$${product.price.toFixed(2)}`;
  document.getElementById('qtyInput').value = 1;

  // Renderizar indicadores
  renderImageIndicators();

  document.getElementById('productModal').classList.add('active');
  // Agregar estado al historial
  history.pushState({ modal: 'product' }, '');
}

function updateProductImage() {
  const imgElement = document.getElementById('detailImage');
  imgElement.src = currentProductImages[currentImageIndex];

  // Actualizar indicadores activos
  const indicators = document.querySelectorAll('.indicator-dot');
  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}

function renderImageIndicators() {
  const container = document.getElementById('imageIndicators');
  if (currentProductImages.length <= 1) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = currentProductImages.map((_, index) =>
    `<div class="indicator-dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></div>`
  ).join('');
}

function changeProductImage(direction) {
  currentImageIndex += direction;

  // Loop circular
  if (currentImageIndex < 0) {
    currentImageIndex = currentProductImages.length - 1;
  } else if (currentImageIndex >= currentProductImages.length) {
    currentImageIndex = 0;
  }

  updateProductImage();
}

function goToImage(index) {
  currentImageIndex = index;
  updateProductImage();
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
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

/* === SEARCH SUGGESTIONS === */
function showSearchSuggestions(query) {
  if (!query || query.length < 2) {
    searchSuggestions.classList.remove('active');
    searchSuggestions.innerHTML = '';
    return;
  }

  // Buscar productos que coincidan
  const matches = state.products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3); // Solo las primeras 3

  if (matches.length === 0) {
    searchSuggestions.classList.remove('active');
    return;
  }

  searchSuggestions.innerHTML = matches.map(product => `
    <div class="suggestion-item" onclick="selectSuggestion('${product.name}')">
      <strong>${product.name}</strong>
      <span class="suggestion-price">$${product.price.toFixed(2)}</span>
    </div>
  `).join('');

  searchSuggestions.classList.add('active');
}

function selectSuggestion(productName) {
  // Encontrar el producto y abrir su modal
  const product = state.products.find(p => p.name === productName);
  if (product) {
    openProductModal(product.id);
  }

  // Limpiar el campo de búsqueda y resetear el estado
  searchInput.value = '';
  state.search = '';
  renderApp();
  searchSuggestions.classList.remove('active');
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) return alert("Agrega productos primero :)");

  const phoneNumber = "584142826330";
  let message = "Hola! 👋 Quiero realizar el siguiente pedido:\n\n";
  let total = 0;

  state.cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    const emoji = categoryEmojis[item.category] || '•';
    message += `${emoji} *${item.name}* (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
  });

  message += `\n💰 *TOTAL A PAGAR: $${total.toFixed(2)}*`;
  message += `\n\nQuedo atento a la confirmación. Gracias!`;

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* === FILTROS & EVENTOS === */
function setupEventListeners() {
  // Búsqueda con autocompletado
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    state.currentPage = 1; // Reset a página 1
    renderApp();
    showSearchSuggestions(e.target.value);
  });

  // Cerrar sugerencias al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.controls')) {
      searchSuggestions.classList.remove('active');
    }
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
      state.currentPage = 1; // Reset a página 1
      renderApp();
    });
  });

  // Admin Login Logic
  document.getElementById('adminBtn').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('active');
    history.pushState({ modal: 'login' }, '');
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('usernameInput').value;
    const pass = document.getElementById('passwordInput').value;

    if (user === 'sofiavsh' && pass === 'pato1234..') {
      closeLogin();
      // Mostrar Panel de Admin (Generador de Código)
      document.getElementById('adminPanelModal').classList.add('active');
      history.pushState({ modal: 'admin' }, '');
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
  const message = `Hola! 👋 Estoy interesad@ en un amigurumi personalizado de:\n\n✨ ${input}\n`;

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
