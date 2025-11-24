// ============ SITE CONFIGURATION MANAGER ============
// Gère tous les paramètres du site: texte, logo, WhatsApp, taxes, etc.

class ConfigManager {
    constructor() {
        this.storageKey = 'kesiara_config';
        this.initializeConfig();
    }

    initializeConfig() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultConfig = {
                // Informations générales
                siteName: 'Kesiara Golden',
                siteTagline: 'Bijoux de Luxe - Or 18K',
                
                // Logo
                logo: 'Assets/LOGO.png',
                
                // Contact WhatsApp
                whatsappNumber: '22607270982',
                whatsappMessage: 'Je suis intéressé par',
                
                // Textes pages
                homepageTitle: 'KESIARA GOLDEN',
                homepageSubtitle: 'Bijoux de Luxe - Or 18K',
                homepageDescription: 'Découvrez notre collection exclusive de bijoux en or massif.',
                
                aboutText: 'Kesiara Golden propose des bijoux haut de gamme en or 18K, conçus pour sublimer votre style.',
                
                // Taxes
                taxRate: 18, // En pourcentage
                
                // Couleurs (optionnel)
                primaryColor: '#C9A961',
                secondaryColor: '#1a1a1a',
                
                // Livraison
                shippingInfo: 'Livraison gratuite pour toute commande',
                deliveryTime: '2-3 jours ouvrables',
                
                // Adresse/Contact
                address: 'Ouagadougou, Burkina Faso',
                phone: '+226 07 27 09 82',
                email: 'info@kesiara-golden.bf',
            };

            localStorage.setItem(this.storageKey, JSON.stringify(defaultConfig));
        }
    }

    getConfig() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || {};
    }

    updateConfig(key, value) {
        const config = this.getConfig();
        config[key] = value;
        localStorage.setItem(this.storageKey, JSON.stringify(config));
        return true;
    }

    updateMultiple(updates) {
        const config = this.getConfig();
        Object.assign(config, updates);
        localStorage.setItem(this.storageKey, JSON.stringify(config));
        return true;
    }

    resetConfig() {
        localStorage.removeItem(this.storageKey);
        this.initializeConfig();
    }

    getValue(key, defaultValue = null) {
        const config = this.getConfig();
        return config[key] !== undefined ? config[key] : defaultValue;
    }
}

// Instance globale
const configManager = new ConfigManager();

// ============ UTILITY FUNCTIONS ============

// Obtenir le numéro WhatsApp
function getWhatsappNumber() {
    return configManager.getValue('whatsappNumber', '22607270982');
}

// Obtenir le message WhatsApp
function getWhatsappMessage() {
    return configManager.getValue('whatsappMessage', 'Je suis intéressé par');
}

// Obtenir le taux de taxe
function getTaxRate() {
    return configManager.getValue('taxRate', 18);
}

// Calculer le prix avec taxe
function priceWithTax(basePrice) {
    const taxRate = getTaxRate();
    return basePrice * (1 + taxRate / 100);
}

// Obtenir les infos du site
function getSiteInfo() {
    return {
        name: configManager.getValue('siteName', 'Kesiara Golden'),
        tagline: configManager.getValue('siteTagline', 'Bijoux de Luxe - Or 18K'),
        logo: configManager.getValue('logo', 'Assets/LOGO.png'),
        whatsapp: getWhatsappNumber(),
        taxRate: getTaxRate(),
    };
}
