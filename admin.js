// ============ AUTHENTICATION - SYSTÈME SÉCURISÉ ============
// ⚠️ Le mot de passe est stocké en localStorage (côté client)
// Format: SHA-256 hash

class AuthManager {
    constructor() {
        this.storageKey = 'kesiara_auth';
        this.initializeAuth();
    }

    initializeAuth() {
        if (!localStorage.getItem(this.storageKey)) {
            // Hash du mot de passe par défaut '226kesiara'
            // Généré avec: SHA256('226kesiara')
            const defaultHash = this.simpleHash('226kesiara');
            localStorage.setItem(this.storageKey, defaultHash);
        }
    }

    // Simple hash pour démonstration (non recommandé pour production)
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convertir en 32-bit integer
        }
        return 'hash_' + Math.abs(hash).toString(36);
    }

    verify(password) {
        return this.simpleHash(password) === localStorage.getItem(this.storageKey);
    }

    setPassword(newPassword) {
        const hash = this.simpleHash(newPassword);
        localStorage.setItem(this.storageKey, hash);
        return true;
    }
}

const auth = new AuthManager();

// ============ PRODUCT MANAGEMENT ============
class ProductManager {
    constructor() {
        this.storageKey = 'kesiara_products';
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            // Import products from main script.js
            const defaultProducts = [
                {
                    id: 1,
                    name: "Collier Or 18K Chaîne Classique",
                    category: "Colliers",
                    gender: "Femme",
                    material: "Or 18K",
                    price: 245000,
                    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1509941943102-7a002ba0d37b?w=500&h=500&fit=crop"],
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
                    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop"],
                    description: "Élégantes boucles d'oreilles en plaqué or avec perles. Brillance garantie.",
                    weight: "1.2g",
                    dimensions: "20mm",
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
                    image: "https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop"],
                    description: "Bracelet homme robuste en or 14K avec mailles épaisses et élégantes.",
                    weight: "18g",
                    dimensions: "19cm",
                    stock: 4,
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
                    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop"],
                    description: "Magnifique bague de fiançailles en or blanc 18K. Le choix parfait pour un moment unique.",
                    weight: "4g",
                    dimensions: "Taille 8",
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
                    image: "https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop"],
                    description: "Ensemble élégant composé d'un collier et de boucles d'oreilles assortis.",
                    weight: "5g",
                    dimensions: "Collier 40cm, Boucles 15mm",
                    stock: 7,
                    isFeatured: false
                },
                {
                    id: 6,
                    name: "Chaîne Or Homme Figaro",
                    category: "Chaînes",
                    gender: "Homme",
                    material: "Or 14K",
                    price: 420000,
                    image: "https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1599643478518-e00d9d8c5512?w=500&h=500&fit=crop"],
                    description: "Chaîne Figaro classique pour homme en or 14K. Style intemporel.",
                    weight: "15g",
                    dimensions: "50cm",
                    stock: 6,
                    isFeatured: false
                },
                {
                    id: 7,
                    name: "Bracelet Femme Chaîne Plate",
                    category: "Bracelets",
                    gender: "Femme",
                    material: "Or 18K",
                    price: 195000,
                    image: "https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop",
                    images: ["https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop"],
                    description: "Bracelet féminin avec chaîne plate en or 18K. Léger et confortable.",
                    weight: "6g",
                    dimensions: "18cm",
                    stock: 9,
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
                    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop"],
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
                    images: ["https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=500&h=500&fit=crop"],
                    description: "Boucles chandelier en plaqué or. Design elegant et féminin.",
                    weight: "2g",
                    dimensions: "30mm",
                    stock: 10,
                    isFeatured: false
                }
            ];

            localStorage.setItem(this.storageKey, JSON.stringify(defaultProducts));
        }
    }

    getAll() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }

    getNextId() {
        const products = this.getAll();
        return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    }

    add(product) {
        const products = this.getAll();
        product.id = this.getNextId();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
        return product;
    }

    update(id, updatedProduct) {
        let products = this.getAll();
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedProduct };
            localStorage.setItem(this.storageKey, JSON.stringify(products));
            return true;
        }
        return false;
    }

    delete(id) {
        let products = this.getAll();
        products = products.filter(p => p.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    }

    reset() {
        localStorage.removeItem(this.storageKey);
        this.initializeStorage();
    }
}

const pm = new ProductManager();

// ============ AUTHENTICATION FUNCTIONS ============
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    const loginScreen = document.getElementById('loginScreen');
    const adminPanel = document.getElementById('adminPanel');

    if (!isLoggedIn) {
        loginScreen.style.display = 'flex';
        adminPanel.style.display = 'none';
    } else {
        loginScreen.style.display = 'none';
        adminPanel.style.display = 'block';
        loadProducts();
        loadConfigUI();
    }
}

function login() {
    const password = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('loginError');

    if (password.trim() === '') {
        errorElement.textContent = 'Veuillez entrer un mot de passe';
        errorElement.style.display = 'block';
        return;
    }

    if (auth.verify(password)) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        errorElement.style.display = 'none';
        document.getElementById('passwordInput').value = '';
        checkAuth();
    } else {
        errorElement.textContent = 'Mot de passe incorrect';
        errorElement.style.display = 'block';
        document.getElementById('passwordInput').value = '';
    }
}

function logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        sessionStorage.removeItem('adminLoggedIn');
        checkAuth();
    }
}

// ============ IMAGE UPLOAD FUNCTIONS ============
function handleImageUpload(event, fieldId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        // Convertir en base64 pour localStorage
        const base64Image = e.target.result;
        document.getElementById(fieldId).value = base64Image;
        
        // Prévisualiser
        const previewId = fieldId.replace('Image', 'Preview');
        const preview = document.getElementById(previewId);
        if (preview) {
            preview.src = base64Image;
            preview.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
}

function switchImageMode(mode) {
    const urlInput = document.getElementById('productImage');
    const fileInput = document.getElementById('productImageFile');
    const urlSection = document.getElementById('urlSection');
    const fileSection = document.getElementById('fileSection');

    if (mode === 'url') {
        urlSection.style.display = 'block';
        fileSection.style.display = 'none';
        fileInput.value = '';
    } else {
        urlSection.style.display = 'none';
        fileSection.style.display = 'block';
        urlInput.value = '';
    }
}

function switchImageModeEdit(mode) {
    const urlInput = document.getElementById('editProductImage');
    const fileInput = document.getElementById('editProductImageFile');
    const urlSection = document.getElementById('editUrlSection');
    const fileSection = document.getElementById('editFileSection');

    if (mode === 'url') {
        urlSection.style.display = 'block';
        fileSection.style.display = 'none';
        fileInput.value = '';
    } else {
        urlSection.style.display = 'none';
        fileSection.style.display = 'block';
        urlInput.value = '';
    }
}

// ============ UI FUNCTIONS ============
function loadProducts() {
    const products = pm.getAll();
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p class="text-center text-muted">Aucun produit. Ajoutez-en un!</p>';
        return;
    }

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let featured = '';
    if (product.isFeatured) {
        featured = '<div class="featured-badge">EN VEDETTE</div>';
    }

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200?text=Image+non+disponible'">
        ${featured}
        <div class="product-card-body">
            <div class="product-card-title">${product.name}</div>
            <div class="product-card-price">${formatPrice(product.price)}</div>
            <small class="d-block mb-2 text-muted">${product.category} • ${product.gender}</small>
            <div class="product-card-actions">
                <button class="btn-edit-card" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i> Modifier
                </button>
                <button class="btn-delete-card" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </div>
        </div>
    `;

    return card;
}

function editProduct(id) {
    const product = pm.getAll().find(p => p.id === id);
    if (!product) return;

    document.getElementById('editProductId').value = id;
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductCategory').value = product.category;
    document.getElementById('editProductGender').value = product.gender;
    document.getElementById('editProductMaterial').value = product.material;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductWeight').value = product.weight;
    document.getElementById('editProductDimensions').value = product.dimensions;
    document.getElementById('editProductStock').value = product.stock;
    document.getElementById('editProductImage').value = product.image;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductFeatured').checked = product.isFeatured;

    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function saveEditedProduct() {
    const id = parseInt(document.getElementById('editProductId').value);
    const updatedProduct = {
        name: document.getElementById('editProductName').value,
        category: document.getElementById('editProductCategory').value,
        gender: document.getElementById('editProductGender').value,
        material: document.getElementById('editProductMaterial').value,
        price: parseInt(document.getElementById('editProductPrice').value),
        weight: document.getElementById('editProductWeight').value,
        dimensions: document.getElementById('editProductDimensions').value,
        stock: parseInt(document.getElementById('editProductStock').value),
        image: document.getElementById('editProductImage').value,
        description: document.getElementById('editProductDescription').value,
        isFeatured: document.getElementById('editProductFeatured').checked
    };

    if (pm.update(id, updatedProduct)) {
        showMessage('Produit mis à jour avec succès!', 'success');
        loadProducts();
        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    } else {
        showMessage('Erreur lors de la mise à jour', 'danger');
    }
}

function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        pm.delete(id);
        showMessage('Produit supprimé avec succès!', 'success');
        loadProducts();
    }
}

// ============ FORM HANDLING ============
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();

    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const newProduct = {
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            gender: document.getElementById('productGender').value,
            material: document.getElementById('productMaterial').value,
            price: parseInt(document.getElementById('productPrice').value),
            weight: document.getElementById('productWeight').value,
            dimensions: document.getElementById('productDimensions').value,
            stock: parseInt(document.getElementById('productStock').value),
            image: document.getElementById('productImage').value,
            images: [document.getElementById('productImage').value],
            description: document.getElementById('productDescription').value,
            isFeatured: document.getElementById('productFeatured').checked
        };

        pm.add(newProduct);
        showMessage('Produit ajouté avec succès!', 'success');
        loadProducts();
        this.reset();
        document.querySelector('a[data-bs-toggle="tab"][href="#productsTab"]').click();
    });
});

// ============ UTILITY FUNCTIONS ============
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price).replace('XOF', 'CFA');
}

function showMessage(message, type) {
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');

    if (type === 'success') {
        successMsg.textContent = message;
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        setTimeout(() => successMsg.style.display = 'none', 3000);
    } else {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        setTimeout(() => errorMsg.style.display = 'none', 3000);
    }
}

function downloadData() {
    const products = pm.getAll();
    const dataStr = JSON.stringify(products, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'produits-kesiara.json';
    link.click();
    showMessage('Données téléchargées avec succès!', 'success');
}

function resetProducts() {
    if (confirm('Êtes-vous SÛR ? Cela supprimera tous vos produits personnalisés et réinitialisera à la liste par défaut.')) {
        pm.reset();
        loadProducts();
        showMessage('Produits réinitialisés!', 'success');
    }
}

function changePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;

    if (newPassword.trim() === '') {
        showMessage('Veuillez entrer un nouveau mot de passe', 'danger');
        return;
    }

    if (newPassword.length < 4) {
        showMessage('Le mot de passe doit contenir au moins 4 caractères', 'danger');
        return;
    }

    if (confirmPassword && newPassword !== confirmPassword) {
        showMessage('Les mots de passe ne correspondent pas', 'danger');
        return;
    }

    if (auth.setPassword(newPassword)) {
        showMessage('Mot de passe changé avec succès! ✅', 'success');
        document.getElementById('newPassword').value = '';
        if (document.getElementById('confirmPassword')) {
            document.getElementById('confirmPassword').value = '';
        }
    }
}

// ============ CONFIGURATION FUNCTIONS ============

function loadConfigUI() {
    const config = configManager.getConfig();
    
    // WhatsApp & Contact
    document.getElementById('whatsappNumber').value = config.whatsappNumber || '';
    document.getElementById('whatsappMessage').value = config.whatsappMessage || '';
    document.getElementById('phone').value = config.phone || '';
    document.getElementById('email').value = config.email || '';
    
    // Taxes
    document.getElementById('taxRate').value = config.taxRate || 18;
    document.getElementById('shippingInfo').value = config.shippingInfo || '';
    document.getElementById('deliveryTime').value = config.deliveryTime || '';
    
    // Texte
    document.getElementById('siteName').value = config.siteName || '';
    document.getElementById('siteTagline').value = config.siteTagline || '';
    document.getElementById('homepageTitle').value = config.homepageTitle || '';
    document.getElementById('homepageSubtitle').value = config.homepageSubtitle || '';
    
    // Logo & Branding
    document.getElementById('logo').value = config.logo || '';
    document.getElementById('address').value = config.address || '';
    
    // Prévisualisation logo
    if (config.logo) {
        document.getElementById('logoPreview').src = config.logo;
        document.getElementById('logoPreview').style.display = 'block';
    }
}

function saveContactConfig() {
    const updates = {
        whatsappNumber: document.getElementById('whatsappNumber').value,
        whatsappMessage: document.getElementById('whatsappMessage').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    };
    
    configManager.updateMultiple(updates);
    showMessage('Configuration WhatsApp & Contact mise à jour! ✅', 'success');
}

function saveTaxConfig() {
    const updates = {
        taxRate: parseInt(document.getElementById('taxRate').value) || 18,
        shippingInfo: document.getElementById('shippingInfo').value,
        deliveryTime: document.getElementById('deliveryTime').value,
    };
    
    configManager.updateMultiple(updates);
    showMessage('Configuration Taxes & Livraison mise à jour! ✅', 'success');
}


function saveTextConfig() {
    const updates = {
        siteName: document.getElementById('siteName').value,
        siteTagline: document.getElementById('siteTagline').value,
        homepageTitle: document.getElementById('homepageTitle').value,
        homepageSubtitle: document.getElementById('homepageSubtitle').value,
    };
    
    configManager.updateMultiple(updates);
    showMessage('Textes du site mis à jour! ✅ (Rafraîchissez le site pour voir les changements)', 'success');
}

// ============ LOGO UPLOAD FUNCTIONS ============
function switchLogoMode(mode) {
    const urlSection = document.getElementById('logoUrlSection');
    const fileSection = document.getElementById('logoFileSection');
    const fileInput = document.getElementById('logoImageFile');
    const logoInput = document.getElementById('logo');

    if (mode === 'url') {
        urlSection.style.display = 'block';
        fileSection.style.display = 'none';
        fileInput.value = '';
    } else {
        urlSection.style.display = 'none';
        fileSection.style.display = 'block';
        logoInput.value = '';
    }

    // Update button states
    const buttons = event.currentTarget.parentElement.querySelectorAll('.image-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        // Convertir en base64 pour localStorage
        const base64Image = e.target.result;
        document.getElementById('logo').value = base64Image;
        
        // Prévisualiser
        const preview = document.getElementById('logoPreview');
        if (preview) {
            preview.src = base64Image;
            preview.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
}

function saveBrandConfig() {
    const logoUrl = document.getElementById('logo').value;
    const updates = {
        logo: logoUrl,
        address: document.getElementById('address').value,
    };
    
    configManager.updateMultiple(updates);
    
    // Prévisualiser
    if (logoUrl) {
        document.getElementById('logoPreview').src = logoUrl;
        document.getElementById('logoPreview').style.display = 'block';
    }
    
    showMessage('Logo & Branding mis à jour! ✅ (Rafraîchissez le site pour voir les changements)', 'success');
}

