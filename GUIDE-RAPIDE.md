# ⚡ GUIDE RAPIDE - Actions Courantes

## 🚀 Tâches les Plus Fréquentes

### 1️⃣ Ajouter un Nouveau Produit (2 min)

**URL:** https://kesiara-golden.onrender.com/admin.html

```
1. Mot de passe: 226kesiara
2. Onglet: "Ajouter Produit"
3. Remplissez le formulaire
4. Cliquez "Ajouter le Produit"
✅ Produit visible immédiatement sur le site!
```

### 2️⃣ Modifier un Produit Existant (1 min)

```
1. Admin → "Mes Produits"
2. Cliquez le bouton jaune "Modifier"
3. Changez les champs
4. Cliquez "Enregistrer"
✅ Changement instantané sur le site!
```

### 3️⃣ Changer le Prix d'un Produit (30 sec)

```
1. Admin → "Mes Produits" → "Modifier"
2. Changez le champ "Prix (CFA)"
3. Cliquez "Enregistrer"
✅ Nouveau prix appliqué immédiatement!
```

### 4️⃣ Changer une Image Produit (1 min)

```
1. Trouvez une meilleure image: https://unsplash.com
   - Cherchez: "jewelry", "gold necklace", etc.
   - Ouvrez la photo
   - L'URL ressemble à: unsplash.com/photos/photo-XXXXX
   - Copiez l'ID: photo-XXXXX

2. Admin → "Mes Produits" → "Modifier"
3. Champ "Image (URL)":
   https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop

4. Cliquez "Enregistrer"
✅ Nouvelle image visible immédiatement!
```

### 5️⃣ Supprimer un Produit (30 sec)

```
1. Admin → "Mes Produits"
2. Cliquez le bouton rouge "Supprimer"
3. Confirmez la suppression
✅ Produit retiré du site!
```

### 6️⃣ Mettre à Jour le Stock (30 sec)

```
1. Admin → "Mes Produits" → "Modifier"
2. Champ "Stock": Changez le nombre
3. Cliquez "Enregistrer"
✅ Stock mis à jour!
```

### 7️⃣ Sauvegarder Toutes Vos Données (1 min)

```
1. Admin → Onglet "Paramètres"
2. Cliquez "Télécharger les données"
3. Fichier JSON téléchargé
✅ Backup en sécurité!
```

### 8️⃣ Réinitialiser les Produits (1 min)

```
⚠️ ATTENTION: Cela efface vos produits!

1. Admin → Onglet "Paramètres"
2. Cliquez "Réinitialiser les produits"
3. Confirmez
✅ Produits par défaut restaurés!
```

---

## 🎨 Personnalisation du Site

### Changer le Texte de la Page d'Accueil

**Fichier:** `index.html`

```html
<!-- Cherchez cette ligne et modifiez -->
<h1 class="hero-title">KESIARA GOLDEN</h1>
<p class="hero-subtitle">Bijoux de Luxe - Or 18K</p>
```

### Changer les Couleurs du Site

**Fichier:** `styles.css`

Cherchez et remplacez:
- `#C9A961` = Couleur or (éléments importants)
- `#1a1a1a` = Couleur noire (texte, navbar)
- `#f8f8f8` = Couleur blanche (fond)

### Changer le Numéro WhatsApp

**Fichier:** `script.js` (ligne ~450)

```javascript
// Trouvez cette ligne:
const whatsappNumber = '22607270982';

// Remplacez par votre numéro (sans +, sans espace):
const whatsappNumber = '22612345678';
```

Puis: `git add . && git commit -m "Update WhatsApp number" && git push`

### Changer le Mot de Passe Admin

**Fichier:** `admin.js` (ligne 2)

```javascript
// Trouvez:
const ADMIN_PASSWORD = '226kesiara';

// Remplacez:
const ADMIN_PASSWORD = 'votre-nouveau-mot-de-passe';
```

Puis: `git add . && git commit -m "Update admin password" && git push`

---

## 📲 Commandes Clients

### Comment Reçois-je les Commandes?

```
1. Client clique "Commander" sur le site
2. WhatsApp s'ouvre avec ce message:

"Je suis intéressé par Collier Or 18K Chaîne Classique (1x)"

3. Vous recevez sur: +226 07 27 09 82

✅ À vous de répondre directement via WhatsApp!
```

### Ajouter une Facture/Description

Répondez simplement sur WhatsApp:
```
Bonjour,
Le collier coûte 245 000 CFA.
Confirmez-vous votre commande?
Livraison: 2-3 jours
Merci!
```

---

## 🔄 Mettre le Site à Jour (Code)

### Flux Complet

```powershell
# 1. Ouvrez le dossier du projet
cd "c:\Users\perat\OneDrive\Documents\Entreprise\Kesiara Golden\Web site KG"

# 2. Modifiez un fichier (ex: index.html)
# ... (éditez le fichier)

# 3. Ajoutez les changements
git add .

# 4. Créez un commit avec description
git commit -m "Changement description: Changez le titre"

# 5. Poussez vers GitHub (Render redéploie automatiquement)
git push origin main
```

**Attendre 2-3 minutes → Votre site est mis à jour!**

---

## ✅ Checklist Déploiement

- [ ] Repository GitHub créé
- [ ] Code pushé sur GitHub
- [ ] Render déploiement configuré
- [ ] Site accessible sur https://kesiara-golden.onrender.com
- [ ] Admin Panel accessible
- [ ] Produits visibles
- [ ] WhatsApp intégré

**Tout OK? Vous êtes en production! 🎉**

---

## 📞 Besoin D'Aide?

| Question | Réponse Rapide |
|----------|---|
| Site ne charge pas? | Rechargez la page (F5) |
| Image produit invisible? | Vérifiez l'URL image |
| Mot de passe oublié? | Admin Panel: 226kesiara |
| Produit n'apparaît pas? | Vérifiez que vous avez cliqué "Ajouter" |
| Stock n'apparaît pas? | Actualisez la page |
| Redirect WhatsApp ne fonctionne pas? | Vérifiez le numéro |

---

**Vous êtes maintenant opérationnel! 🚀**
