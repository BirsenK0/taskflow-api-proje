const app = require('./app');
const PORT = 3000;
//portu çağırıyoruz :)
app.listen(PORT, () => {
    console.log("Sunucu" + PORT + "portunda çalışıyor.");
});
