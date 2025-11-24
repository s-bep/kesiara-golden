# 🔧 Correction: Admin Not Found sur Render

## ✅ Ce que j'ai changé

1. **Créé un serveur Express** (`server.js`)
   - Sert les fichiers statiques
   - Gère les routes vers `/admin.html`, `/products.html`, etc.
   - Écoute sur le port 3000

2. **Mis à jour `package.json`**
   - Ajoutée dépendance Express
   - Changé script `start` pour lancer `server.js`

3. **Pushé le code sur GitHub**
   - Render va détector Node.js (grâce à package.json)
   - Render va installer Express automatiquement
   - Render va lancer `npm start` automatiquement

---

## 🚀 Reconfigurer Render

**Render ne peut pas redéployer automatiquement** car on a changé le type de projet (Static → Node).

### Étape 1: Supprimer l'ancien déploiement

1. Allez sur: https://dashboard.render.com
2. Cliquez sur votre site `kesiara-golden`
3. Settings → **"Delete Web Service"**
4. Confirmez

### Étape 2: Créer un nouveau service

1. https://dashboard.render.com → **"+ New"** → **"Web Service"**
2. Sélectionnez le repo `s-bep/kesiara-golden`
3. Remplissez:
   - **Name:** `kesiara-golden`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Cliquez **"Create Web Service"**

### Étape 3: Attendre le déploiement

- Render va installer Express
- Render va lancer votre serveur
- Attendez 3-5 minutes

### Étape 4: Tester

```
✅ https://kesiara-golden.onrender.com → Accueil
✅ https://kesiara-golden.onrender.com/admin.html → Admin
✅ https://kesiara-golden.onrender.com/products.html → Produits
```

---

## ⚠️ Limitations Render Gratuit

- **Ram:** 512MB (suffisant pour votre site)
- **Inactivité:** Service s'arrête après 15 min d'inactivité
- **Cold start:** Première visite après inactivité = 30-60 sec pour redémarrer

**Solution:** Ajouter un cron job pour "ping" le site chaque 15 min (optionnel).

---

## ✨ Avantages de cette Solution

✅ Admin.html accessible directement
✅ URLs propres (pas besoin de `.html`)
✅ Routes gérées correctement
✅ Prêt pour des améliorations futures
✅ Gratuit sur Render

---

## 📞 Si ça ne fonctionne pas

1. Vérifiez les **Logs** dans Render (Dashboard → Logs)
2. Cherchez les erreurs (Build ou Runtime)
3. Vérifiez que Express s'est installé correctement
4. Attendez 5 minutes (cold start)

---

**Une fois reconfiguré sur Render, tout devrait marcher parfaitement! 🚀**
