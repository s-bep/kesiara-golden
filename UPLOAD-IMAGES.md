# 📸 Guide d'Upload d'Images - Kesiara Golden

## ✅ Modifications Effectuées

### 1. **Priorité à l'Upload Local**
- Le bouton "📁 Fichier" est maintenant **affiché par défaut** lors de l'ajout ou modification d'un produit
- L'upload depuis votre téléphone/ordinateur est maintenant l'option recommandée

### 2. **Suppression des Références Unsplash**
- Les images Unsplash ont été **complètement retirées** de la galerie
- Les placeholders et conseils Unsplash ont été remplacés par des instructions pour l'upload local
- La galerie affiche maintenant **uniquement vos images uploadées**

### 3. **Améliorations de l'Interface**
- Labels cliquables pour faciliter l'upload sur mobile
- Aperçu d'image amélioré avec bordure dorée (#C9A961)
- Messages de feedback plus clairs lors de l'upload
- Affichage de la taille du fichier avant et après compression

## 🎯 Comment Uploader des Images

### Méthode 1: Upload Direct (Recommandé)
1. Allez dans "➕ Ajouter Produit" ou modifiez un produit existant
2. Dans la section "Image Produit", cliquez sur le bouton **"📁 Fichier"** (activé par défaut)
3. Cliquez sur la zone de dépôt ou cliquez directement dessus
4. Sélectionnez votre image depuis votre téléphone/ordinateur
5. L'image sera automatiquement:
   - Compressée (max 800px)
   - Optimisée en JPEG à 75% de qualité
   - Stockée localement dans le navigateur
6. Un aperçu s'affichera immédiatement

### Méthode 2: Via la Galerie
1. Allez dans l'onglet **"🖼️ Mes Images"**
2. Cliquez sur "📤 Uploader"
3. Sélectionnez votre image (max 2MB)
4. L'image sera compressée et ajoutée à votre galerie
5. Lors de l'ajout/modification d'un produit, cliquez sur **"🎨 Galerie"**
6. Sélectionnez l'image de votre choix

### Méthode 3: URL (Optionnel)
1. Si vous avez déjà une image en ligne
2. Cliquez sur **"🔗 URL"**
3. Collez l'URL complète de l'image

## 🔧 Caractéristiques Techniques

### Compression Automatique
- **Taille maximale**: 2MB avant compression
- **Redimensionnement**: Les images > 800px sont automatiquement réduites
- **Format**: Conversion en JPEG avec 75% de qualité
- **Stockage**: localStorage du navigateur (base64)

### Limites
- Taille maximale: **2MB par image**
- Stockage total: Dépend du navigateur (~5-10MB généralement)
- Formats acceptés: JPG, PNG, GIF, WebP, etc.

## 📱 Upload depuis Mobile

### Android/iOS
1. Ouvrez l'admin sur votre téléphone
2. Cliquez sur "📁 Fichier"
3. Votre système vous proposera:
   - 📷 Prendre une photo
   - 🖼️ Choisir depuis la galerie
4. Sélectionnez votre option
5. L'image sera uploadée automatiquement

## ⚠️ Conseils et Bonnes Pratiques

### ✅ À Faire
- Utilisez des images de **bonne qualité** (produits bien éclairés)
- Privilégiez les **photos carrées** (aspect ratio 1:1)
- Nommez vos fichiers de manière descriptive avant upload
- Uploadez vos images dans "🖼️ Mes Images" pour les réutiliser

### ❌ À Éviter
- Ne pas uploader d'images > 2MB (risque d'échec)
- Ne pas uploader trop d'images (risque de saturer le localStorage)
- Éviter les captures d'écran de mauvaise qualité
- Ne pas utiliser d'images avec watermark/filigrane

## 🐛 Résolution de Problèmes

### L'upload ne fonctionne pas
1. Vérifiez que votre image fait **moins de 2MB**
2. Essayez un autre format d'image (JPG recommandé)
3. Videz le cache de votre navigateur
4. Vérifiez que vous avez assez d'espace dans le localStorage

### L'aperçu ne s'affiche pas
1. Attendez quelques secondes (compression en cours)
2. Rafraîchissez la page
3. Vérifiez la console du navigateur (F12) pour les erreurs

### L'image est floue
1. Uploadez une image de **meilleure résolution** au départ
2. L'image sera redimensionnée à 800px maximum
3. Privilégiez des photos nettes dès le départ

## 📊 Gestion de l'Espace

Pour voir combien d'espace vous utilisez:
```javascript
// Dans la console du navigateur (F12)
const images = JSON.parse(localStorage.getItem('kesiara_images'));
const totalSize = JSON.stringify(images).length;
console.log('Espace utilisé:', (totalSize / 1024 / 1024).toFixed(2), 'MB');
```

Pour libérer de l'espace:
1. Allez dans "🖼️ Mes Images"
2. Supprimez les images non utilisées
3. Les images des produits supprimés restent dans la galerie (à supprimer manuellement)

## 🎨 Exemple de Workflow Recommandé

1. **Préparer vos photos** sur votre téléphone/ordinateur
2. **Aller dans "🖼️ Mes Images"** et uploader toutes vos photos en une fois
3. **Créer vos produits** en sélectionnant les images depuis la galerie
4. **Réutiliser** les images pour plusieurs produits si nécessaire

## 🔄 Migration depuis Unsplash

Si vous aviez des produits avec des images Unsplash:
1. Les images Unsplash continuent de fonctionner (ce sont des URLs)
2. Pour migrer vers vos propres images:
   - Prenez des photos de vos produits
   - Uploadez-les dans "🖼️ Mes Images"
   - Modifiez chaque produit pour remplacer l'image Unsplash

---

**Support**: Si vous rencontrez des problèmes, vérifiez la console (F12) pour les erreurs détaillées.
