-- ==========================================================
-- BVA 2205 Siber Güvenlik ve Bilişim Hukuku - Bireysel Ödev
-- Öğrenci: Bengisu Küçük (2516016013)
-- ==========================================================

-- ----------------------------------------------------------
-- GÖREV 1: Ortak Tablolar
-- ----------------------------------------------------------

CREATE TABLE yoneticiler (
  id         SERIAL PRIMARY KEY,
  eposta     TEXT UNIQUE NOT NULL,
  sifre_hash TEXT NOT NULL,          -- Şifrenin bcrypt özeti
  rol        TEXT NOT NULL DEFAULT 'editor' CHECK (rol IN ('admin','editor')),
  olusturma  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE oturumlar (
  token       TEXT PRIMARY KEY,      -- Tarayıcı çerezinde tutulan rastgele değer
  yonetici_id INT NOT NULL REFERENCES yoneticiler(id) ON DELETE CASCADE,
  bitis       TIMESTAMPTZ NOT NULL
);

CREATE TABLE iletisim_mesajlari (
  id              SERIAL PRIMARY KEY,
  ad_soyad        TEXT NOT NULL,
  eposta          TEXT NOT NULL,
  mesaj           TEXT NOT NULL,
  kvkk_onay       BOOLEAN NOT NULL DEFAULT false,
  okundu          BOOLEAN NOT NULL DEFAULT false,
  gonderim_zamani TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ----------------------------------------------------------
-- GÖREV 2: Size Özel Tablolar (Okuduğum Kitaplar)
-- ----------------------------------------------------------

CREATE TABLE kitap_turleri (
  id SERIAL PRIMARY KEY,
  ad TEXT NOT NULL UNIQUE
);

CREATE TABLE okunan_kitaplar (
  id               SERIAL PRIMARY KEY,
  kitap_adi        TEXT NOT NULL,
  yazar            TEXT,
  sayfa_sayisi     INT,
  bitirme_tarihi   DATE,
  puan             INT CHECK (puan BETWEEN 1 AND 10),
  notum            TEXT,
  kategori_id      INT REFERENCES kitap_turleri(id) ON DELETE SET NULL,
  yayinda          BOOLEAN NOT NULL DEFAULT true,
  olusturma        TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ----------------------------------------------------------
-- GÖREV 3: SQL Sorgularınız
-- ----------------------------------------------------------

-- Görev 3.1: 300 sayfadan uzun VE puanı 8 ve üzeri olan kitaplar
SELECT * FROM okunan_kitaplar 
WHERE sayfa_sayisi > 300 AND puan >= 8;

-- Görev 3.2: En son bitirdiğiniz 4 kitap (Öne Çıkanlar)
SELECT * FROM okunan_kitaplar 
WHERE bitirme_tarihi IS NOT NULL 
ORDER BY bitirme_tarihi DESC 
LIMIT 4;

-- Görev 3.3: Toplam okunan sayfa sayısı ve ortalama puan
SELECT SUM(sayfa_sayisi) AS toplam_sayfa, ROUND(AVG(puan), 2) AS ortalama_puan 
FROM okunan_kitaplar;

-- Görev 3.4: Her kitap türü için kaç kitap olduğu (LEFT JOIN + GROUP BY + COUNT)
SELECT kt.ad AS kategori_adi, COUNT(ok.id) AS kitap_sayisi 
FROM kitap_turleri kt 
LEFT JOIN okunan_kitaplar ok ON kt.id = ok.kategori_id 
GROUP BY kt.ad;

-- Görev 3.5: kitap_adi alanında numaranızın (2516016013) geçtiği kayıt (ILIKE)
SELECT * FROM okunan_kitaplar 
WHERE kitap_adi ILIKE '%2516016013%';

-- Görev 3.6: Yazar adlarını büyük harfe çevirme (UPPER)
UPDATE okunan_kitaplar 
SET yazar = UPPER(yazar);

-- Görev 3.7: Puanı 3'ün altında olan kitapları silme
DELETE FROM okunan_kitaplar 
WHERE puan < 3;


-- ----------------------------------------------------------
-- GÖREV 6: Güvenlik Görevi (Rollere göre yönetici sayısı)
-- ----------------------------------------------------------

SELECT rol, COUNT(*) AS yonetici_sayisi 
FROM yoneticiler 
GROUP BY rol;


-- ----------------------------------------------------------
-- GÖREV 7: Hukuk Görevi (Çerezler Tablosu ve Sorgusu)
-- ----------------------------------------------------------

CREATE TABLE cerezler (
  id    SERIAL PRIMARY KEY,
  ad    TEXT NOT NULL,
  tur   TEXT NOT NULL CHECK (tur IN ('zorunlu','işlevsel','analitik','pazarlama')),
  amac  TEXT NOT NULL,
  sure  TEXT NOT NULL
);

-- Çerez türlerine göre sayıları veren sorgu
SELECT tur, COUNT(*) AS toplam_cerez 
FROM cerezler 
GROUP BY tur;