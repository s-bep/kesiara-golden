const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route pour servir admin.html
app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Route pour servir product-detail.html
app.get('/product-detail.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'product-detail.html'));
});

// Capturer toutes les autres routes et servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Kesiara Golden site running on port ${PORT}`);
});
