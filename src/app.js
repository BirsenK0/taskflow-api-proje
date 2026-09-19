const express = require('express');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
// logger: Her isteğin method, URL, sonuç kodu ve süresini konsola yazar.
// Debug ve izleme (monitoring) amaçlı, projenin zorunlu bileşenlerinden biri.
app.use(logger);

// --- ROUTE BAĞLANTILARI ---
// /tasks ile başlayan tüm istekler, routes/tasks.js dosyasındaki
// tanımlara yönlendirilir (GET, POST, PUT, DELETE hepsi orada).
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

app.use((req,res) => {
    res.status(404).json({success: false, hata: 'Sayfa Bulunamadı' });
});

module.exports= app;