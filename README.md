# 📿 Hadits Arbain API

> REST API untuk mengakses Hadits Arbain An-Nawawi dalam tiga bahasa: Arab, Inggris, dan Indonesia.

---

## ⚠️ Status: Under Development

API ini sedang dalam tahap pengembangan aktif. Saat ini baru tersedia **17 dari 42 hadits**. Hadits sisanya akan segera ditambahkan.

| Hadits | Status |
|---|---|
| Hadits 1–17 | ✅ Tersedia |
| Hadits 18–42 | 🔜 Coming Soon |

---

## 🚀 Base URL

```
http://localhost:8080
```

---

## 📖 Endpoints

### Get All Hadits
```http
GET /arbain
```

### Get Hadits by ID
```http
GET /arbain/:id
```

### Get Random Hadits
```http
GET /arbain/random
```

---

## 📦 Contoh Response

```json
{
  "id": 1,
  "number": 1,
  "title": {
    "in": "Amalan Bergantung pada Niat",
    "ar": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    "en": "Good Deeds Depend on Intentions"
  },
  "riwayah": "Muttafaq 'Alayh",
  "text": {
    "ar": "...",
    "en": "...",
    "in": "..."
  }
}
```

---

## 🛠️ Tech Stack

- **Runtime** — Node.js
- **Framework** — Express.js
- **Security** — Helmet, CORS, Rate Limiting

---

## 🔜 Coming Soon

- [ ] Hadits 18–42 lengkap
- [ ] Search by kata kunci
- [ ] Filter by riwayah
- [ ] Hadits of the day
- [ ] Pagination

---

## 📄 Lisensi

Data hadits bersumber dari kitab Arbain An-Nawawi.
