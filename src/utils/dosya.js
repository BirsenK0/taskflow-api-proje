const fs = require('fs');
const path = require('path');

const DOSYA_YOLU = path.join(__dirname, '..','..','data','tasks.json');

function gorevleriOku() {
const veri = fs.readFileSync(DOSYA_YOLU,'utf-8');
return JSON.parse(veri);
}

function gorevleriKaydet(gorevler) {
    const veri = JSON.stringify(gorevler,null,2);
    fs.writeFileSync(DOSYA_YOLU,veri,'utf-8');
}

module.exports = { gorevleriOku, gorevleriKaydet};
