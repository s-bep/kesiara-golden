class AuthManager {
    constructor() {
        this.storageKey = 'kesiara_auth';
        this.initializeAuth();
    }

    initializeAuth() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultHash = this.simpleHash('226kesiara');
            localStorage.setItem(this.storageKey, defaultHash);
        }
    }

    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
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

async function compressImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                const maxDim = 800;
                if (width > height) {
                    if (width > maxDim) {
                        height = Math.round((height * maxDim) / width);
                        width = maxDim;
                    }
                } else {
                    if (height > maxDim) {
                        width = Math.round((width * maxDim) / height);
                        height = maxDim;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const compressed = canvas.toDataURL('image/jpeg', 0.75);
                resolve(compressed);
            };

            img.onerror = () => reject('Erreur de chargement de l\'image');
        };

        reader.onerror = () => reject('Erreur de lecture du fichier');
        reader.readAsDataURL(file);
    });
}

class ProductManager {
    constructor() {
        this.storageKey = 'kesiara_products';
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]));
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
        loadSiteContent();
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

function loadSiteContent() {
    const config = configManager.getConfig();

    // Textes
    setValue('heroTitle', config.heroTitle || 'KESIARA GOLDEN');
    setValue('heroSubtitle', config.heroSubtitle || 'Bijoux d\'exception en or massif');
    setValue('aboutTitle', config.aboutTitle || 'À PROPOS');
    setValue('aboutText1', config.aboutText1 || 'Kesiara Golden est une maison de bijouterie de luxe basée à Ouagadougou, Burkina Faso.');
    setValue('aboutText2', config.aboutText2 || 'Chaque bijou est un symbole de prestige et de raffinement.');

    // Images
    setImageValue('siteLogoUrl', 'siteLogoPreview', config.logo || 'Assets/LOGO.png');
    setImageValue('siteHeroUrl', 'siteHeroPreview', config.heroImage || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop');
    setImageValue('siteAboutUrl', 'siteAboutPreview', config.aboutImage || 'Assets/LOGO.png');

    // Contact
    setValue('siteWhatsapp', config.whatsappNumber || '22607270982');
    setValue('sitePhone', config.phone || '+226 07 27 09 82');
    setValue('siteEmail', config.email || 'info@kesiara-golden.bf');
    setValue('siteAddress', config.address || 'Ouagadougou, Burkina Faso');
}

function setValue(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value || '';
}

function setImageValue(urlId, previewId, value) {
    const urlEl = document.getElementById(urlId);
    const previewEl = document.getElementById(previewId);
    if (urlEl) urlEl.value = value || '';
    if (previewEl && value) {
        previewEl.src = value;
        previewEl.style.display = 'block';
    }
}

function saveSiteTexts() {
    const updates = {
        heroTitle: document.getElementById('heroTitle').value,
        heroSubtitle: document.getElementById('heroSubtitle').value,
        aboutTitle: document.getElementById('aboutTitle').value,
        aboutText1: document.getElementById('aboutText1').value,
        aboutText2: document.getElementById('aboutText2').value,
    };

    configManager.updateMultiple(updates);
    showMessage('✅ Textes du site mis à jour! Rafraîchissez la page d\'accueil pour voir les changements.', 'success');
}

function saveSiteImages() {
    const updates = {
        logo: document.getElementById('siteLogoUrl').value,
        heroImage: document.getElementById('siteHeroUrl').value,
        aboutImage: document.getElementById('siteAboutUrl').value,
    };

    configManager.updateMultiple(updates);
    showMessage('✅ Images du site mises à jour! Rafraîchissez la page d\'accueil pour voir les changements.', 'success');
}

function saveSiteContact() {
    const updates = {
        whatsappNumber: document.getElementById('siteWhatsapp').value,
        phone: document.getElementById('sitePhone').value,
        email: document.getElementById('siteEmail').value,
        address: document.getElementById('siteAddress').value,
    };

    configManager.updateMultiple(updates);
    showMessage('✅ Informations de contact mises à jour!', 'success');
}

function switchSiteImageMode(imageType, mode) {
    const urlInput = document.getElementById(`site${imageType.charAt(0).toUpperCase() + imageType.slice(1)}Url`);
    const fileInput = document.getElementById(`site${imageType.charAt(0).toUpperCase() + imageType.slice(1)}File`);

    // Update button states
    const buttons = event.currentTarget.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (mode === 'url') {
        urlInput.style.display = 'block';
        fileInput.style.display = 'none';
        fileInput.value = '';
    } else {
        urlInput.style.display = 'none';
        fileInput.style.display = 'block';
        urlInput.value = '';
    }
}

async function handleSiteImageUpload(event, imageType) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showMessage('❌ Veuillez sélectionner une image valide', 'error');
        return;
    }

    try {
        showMessage('⏳ Compression de l\'image en cours...', 'success');
        const base64Image = await compressImageToBase64(file);

        const urlInput = document.getElementById(`site${imageType.charAt(0).toUpperCase() + imageType.slice(1)}Url`);
        const preview = document.getElementById(`site${imageType.charAt(0).toUpperCase() + imageType.slice(1)}Preview`);

        if (urlInput) urlInput.value = base64Image;
        if (preview) {
            preview.src = base64Image;
            preview.style.display = 'block';
        }

        showMessage('✅ Image compressée avec succès!', 'success');
    } catch (error) {
        showMessage('❌ Erreur: ' + error, 'error');
        event.target.value = '';
    }
}

function switchProductImageMode(mode) {
    const urlInput = document.getElementById('productImageUrl');
    const fileInput = document.getElementById('productImageFile');

    const buttons = event.currentTarget.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (mode === 'url') {
        urlInput.style.display = 'block';
        fileInput.style.display = 'none';
        fileInput.value = '';
    } else {
        urlInput.style.display = 'none';
        fileInput.style.display = 'block';
        urlInput.value = '';
    }
}

async function handleProductImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showMessage('❌ Veuillez sélectionner une image valide', 'error');
        return;
    }

    try {
        showMessage('⏳ Compression de l\'image en cours...', 'success');
        const base64Image = await compressImageToBase64(file);

        document.getElementById('productImageUrl').value = base64Image;
        const preview = document.getElementById('productPreview');
        if (preview) {
            preview.src = base64Image;
            preview.style.display = 'block';
        }

        showMessage('✅ Image compressée avec succès!', 'success');
    } catch (error) {
        showMessage('❌ Erreur: ' + error, 'error');
        event.target.value = '';
    }
}

function switchEditImageMode(mode) {
    const urlInput = document.getElementById('editProductImageUrl');
    const fileInput = document.getElementById('editProductImageFile');

    const buttons = event.currentTarget.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (mode === 'url') {
        urlInput.style.display = 'block';
        fileInput.style.display = 'none';
        fileInput.value = '';
    } else {
        urlInput.style.display = 'none';
        fileInput.style.display = 'block';
        urlInput.value = '';
    }
}

async function handleEditImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showMessage('❌ Veuillez sélectionner une image valide', 'error');
        return;
    }

    try {
        showMessage('⏳ Compression de l\'image en cours...', 'success');
        const base64Image = await compressImageToBase64(file);

        document.getElementById('editProductImageUrl').value = base64Image;
        const preview = document.getElementById('editProductPreview');
        if (preview) {
            preview.src = base64Image;
            preview.style.display = 'block';
        }

        showMessage('✅ Image compressée avec succès!', 'success');
    } catch (error) {
        showMessage('❌ Erreur: ' + error, 'error');
        event.target.value = '';
    }
}

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
    document.getElementById('editProductImageUrl').value = product.image;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductFeatured').checked = product.isFeatured;

    // Preview image
    if (product.image) {
        const preview = document.getElementById('editProductPreview');
        if (preview) {
            preview.src = product.image;
            preview.style.display = 'block';
        }
    }

    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function saveEditedProduct() {
    const id = parseInt(document.getElementById('editProductId').value);
    const imageUrl = document.getElementById('editProductImageUrl').value;

    const updatedProduct = {
        name: document.getElementById('editProductName').value,
        category: document.getElementById('editProductCategory').value,
        gender: document.getElementById('editProductGender').value,
        material: document.getElementById('editProductMaterial').value,
        price: parseInt(document.getElementById('editProductPrice').value),
        weight: document.getElementById('editProductWeight').value,
        dimensions: document.getElementById('editProductDimensions').value,
        stock: parseInt(document.getElementById('editProductStock').value),
        image: imageUrl,
        images: [imageUrl],
        description: document.getElementById('editProductDescription').value,
        isFeatured: document.getElementById('editProductFeatured').checked
    };

    if (pm.update(id, updatedProduct)) {
        showMessage('✅ Produit mis à jour avec succès!', 'success');
        loadProducts();
        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    } else {
        showMessage('Erreur lors de la mise à jour', 'error');
    }
}

function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        pm.delete(id);
        showMessage('✅ Produit supprimé avec succès!', 'success');
        loadProducts();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();

    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const imageUrl = document.getElementById('productImageUrl').value;

        const newProduct = {
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            gender: document.getElementById('productGender').value,
            material: document.getElementById('productMaterial').value,
            price: parseInt(document.getElementById('productPrice').value),
            weight: document.getElementById('productWeight').value,
            dimensions: document.getElementById('productDimensions').value,
            stock: parseInt(document.getElementById('productStock').value),
            image: imageUrl,
            images: [imageUrl],
            description: document.getElementById('productDescription').value,
            isFeatured: document.getElementById('productFeatured').checked
        };

        pm.add(newProduct);
        showMessage('✅ Produit ajouté avec succès!', 'success');
        loadProducts();
        this.reset();
        document.querySelector('a[data-bs-toggle="tab"][href="#productsTab"]').click();
    });
});

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
        setTimeout(() => successMsg.style.display = 'none', 4000);
    } else {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        setTimeout(() => errorMsg.style.display = 'none', 4000);
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
    showMessage('✅ Données téléchargées avec succès!', 'success');
}

function resetProducts() {
    if (confirm('Êtes-vous SÛR ? Cela supprimera tous vos produits.')) {
        pm.reset();
        loadProducts();
        showMessage('✅ Produits réinitialisés!', 'success');
    }
}

function changePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;

    if (newPassword.trim() === '') {
        showMessage('❌ Veuillez entrer un nouveau mot de passe', 'error');
        return;
    }

    if (newPassword.length < 4) {
        showMessage('❌ Le mot de passe doit contenir au moins 4 caractères', 'error');
        return;
    }

    if (confirmPassword && newPassword !== confirmPassword) {
        showMessage('❌ Les mots de passe ne correspondent pas', 'error');
        return;
    }

    if (auth.setPassword(newPassword)) {
        showMessage('✅ Mot de passe changé avec succès!', 'success');
        document.getElementById('newPassword').value = '';
        if (document.getElementById('confirmPassword')) {
            document.getElementById('confirmPassword').value = '';
        }
    }
}
