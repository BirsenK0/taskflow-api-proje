# TaskFlow — Proje Tanıtım Dokümanı

## Projenin Amacı

Bu proje, Node.js Backend Programlama eğitimi kapsamında geliştirdiğim bir bitirme projesi. Amaç, eğitim boyunca öğrendiğim Node.js, Express.js, middleware ve REST API konularını uygulamalı olarak göstermek.

## Senaryo

Bir yazılım şirketi düşünelim — bu şirket, ekip içindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmek istiyor. TaskFlow, bu ihtiyacı karşılamak için tasarlanmış bir görev yönetim sistemi API'si. Sistem; görev oluşturma, çalışanlara atama, durum takibi, önceliklendirme ve filtreleme işlemlerini destekliyor.

Proje tamamen REST API mantığında geliştirildi, bir arayüzü (frontend) yok — Postman gibi bir araçla ya da ileride geliştirilecek bir frontend/mobil uygulamayla kullanılabilir.

## Sistem Özellikleri

- Görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme (CRUD)
- Her isteğin loglandığı bir middleware (method, URL, süre, durum kodu)
- Görev oluşturma/güncellemede veri doğrulama (başlık, açıklama, öncelik, atanan kişi kontrolü)
- Query parametreleriyle filtreleme, arama ve sıralama (duruma göre, önceliğe göre, kişiye göre, metin aramasıyla)
- Veriler bir JSON dosyasında kalıcı olarak tutuluyor (sunucu yeniden başlasa da veri kaybolmuyor)

## Kullanılan Teknolojiler

- Node.js
- Express.js
- Node'un fs (file system) modülü, veri depolama için

## Veri Modeli

Her görev şu bilgileri taşıyor: id, başlık, açıklama, durum, öncelik, atanan kişi, oluşturulma tarihi.

## Test Süreci

Tüm endpoint'ler Postman üzerinden, hem başarılı hem hatalı senaryolar (örneğin olmayan bir görev istendiğinde 404 dönmesi, eksik veri gönderildiğinde 400 dönmesi) test edildi. Test ekran görüntüleri repo içinde `postman-tests` klasöründe yer alıyor.

## Repo

Proje kaynak kodunun tamamına şu adresten ulaşılabilir:
https://github.com/BirsenK0/taskflow-api-proje
