const express = require('express');
const {gorevleriOku, gorevleriKaydet } = require('../utils/dosya');
const gorevDogrula = require('../middleware/dogrula');
const router = express.Router();
//İLK endpoint -tüm görevleri listeler-
router.get('/',(req,res) => {
    const gorevler = gorevleriOku();
    res.json({success: true, data: gorevler});
});
//GET
//belirli bir görev ID si getirme
router.get('/:id', (req,res) =>{
    const gorevler = gorevleriOku();
    const id = Number(req.params.id);
    const gorev = gorevler.find(g => g.id === id);

    if (!gorev) {
        return res.status(404).json({success:false, hata: 'Görev bulunamadı'});
    }

    res.json({success:true, data:gorev});
});

//POST /tasks - yeni görevler oluşturuyorum
router.post('/',gorevDogrula, (req,res) => {
    const gorevler = gorevleriOku();
    const yeniGorev = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        status: 'pending',
        priority: req.body.priority,
        assignee: req.body.assignee,
        createdAt: new Date().toISOString()//ISO kullanıyoruz çünkü saat,tarih başka bir sistemde farklı görünebilir, ISO ise bir standart,hep aynı değer döndürüyor, sıralanabilir ve JSON formatına uygun :)
    };
    
    gorevler.push(yeniGorev);
    gorevleriKaydet(gorevler);
    //201 created koduyla, oluşturulan görevi geri döndürüyoruz
    res.status(201).json({ success:true, data: yeniGorev});

});

//PUT
router.put('/:id', gorevDogrula, (req,res) => {
    const gorevler = gorevleriOku();
    const id = Number(req.params.id);
    const gorevIndex = gorevler.findIndex(g => g.id === id);

    if (gorevIndex === -1) {
        return res.status(404).json({success:false, hata: 'Görev bulunamadı'});    
    }

    gorevler[gorevIndex] = {
        ...gorevler[gorevIndex],
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        assignee: req.body.assignee
    };

    gorevleriKaydet(gorevler);
    res.json({success:true, data: gorevler[gorevIndex]});
});

    




module.exports = router;
