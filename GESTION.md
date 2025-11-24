# 📊 GUIDE DE GESTION - KESIARA GOLDEN

## 🎯 Vue d'Ensemble

Votre site est maintenant **live sur Render** et vous pouvez le gérer complètement sans coder !

### 🌍 URLs Principales
- **Site Principal:** https://kesiara-golden.onrender.com
- **Admin Panel:** https://kesiara-golden.onrender.com/admin.html
- **GitHub Repo:** https://github.com/s-bep/kesiara-golden

---

## 👤 GESTION DES PRODUITS (Admin Panel)

### Accès Admin
1. Allez sur: **https://kesiara-golden.onrender.com/admin.html**
2. Mot de passe: **`226kesiara`**
3. Vous êtes connecté ! ✅

### 3 Onglets Disponibles

#### 📦 **1. Mes Produits**
- Voir **tous vos produits** en grille
- **Modifier:** Cliquez le bouton jaune "Modifier"
- **Supprimer:** Cliquez le bouton rouge "Supprimer"
- Les changements sont **instantanés** sur le site

#### ➕ **2. Ajouter Produit**
Remplissez le formulaire:
- **Nom** (obligatoire)
- **Catégorie:** Colliers, Boucles d'oreilles, Bracelets, Bagues, Ensembles, Chaînes
- **Genre:** Femme, Homme
- **Matériau:** Or 18K, Or 14K, Plaqué Or, Or blanc, etc.
- **Prix** (en XOF/CFA)
- **Poids & Dimensions** (optionnel)
- **Stock** (nombre disponible)
- **Image URL** (voir section Images ci-dessous)
- **Description**
- **En vedette?** (checkbox pour les produits importants)

**Conseil:** Copiez-collez un produit existant pour avoir la même qualité d'image.

#### ⚙️ **3. Paramètres**
- **Télécharger données:** Sauvegarde JSON de tous vos produits
- **Réinitialiser produits:** Retour à la liste par défaut (⚠️ attention!)
- **Changer mot de passe:** Voir section "Sécurité" ci-dessous

---

## 🖼️ GESTION DES IMAGES

### Où Trouver les Meilleures Images?

**Recommandé: Unsplash (100% gratuit, haute qualité)**
1. Allez sur https://unsplash.com
2. Cherchez: "jewelry", "gold necklace", "earrings", "bracelet", "ring", etc.
3. Ouvrez la photo
4. Copiez l'ID dans l'URL: `photo-XXXXXX`

### Format URL Complet

```
https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop
```

### Exemples par Catégorie

| Catégorie | Search | Photo ID |
|-----------|--------|----------|
| Colliers | "gold necklace" | photo-1535632066927 |
| Boucles | "gold earrings" | photo-1611591437281 |
| Bracelets | "gold bracelet" | photo-1515562141207 |
| Bagues | "gold ring" | photo-1535632066927 |
| Chaînes | "gold chain" | photo-1599643478518 |

### Comment Changer une Image?

1. **Admin Panel** → **Mes Produits**
2. Cliquez **"Modifier"** sur le produit
3. Changez le champ **"Image (URL)"**
4. Cliquez **"Enregistrer"**
5. Image changée instantanément! ✨

---

## 💰 GESTION DES PRIX & STOCK

### Modifier un Prix

1. **Admin Panel** → **Mes Produits**
2. Cliquez **"Modifier"**
3. Changez le **"Prix (CFA)"**
4. Enregistrez → Prix mis à jour sur le site immédiatement

### Gérer le Stock

Le champ **"Stock"** indique:
- Nombre d'unités disponibles
- Affiche "En stock" ou "Rupture" sur le site
- À vous de le mettre à jour manuellement

**Conseil:** Baissez le stock de 1 chaque fois qu'un client commande.

---

## 📱 COMMANDES CLIENTS

### Comment Fonctionnent les Commandes?

1. **Client clique "Commander"** sur un produit
2. **WhatsApp s'ouvre** avec un message pré-rempli
3. **Message inclut:**
   - Nom du produit
   - Quantité
   - Prix total (+ 18% TVA)
4. **Vous recevez le message** sur +226 07 27 09 82

### Votre Numéro WhatsApp

Pour **changer** le numéro:

#### Option 1: Via Admin (+ code)
- Éditez `script.js` ligne ~450
- Trouvez: `const whatsappNumber = '22607270982';`
- Remplacez par votre numéro (sans +, sans espace)
- Push sur GitHub → Render redéploie automatiquement

#### Option 2: Simple (recommandé)
- Dites-moi votre numéro
- Je le change dans le code
- Je pousse vers GitHub

---

## 📊 ANALYTICS & DONNÉES

### Données Sauvegardées

Les données sont stockées dans **localStorage** (navigateur local):
- ✅ Chaque utilisateur a ses propres données
- ✅ Pas de serveur = pas de coûts
- ❌ Les données ne se synchronisent pas entre appareils

### Sauvegarde Complète

1. **Admin Panel** → **Paramètres**
2. Cliquez **"Télécharger les données"**
3. Un fichier JSON s'enregistre avec TOUS vos produits
4. **Gardez-le en sécurité!** (backup)

### Restaurer à partir d'une Sauvegarde

Si vous avez un fichier JSON:
1. Éditez `admin.js` 
2. Remplacez le contenu de `initializeStorage()` avec vos données
3. Push sur GitHub

---

## 🔐 SÉCURITÉ & MOT DE PASSE

### Changer le Mot de Passe Admin

Le mot de passe par défaut est: **`226kesiara`**

Pour le changer:

1. **Dans le code:** Éditez `admin.js` ligne 2
```javascript
const ADMIN_PASSWORD = 'votre-nouveau-mot-de-passe';
```

2. **Via GitHub Desktop** (plus simple):
   - Changez le mot de passe
   - Commitez: "Update admin password"
   - Push → Render redéploie

3. **Dites-moi le nouveau mot de passe**, je le change pour vous

### Sécurité WhatsApp

- Le lien WhatsApp est **public** (visible dans le code)
- C'est normal! Les clients doivent pouvoir cliquer
- Pour bloquer: Utilisez les paramètres de confidentialité WhatsApp

---

## 🔄 MISES À JOUR & DÉPLOIEMENT

### Flux de Mise à Jour

```
1. Modifier le code en local
2. git add .
3. git commit -m "Description"
4. git push origin main
5. Render redéploie automatiquement (2-3 min)
```

### Quoi Modifier?

**index.html, products.html, etc.:**
- Textes, descriptions
- Liens, menus
- Couleurs (styles.css)

**admin.html, admin.js:**
- Interface d'administration
- Logique de gestion

**script.js:**
- Logique métier
- Intégration WhatsApp
- Panier

---

## 📈 OPTIMISATION & SEO

### Améliorer le Classement Google

1. **Soumettre sitemap:**
   - https://search.google.com/search-console
   - Ajoutez: https://kesiara-golden.onrender.com/sitemap.xml

2. **Meta descriptions:** Modifiez dans les fichiers HTML
```html
<meta name="description" content="Bijoux luxe en or - Kesiara Golden">
```

3. **Backlinks:** Partagez sur réseaux sociaux (Facebook, Instagram)

---

## 🎨 PERSONNALISATION DESIGN

### Changer les Couleurs

Éditez `styles.css`:
- **Or:** `#C9A961` → autre couleur
- **Noir:** `#1a1a1a` → autre couleur
- **Blanc:** `#f8f8f8` → autre couleur

### Changer les Polices

Dans `styles.css`:
```css
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}
```

Remplacez par une autre de Google Fonts.

---

## ❓ QUESTIONS FRÉQUENTES

### Q: Où vont les données des produits?
**R:** Dans le localStorage du navigateur. À sauvegarder via Admin Panel.

### Q: Comment ajouter un nouveau produit?
**R:** Admin Panel → Onglet "Ajouter Produit" → Remplissez le formulaire.

### Q: Un produit n'apparaît pas?
**R:** Vérifiez:
- L'image URL est valide
- Vous avez cliqué "Ajouter"
- Rafraîchissez la page

### Q: Comment faire un backup?
**R:** Admin Panel → Paramètres → "Télécharger les données"

### Q: Puis-je avoir un domaine personnalisé?
**R:** Oui! Render vous permet d'ajouter votre domaine (payant chez un registrar)

### Q: Comment ajouter Google Analytics?
**R:** Ajoutez ce code dans le `<head>` de index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 📞 SUPPORT IMMÉDIAT

| Besoin | Solution | Temps |
|--------|----------|--------|
| Ajouter produit | Admin Panel | 2 min |
| Changer prix | Admin Panel | 1 min |
| Changer image | Admin Panel | 1 min |
| Changer texte/design | Éditez fichier HTML | 5 min + redéploiement |
| Changer mot de passe | Éditez admin.js | 5 min + redéploiement |
| Sauvegarder données | Admin Panel → Télécharger | 1 min |

---

## ✅ CHECKLIST QUOTIDIENNE

- [ ] Vérifier WhatsApp pour nouvelles commandes
- [ ] Mettre à jour le stock si nécessaire
- [ ] Vérifier les prix actuels
- [ ] Faire backup des données (hebdo)

---

**Vous êtes maintenant autonome pour gérer votre site! 🎉**

Des questions? Dites-moi ce que vous voulez modifier!
