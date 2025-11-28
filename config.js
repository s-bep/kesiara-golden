class ConfigManager {
    constructor() {
        this.storageKey = 'kesiara_config';
        this.initializeConfig();
    }

    initializeConfig() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultConfig = {
                siteName: 'Kesiara Golden',
                siteTagline: 'Bijoux de Luxe - Or 18K',
                logo: 'Assets/LOGO.png',
                heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=1200&fit=crop',
                aboutImage: 'Assets/LOGO.png',
                whatsappNumber: '22607270982',
                whatsappMessage: 'Je suis intéressé par',
                heroTitle: 'KESIARA GOLDEN',
                heroSubtitle: 'Bijoux d\'exception en or massif',
                aboutTitle: 'À PROPOS',
                aboutText1: 'Kesiara Golden est une maison de bijouterie de luxe basée à Ouagadougou, Burkina Faso. Depuis des années, nous créons des pièces d\'exception en or massif et plaqué or, avec un souci du détail et de l\'élégance.',
                aboutText2: 'Chaque bijou est un symbole de prestige et de raffinement, conçu pour ceux qui apprécient la beauté intemporelle.',
                taxRate: 18,
                primaryColor: '#C9A961',
                secondaryColor: '#1a1a1a',
                shippingInfo: 'Livraison gratuite pour toute commande',
                deliveryTime: '2-3 jours ouvrables',
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

const configManager = new ConfigManager();

function getWhatsappNumber() {
    return configManager.getValue('whatsappNumber', '22607270982');
}

function getWhatsappMessage() {
    return configManager.getValue('whatsappMessage', 'Je suis intéressé par');
}

function getTaxRate() {
    return configManager.getValue('taxRate', 18);
}

function priceWithTax(basePrice) {
    const taxRate = getTaxRate();
    return basePrice * (1 + taxRate / 100);
}

function getSiteInfo() {
    return {
        name: configManager.getValue('siteName', 'Kesiara Golden'),
        tagline: configManager.getValue('siteTagline', 'Bijoux de Luxe - Or 18K'),
        logo: configManager.getValue('logo', 'Assets/LOGO.png'),
        whatsapp: getWhatsappNumber(),
        taxRate: getTaxRate(),
    };
}
