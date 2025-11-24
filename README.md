# 🌟 Kesiara Golden - Site E-Commerce Bijoux Luxe

Site e-commerce professionnel pour Kesiara Golden (Ouagadougou, Burkina Faso). Vente en ligne de bijoux haut de gamme en or et plaqué or.

## ✨ Caractéristiques

- **Design Minimaliste Occidental Luxe** - Esthétique premium avec typographie Playfair Display
- **E-Commerce Complet** - Panier, filtrage, détails produit
- **Intégration WhatsApp** - Commande directe via WhatsApp (+226 07 27 09 82)
- **Panneau d'Administration** - Gérez vos produits sans coder
- **Responsive Mobile** - Adapté à tous les écrans
- **SEO Optimisé** - Sitemap, robots.txt, meta-tags

## 📁 Structure

```
.
├── index.html              # Page d'accueil
├── products.html           # Catalogue produits
├── product-detail.html     # Détail d'un produit
├── cart.html              # Panier & checkout WhatsApp
├── admin.html             # Panneau d'administration
├── privacy.html           # Politique de confidentialité
├── terms.html             # Conditions d'utilisation
├── styles.css             # Styles minimalistes
├── script.js              # Logique métier (gestion produits, panier)
├── admin.js               # Logique admin (ajouter/modifier/supprimer)
├── sitemap.xml            # SEO
├── robots.txt             # SEO
└── .htaccess              # Configuration serveur
```

## 🚀 Déploiement

### Sur Render (Gratuit)

1. Créer un compte : https://render.com
2. Connecter votre repo GitHub
3. Créer un "Static Site"
4. Build command: `npm run build` (optionnel)
5. Publish directory: `.` ou `.` (fichiers statiques)

### En local

```bash
# Cloner le repo
git clone <votre-repo>
cd "Web site KG"

# Ouvrir simplement dans un navigateur
open index.html
```

## 🔐 Panneau Admin

**URL:** `/admin.html`
**Mot de passe par défaut:** `226kesiara`

### Fonctionnalités
- ✅ Ajouter/modifier/supprimer produits
- ✅ Gérer stock et prix
- ✅ Marquer produits en vedette
- ✅ Télécharger données (backup)
- ✅ Réinitialiser produits

Les données sont sauvegardées dans le **localStorage du navigateur** (aucune base de données needed).

## 💳 Intégration WhatsApp

Tout client peut commander directement via WhatsApp. Le message inclut:
- Nom du produit
- Quantité
- Prix total (+ 18% TVA)

**Numéro WhatsApp:** +226 07 27 09 82

## 🎨 Design System

- **Couleur Or:** #C9A961 (éléments clés, hover)
- **Couleur Foncée:** #1a1a1a (texte, navbar)
- **Couleur Claire:** #f8f8f8 (fond)
- **Police Titre:** Playfair Display (serif, luxe)
- **Police Corps:** Lato (sans-serif, lisibilité)

## 📦 Produits Actuels (9)

1. Collier Or 18K Chaîne Classique
2. Boucles d'Oreilles Plaqué Or Perles
3. Bracelet Or Homme Maillé
4. Bague de Fiançailles Or Blanc
5. Ensemble Collier + Boucles Plaqué Or
6. Chaîne Or Homme Figaro
7. Bracelet Femme Chaîne Plate
8. Bague Chevalière Homme Or
9. Boucles Chandelier Femme

## 🛠️ Personnalisation

### Modifier le numéro WhatsApp

Dans `script.js`, trouvez:
```javascript
const whatsappNumber = '22607270982';
```

### Changer le mot de passe admin

Dans `admin.js`, ligne 2:
```javascript
const ADMIN_PASSWORD = 'votre-nouveau-mot-de-passe';
```

### Modifier le nom de l'entreprise

Cherchez "Kesiara Golden" dans les fichiers HTML et remplacez par votre nom.

## 📱 Images Produits

Toutes les images proviennent de **Unsplash** (gratuit, haute qualité). 

Pour changer une image:
1. Allez sur https://unsplash.com
2. Recherchez une photo de bijou
3. Copiez l'ID photo (photo-XXXXXX)
4. Dans `admin.html`, URL format: `https://images.unsplash.com/photo-XXXXXX?w=500&h=500&fit=crop`

## 📊 Statistiques

- **Nombre de fichiers:** 12
- **Taille totale:** ~150 KB (très léger)
- **Temps de chargement:** < 2s sur 4G
- **Produits gérés:** Illimité (localStorage 5-10MB par navigateur)

## 🔗 Liens Utiles

- [Unsplash (images gratuit)](https://unsplash.com)
- [Render (hébergement)](https://render.com)
- [GitHub (versioning)](https://github.com)
- [Bootstrap (CSS framework)](https://getbootstrap.com)

## 📞 Support

Pour modifier les produits, utilisez le panneau admin.
Pour des changements techniques, modifiez les fichiers HTML/CSS/JS directement.

## 📄 License

© 2025 Kesiara Golden. Tous droits réservés.

---

**Version:** 2.0
**Date:** Novembre 2025
**Statut:** Production
