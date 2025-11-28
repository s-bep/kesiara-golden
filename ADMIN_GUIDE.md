# Guide d'Administration - Kesiara Golden

## 🔐 Connexion
- **URL**: Ouvrez `admin.html` dans votre navigateur
- **Mot de passe par défaut**: `226kesiara`
- **Changement de mot de passe**: Onglet "⚙️ Paramètres" > Sécurité

---

## 🌐 Modifier le Contenu du Site Principal

### Onglet "🌐 Contenu du Site"

Cet onglet vous permet de personnaliser tous les textes et images de votre page d'accueil.

#### 📝 Textes de la Page d'Accueil
- **Titre Principal**: Le grand titre sur la bannière d'accueil (ex: "KESIARA GOLDEN")
- **Sous-titre**: Le texte sous le titre principal (ex: "Bijoux d'exception en or massif")
- **Titre Section "À Propos"**: Le titre de la section À Propos
- **Texte "À Propos"**: Deux paragraphes pour décrire votre entreprise

#### 🖼️ Images du Site
Pour chaque image, vous avez **2 options** :

1. **🔗 URL** : Collez un lien direct vers une image en ligne
   - Exemple : `https://images.unsplash.com/photo-123456...`
   - Ou un chemin local : `Assets/LOGO.png`

2. **📁 Fichier** : Uploadez une image depuis votre ordinateur/téléphone
   - L'image sera automatiquement compressée
   - Elle sera stockée en base64 (pas besoin de serveur)

**Images disponibles** :
- **Logo du Site** : Logo dans la barre de navigation
- **Image Hero** : Arrière-plan de la bannière d'accueil
- **Logo Section "À Propos"** : Logo dans la section À Propos

#### 📞 Informations de Contact
- **WhatsApp** : Numéro sans espaces (ex: 22607270982)
- **Téléphone** : Format d'affichage (ex: +226 07 27 09 82)
- **Email** : Adresse email de contact
- **Adresse** : Localisation de votre entreprise

**💡 Important** : Après avoir modifié les textes ou images, **rafraîchissez la page d'accueil** pour voir les changements !

---

## 📦 Gestion des Produits

### Onglet "📦 Produits"
Affiche tous vos produits sous forme de cartes avec :
- Image du produit
- Nom et prix
- Catégorie et genre
- Boutons "Modifier" et "Supprimer"

### Onglet "➕ Ajouter"
Ajoutez un nouveau produit en remplissant tous les champs :

**Informations obligatoires** :
- Nom du Produit
- Catégorie (Colliers, Boucles d'oreilles, Bracelets, Bagues, Ensembles, Chaînes)
- Genre (Femme, Homme)
- Matériau (ex: Or 18K, Plaqué Or)
- Prix (en CFA)
- Stock (nombre d'unités disponibles)
- Image (URL ou fichier local)
- Description

**Informations optionnelles** :
- Poids (ex: 2.5g)
- Dimensions (ex: 45cm)
- En vedette (cochez pour afficher sur la page d'accueil)

**💡 Upload d'images** :
- **Option 1 - URL** : Collez un lien direct (recommandé pour Unsplash, ImgBB, etc.)
- **Option 2 - Fichier** : Uploadez depuis votre appareil (compression automatique)

---

## ⚙️ Paramètres

### 🔒 Sécurité
- Changez votre mot de passe administrateur
- Le mot de passe est hashé localement pour votre sécurité

### 💾 Données
- **Télécharger les données** : Sauvegardez vos produits en JSON
- **Réinitialiser** : Supprime tous vos produits (attention, irréversible !)

---

## 📱 Responsive Mobile

L'interface admin est **100% responsive** :
- Navigation horizontale avec scroll sur mobile
- Cartes produits adaptées aux petits écrans
- Formulaires optimisés pour le tactile
- Boutons pleine largeur sur mobile

---

## 💡 Conseils d'Utilisation

### Images
1. **Privilégiez les URLs** pour les images publiques (Unsplash, ImgBB)
2. **Uploadez des fichiers** uniquement si vous n'avez pas d'hébergement d'images
3. Les images sont automatiquement compressées à 800px max
4. Format recommandé : JPG (meilleure compression)

### Produits
1. Marquez 3-4 produits "En vedette" pour la page d'accueil
2. Utilisez des descriptions claires et concises
3. Ajoutez plusieurs images si possible (améliore la conversion)
4. Gardez vos stocks à jour

### Performance
- Les données sont stockées dans le navigateur (localStorage)
- Pas besoin de serveur ou base de données
- Les modifications sont instantanées
- Pensez à sauvegarder régulièrement vos données

---

## 🆘 Dépannage

**Je ne vois pas mes changements sur le site** :
- Rafraîchissez la page avec `Ctrl+F5` (ou `Cmd+Shift+R` sur Mac)
- Videz le cache du navigateur

**L'image ne s'affiche pas** :
- Vérifiez que l'URL est correcte et accessible
- Pour les fichiers uploadés, vérifiez que l'upload s'est bien terminé
- Essayez de réuploader l'image

**J'ai oublié mon mot de passe** :
- Ouvrez la console du navigateur (F12)
- Tapez : `localStorage.removeItem('kesiara_auth')`
- Rafraîchissez la page
- Le mot de passe sera réinitialisé à `226kesiara`

**Mes produits ont disparu** :
- Si vous aviez une sauvegarde JSON, importez-la
- Sinon, vous devrez les recréer manuellement
- **Conseil** : Téléchargez régulièrement vos données !

---

## 📧 Support

Pour toute question ou assistance, contactez votre développeur web.

**Version** : 2.0
**Dernière mise à jour** : Janvier 2025
