# 🚀 GUIDE DE DÉPLOIEMENT - KESIARA GOLDEN

## ⚡ Résumé Rapide

Votre site est maintenant prêt pour être déployé gratuitement sur **Render**.

### Étapes (5 minutes)

1. **Créer un repo GitHub**
2. **Pousser le code vers GitHub**
3. **Connecter à Render**
4. **Déployer et accéder au site**

---

## 📌 ÉTAPE 1 : Créer un Repo GitHub

### Via GitHub.com

1. Allez sur https://github.com/new
2. Remplissez:
   - **Repository name:** `kesiara-golden` (ou votre choix)
   - **Description:** "Site e-commerce bijoux luxe"
   - **Public** (pour que Render puisse accéder)
   - **Ne pas** initialiser avec README (vous en avez déjà un)
3. Cliquez **"Create repository"**

GitHub vous donnera une URL comme: `https://github.com/VOTRE_USERNAME/kesiara-golden.git`

---

## 📌 ÉTAPE 2 : Pousser le Code vers GitHub

### Dans le Terminal PowerShell

```powershell
cd "c:\Users\perat\OneDrive\Documents\Entreprise\Kesiara Golden\Web site KG"

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/kesiara-golden.git

# Renommer la branche (moderne)
git branch -M main

# Pousser le code
git push -u origin main
```

⚠️ **Remplacez `VOTRE_USERNAME`** par votre username GitHub.

**Important:** Git vous demandera votre authentification. Vous pouvez:
- Utiliser votre **token GitHub** (recommandé) → Créer sur https://github.com/settings/tokens
- Ou configurer SSH

---

## 📌 ÉTAPE 3 : Configurer Render

### 1. Créer un compte Render

- Allez sur https://render.com
- Inscrivez-vous avec GitHub (plus facile)
- Autorisez Render à accéder à vos repos

### 2. Créer un "Static Site"

1. Dashboard Render → **"New +"** → **"Static Site"**
2. Remplissez:
   - **Name:** `kesiara-golden` (ou votre choix)
   - **GitHub Repo:** Sélectionnez votre repo `kesiara-golden`
   - **Build Command:** Laissez vide (site statique)
   - **Publish directory:** `.` (racine)
3. Cliquez **"Create Static Site"**

### 3. Attendre le déploiement

Render va:
1. ✅ Builder le site (copier les fichiers)
2. ✅ Générer une URL: `https://kesiara-golden.onrender.com`
3. ✅ Mettre en ligne automatiquement

**Status:** Regardez le "Deploys" en haut - devrait être "Live" en vert.

---

## ✅ ÉTAPE 4 : Tester le Site

### URLs Disponibles

- **Accueil:** https://kesiara-golden.onrender.com/
- **Produits:** https://kesiara-golden.onrender.com/products.html
- **Admin:** https://kesiara-golden.onrender.com/admin.html
- **Panier:** https://kesiara-golden.onrender.com/cart.html

### Admin Panel

**Mot de passe:** `226kesiara`

Vous pouvez ajouter/modifier/supprimer des produits directement !

---

## 🔄 Mises à Jour Futures

Chaque fois que vous modifiez le code en local:

```powershell
cd "c:\Users\perat\OneDrive\Documents\Entreprise\Kesiara Golden\Web site KG"

# Faire les modifications...

git add .
git commit -m "Description de vos changements"
git push origin main
```

Render va **automatiquement redéployer** le site en 1-2 minutes ! 🎉

---

## 🎁 Bonus: Domaine Personnalisé

Si vous voulez `kesiara-golden.bf` au lieu de `onrender.com`:

1. **Dans Render:** Settings → Custom Domain → Entrez votre domaine
2. **Chez votre registrar:** Ajoutez les DNS records que Render donne
3. Attendez 24-48h pour la propagation

---

## ❓ Problèmes Communs

### "Build failed"
→ Vérifiez que tous les fichiers `.html`, `.css`, `.js` sont dans le repo

### "Site not loading"
→ Allez dans "Logs" de Render et vérifiez les erreurs

### "Admin ne sauvegarde rien"
→ C'est normal ! Les données se sauvent dans le **localStorage** du navigateur (par appareil)

---

## 💾 Sauvegarder les Données Admin

Chaque client a ses propres données dans son navigateur. Pour sauvegarder:

1. Accédez au panneau admin
2. Onglet **"Paramètres"**
3. Cliquez **"Télécharger les données"**
4. Vous recevrez un fichier JSON

---

## 📞 Support Render

- Docs: https://render.com/docs
- Status: https://status.render.com
- Chat Support: Disponible pour les plans payants

---

## 🎯 Prochaines Étapes (Optionnel)

- [ ] Ajouter Google Analytics
- [ ] Configurer domaine personnalisé
- [ ] Ajouter SSL/HTTPS (automatique sur Render)
- [ ] Optimiser les images
- [ ] Créer une page de blog

---

**Vous êtes prêt ! 🚀 Commencez par l'ÉTAPE 1 et dites-moi si vous bloquez quelque part.**
