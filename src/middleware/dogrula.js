const gorevDogrula = (req, res, next) => {
  const { title, description, priority, assignee } = req.body;
  const hatalar = [];

  if (!title || title.trim().length < 3) {
    hatalar.push('Başlık en az 3 karakter olmalı');
  }
  if (!description || description.trim().length === 0) {
    hatalar.push('Açıklama boş olmamalı.');
  }
  const gecerliOncelikler = ['low', 'medium', 'high'];
  if (!priority || !gecerliOncelikler.includes(priority)) {
    hatalar.push('Öncelik low, medium veya high olmalı');
  }
  if (!assignee || assignee.trim().length === 0) {
    hatalar.push('Görevin atanacağı kişi belirtilmeli');
  }

  if (hatalar.length > 0) {
    return res.status(400).json({ success: false, hatalar });
  }
  next();
};

module.exports = gorevDogrula;