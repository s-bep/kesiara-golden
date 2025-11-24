// ==================== PRODUCTS DATABASE ==================== 
// Charge les produits depuis localStorage (gérés par admin.html)
let products = [];

function loadProductsFromStorage() {
    const storageKey = 'kesiara_products';
    const storedProducts = localStorage.getItem(storageKey);
    
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        // Produits par défaut si localStorage est vide
        products = [
    {
        id: 1,
        name: "Collier Or 18K Chaîne Classique",
        category: "Colliers",
        gender: "Femme",
        material: "Or 18K",
        price: 245000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1509941943102-7a002ba0d37b?w=500&h=500&fit=crop"
        ],
        description: "Élégant collier en or 18K avec chaîne classique. Parfait pour toute occasion.",
        weight: "2.5g",
        dimensions: "45cm",
        stock: 5,
        isFeatured: true
    },
    {
        id: 2,
        name: "Boucles d'Oreilles Plaqué Or Perles",
        category: "Boucles d'oreilles",
        gender: "Femme",
        material: "Plaqué Or",
        price: 89000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop"
        ],
        description: "Boucles d'oreilles en plaqué or avec perles. Style épuré et intemporel.",
        weight: "1.2g",
        dimensions: "15mm",
        stock: 12,
        isFeatured: true
    },
    {
        id: 3,
        name: "Bracelet Or Homme Maillé",
        category: "Bracelets",
        gender: "Homme",
        material: "Or 14K",
        price: 365000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1515562141207-6811bcdd56f8?w=500&h=500&fit=crop"
        ],
        description: "Bracelet masculin en or 14K avec maille solide et élégante.",
        weight: "15g",
        dimensions: "19cm",
        stock: 3,
        isFeatured: true
    },
    {
        id: 4,
        name: "Bague de Fiançailles Or Blanc",
        category: "Bagues",
        gender: "Femme",
        material: "Or blanc",
        price: 850000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop"
        ],
        description: "Bague de fiançailles élégante en or blanc 18K avec pierre brillante.",
        weight: "4g",
        dimensions: "Taille 7",
        stock: 2,
        isFeatured: true
    },
    {
        id: 5,
        name: "Ensemble Collier + Boucles Plaqué Or",
        category: "Ensembles",
        gender: "Femme",
        material: "Plaqué Or",
        price: 156000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop"
        ],
        description: "Ensemble complet collier et boucles en plaqué or. Parfait comme cadeau.",
        weight: "3.5g",
        dimensions: "Assortis",
        stock: 8,
        isFeatured: false
    },
    {
        id: 6,
        name: "Chaîne Or Homme Figaro",
        category: "Colliers",
        gender: "Homme",
        material: "Or 14K",
        price: 420000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop"
        ],
        description: "Chaîne Figaro masculine en or 14K. Style robust et sophistiqué.",
        weight: "12g",
        dimensions: "55cm",
        stock: 4,
        isFeatured: false
    },
    {
        id: 7,
        name: "Bracelet Femme Chaîne Plate",
        category: "Bracelets",
        gender: "Femme",
        material: "Or 18K",
        price: 195000,
        image: "https://images.unsplash.com/photo-1515562141207-6811bcdd56f8?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515562141207-6811bcdd56f8?w=500&h=500&fit=crop"
        ],
        description: "Bracelet féminin avec chaîne plate en or 18K. Délicat et élégant.",
        weight: "4.2g",
        dimensions: "18cm",
        stock: 6,
        isFeatured: false
    },
    {
        id: 8,
        name: "Bague Chevalière Homme Or",
        category: "Bagues",
        gender: "Homme",
        material: "Or 14K",
        price: 285000,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop"
        ],
        description: "Bague chevalière masculine en or 14K. Symbole de prestige.",
        weight: "8g",
        dimensions: "Taille 10",
        stock: 3,
        isFeatured: false
    },
    {
        id: 9,
        name: "Boucles Chandelier Femme",
        category: "Boucles d'oreilles",
        gender: "Femme",
        material: "Plaqué Or",
        price: 76000,
        image: "https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop"
        ],
        description: "Boucles chandelier en plaqué or. Design elegant et féminin.",
        weight: "2g",
        dimensions: "30mm",
        stock: 10,
        isFeatured: false
    }
        ];
    }
}

// Charger les produits au démarrage
loadProductsFromStorage();

// ==================== LOCAL STORAGE - CART MANAGEMENT ==================== 
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addToCart(product, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity
            });
        }
        this.save();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.save();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.save();
        }
    }

    getCart() {
        return this.cart;
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    clear() {
        this.cart = [];
        this.save();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        updateCartCount();
    }
}

const cartManager = new CartManager();

// ==================== UTILITIES ==================== 
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price).replace('XOF', 'CFA');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('liveToast');
    const toastBody = toast.querySelector('.toast-body');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toastBody.classList.remove('bg-success');
        toastBody.classList.add('bg-danger');
    } else {
        toastBody.classList.remove('bg-danger');
        toastBody.classList.add('bg-success');
    }
    
    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cartManager.getTotalItems();
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        if (totalItems > 0) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

// ==================== FEATURED PRODUCTS ==================== 
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;

    const featured = products.filter(p => p.isFeatured).slice(0, 4);
    
    featuredContainer.innerHTML = featured.map(product => `
        <div class="col-md-6 col-lg-3">
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">Vedette</span>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h5 class="product-name">${product.name}</h5>
                    <p class="product-description">${product.description.substring(0, 50)}...</p>
                    <div class="rating">
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star-half-alt text-gold"></i>
                    </div>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <div class="product-footer">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-sm btn-outline-secondary flex-grow-1">
                            <i class="fas fa-eye"></i> Voir
                        </a>
                        <button class="btn btn-sm btn-gold flex-grow-1" onclick="addProductToCart(${product.id}, 1)">
                            <i class="fas fa-plus"></i> Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== PRODUCTS PAGE ==================== 
function loadAllProducts(filters = {}) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let filtered = [...products];

    // Apply filters
    if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.gender) {
        filtered = filtered.filter(p => p.gender === filters.gender);
    }
    if (filters.material) {
        filtered = filtered.filter(p => p.material === filters.material);
    }

    // Apply sorting
    if (filters.sort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-inbox" style="font-size: 80px; color: #d4af37;"></i>
                <h3 class="mt-3">Aucun produit trouvé</h3>
                <p class="text-muted">Essayez d'ajuster vos filtres</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.stock <= 2 ? '<span class="product-badge">Limité</span>' : ''}
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h5 class="product-name">${product.name}</h5>
                    <p class="product-description">${product.description.substring(0, 50)}...</p>
                    <div class="rating">
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star-half-alt text-gold"></i>
                    </div>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <div class="product-footer">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-sm btn-outline-secondary flex-grow-1">
                            <i class="fas fa-eye"></i> Voir
                        </a>
                        <button class="btn btn-sm btn-gold flex-grow-1" onclick="addProductToCart(${product.id}, 1)">
                            <i class="fas fa-plus"></i> Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== FILTERS ==================== 
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const genderFilter = document.getElementById('genderFilter');
    const materialFilter = document.getElementById('materialFilter');
    const sortFilter = document.getElementById('sortFilter');

    const applyFilters = () => {
        const filters = {
            category: categoryFilter?.value || '',
            gender: genderFilter?.value || '',
            material: materialFilter?.value || '',
            sort: sortFilter?.value || ''
        };
        loadAllProducts(filters);
    };

    categoryFilter?.addEventListener('change', applyFilters);
    genderFilter?.addEventListener('change', applyFilters);
    materialFilter?.addEventListener('change', applyFilters);
    sortFilter?.addEventListener('change', applyFilters);

    // Load all products on first load
    loadAllProducts();
}

// ==================== PRODUCT DETAIL PAGE ==================== 
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = '<div class="container text-center py-5"><h2>Produit non trouvé</h2></div>';
        return;
    }

    // Update page title
    document.title = `${product.name} - Kesiara Golden`;

    // Update breadcrumb
    document.getElementById('productNameBread').textContent = product.name;

    // Update product info
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productGender').textContent = product.gender;
    document.getElementById('productPrice').textContent = formatPrice(product.price);
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productMaterial').textContent = product.material;
    document.getElementById('productWeight').textContent = product.weight;
    document.getElementById('productDimensions').textContent = product.dimensions;
    document.getElementById('productStock').textContent = `${product.stock} en stock`;

    // Thumbnail images
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = product.images.map((img, index) => `
        <img src="${img}" alt="Thumbnail ${index + 1}" class="${index === 0 ? 'active' : ''}" 
             onclick="document.getElementById('productImage').src='${img}'">
    `).join('');

    // Quantity controls
    const quantity = document.getElementById('quantity');
    document.getElementById('decreaseQty').addEventListener('click', () => {
        if (quantity.value > 1) quantity.value--;
    });
    document.getElementById('increaseQty').addEventListener('click', () => {
        quantity.value++;
    });

    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const qty = parseInt(quantity.value);
        addProductToCart(product.id, qty);
        quantity.value = 1;
    });

    // Wishlist button
    document.getElementById('wishlistBtn').addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-heart text-danger"></i>';
            showToast('Ajouté à vos favoris!');
        } else {
            this.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });

    // Related products
    const relatedProducts = products.filter(p => 
        p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    const relatedContainer = document.getElementById('relatedProducts');
    relatedContainer.innerHTML = relatedProducts.map(p => `
        <div class="col-md-6 col-lg-3">
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <p class="product-category">${p.category}</p>
                    <h5 class="product-name">${p.name}</h5>
                    <p class="product-price">${formatPrice(p.price)}</p>
                    <div class="product-footer">
                        <a href="product-detail.html?id=${p.id}" class="btn btn-sm btn-gold w-100">
                            <i class="fas fa-eye"></i> Voir
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== ADD TO CART ==================== 
function addProductToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (product) {
        if (product.stock < quantity) {
            showToast('Stock insuffisant!', 'error');
            return;
        }
        cartManager.addToCart(product, quantity);
        showToast(`${product.name} ajouté au panier!`);
    }
}

// ==================== CART PAGE ==================== 
function displayCart() {
    const cart = cartManager.getCart();
    const emptyMessage = document.getElementById('emptyCartMessage');
    const cartContent = document.getElementById('cartContent');
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }

    emptyMessage.style.display = 'none';
    cartContent.style.display = 'block';

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-product-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-specs">
                    <strong>${item.material}</strong> | ${item.category}
                </div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span style="min-width: 40px; text-align: center;">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="cart-item-remove" onclick="removeCartItem(${item.id})">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function updateItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    cartManager.updateQuantity(productId, newQuantity);
    displayCart();
}

function removeCartItem(productId) {
    cartManager.removeFromCart(productId);
    displayCart();
    showToast('Article supprimé du panier');
}

function updateCartSummary() {
    const subtotal = cartManager.getTotal();
    const taxRate = 0.18;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);
}

// ==================== WHATSAPP INTEGRATION ==================== 
function generateWhatsAppMessage() {
    const cart = cartManager.getCart();
    if (cart.length === 0) {
        showToast('Votre panier est vide!', 'error');
        return null;
    }

    const subtotal = cartManager.getTotal();
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    let message = "*COMMANDE KESIARA GOLDEN* 📱\n\n";
    message += "Bonjour! Je voudrais passer une commande.\n\n";
    message += "*ARTICLES:*\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Matière: ${item.material}\n`;
        message += `   Prix: ${formatPrice(item.price)}\n`;
        message += `   Quantité: ${item.quantity}\n`;
        message += `   Sous-total: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += "*RÉSUMÉ:*\n";
    message += `Sous-total: ${formatPrice(subtotal)}\n`;
    message += `Taxes (18%): ${formatPrice(tax)}\n`;
    message += `*TOTAL: ${formatPrice(total)}*\n\n`;
    message += "Merci de confirmer cette commande.";

    return encodeURIComponent(message);
}

// Checkout button
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const message = generateWhatsAppMessage();
            if (message) {
                const whatsappNumber = getWhatsappNumber();
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                window.open(whatsappUrl, '_blank');
                cartManager.clear();
                displayCart();
                showToast('Commande envoyée sur WhatsApp!');
            }
        });
    }

    // Setup filters on products page
    if (document.getElementById('categoryFilter')) {
        setupFilters();
    }

    // Update cart count on load
    updateCartCount();
});

// ==================== PAGE INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count badge
    updateCartCount();

    // Add animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
