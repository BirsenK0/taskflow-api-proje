# TaskFlow API

Node.js ve Express.js ile geliştirdiğim bir görev yönetim sistemi API'si. Backend Programlama bitirme projesi kapsamında yaptım.

## Proje ne işe yarıyor

Bir şirketin, ekip içindeki görevleri takip edebilmesi için basit bir sistem düşünüldü. Görev oluşturma, çalışanlara atama, durum takibi ve önceliklendirme yapılabiliyor. Tamamen REST API mantığıyla çalışıyor, arayüzü yok.

## Kullandığım teknolojiler

- Node.js
- Express.js
- fs modülü (verileri JSON dosyasında tutmak için, veritabanı kullanmadım)

## Klasör yapısı
taskflow-api/
├── data/
│ └── tasks.json # görevlerin kaydedildiği dosya
├── src/
│ ├── middleware/
│ │ ├── logger.js # her isteği loglar
│ │ └── dogrula.js # post/put isteklerinde veri kontrolü yapar
│ ├── routes/
│ │ └── tasks.js # tüm endpoint'ler burada
│ ├── utils/
│ │ └── dosya.js # dosyadan okuma/yazma işlemleri
│ ├── app.js
│ └── server.js
├── package.json

## Nasıl çalıştırılır
Önce repoyu klonla:
git clone https://github.com/BirsenK0/taskflow-api-proje.git
cd taskflow-api-proje

Paketleri yükle:
npm install

Sunucuyu başlat:
node src/server.js

Terminalde "Sunucu 3000 portunda çalışıyor." yazısını görmen lazım. Sonrasında Postman'den `http://localhost:3000/tasks` adresine istek atarak test edebilirsin.

## Endpoint'ler

| Method | Endpoint | Ne yapar |
|--------|----------|----------|
| GET | /tasks | tüm görevleri listeler |
| GET | /tasks/:id | tek bir görevi getirir |
| POST | /tasks | yeni görev oluşturur |
| PUT | /tasks/:id | görevi günceller |
| DELETE | /tasks/:id | görevi siler |

## Filtreleme ve arama

GET /tasks isteğine şu query parametrelerini ekleyebilirsin:

- `?status=pending` — duruma göre filtreler
- `?priority=high` — önceliğe göre filtreler
- `?assignee=Birsen` — kişiye göre filtreler
- `?search=api` — başlık/açıklamada arama yapar
- `?sort=createdAt` — tarihe göre sıralar

Birkaçını birlikte de kullanabilirsin, örneğin: `/tasks?priority=high&search=api`

## Görev oluştururken/güncellerken gönderilecek veri

```json
{
  "title": "Backend API tasarla",
  "description": "TaskFlow projesi için REST API mimarisini planla",
  "priority": "high",
  "assignee": "Birsen"
}
```

title en az 3 karakter olmalı, priority de low/medium/high'dan biri olmak zorunda. Eksik ya da hatalı bir şey gönderilirse 400 hatası ve hangi alanın sorunlu olduğunu söyleyen bir mesaj dönüyor.

## Testler

Tüm endpoint'leri Postman'de tek tek test ettim, ekran görüntüleri `postman-tests` klasöründe.

## İletişim

Birsen Küçük — [GitHub](https://github.com/BirsenK0)
