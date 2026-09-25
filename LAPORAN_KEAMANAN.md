# Laporan Peningkatan Keamanan Website Muspen

Dokumen ini menjelaskan kerentanan yang telah diidentifikasi dan langkah-langkah mitigasi yang telah diterapkan untuk mengamankan website dari serangan spam bot dan penyalahgunaan formulir.

## 1. Analisis Kerentanan (Vulnerability Analysis)

Sebelum peningkatan keamanan dilakukan, website memiliki beberapa titik kerentanan pada formulir publik yang dapat dimanfaatkan oleh pihak tidak bertanggung jawab:

### a. Automated Bot Spamming (Spam Bot Otomatis)
- **Masalah:** Formulir publik (Buku Tamu, Reservasi, Pengaduan, Komentar) tidak memiliki mekanisme validasi manusia (seperti Captcha).
- **Dampak:** Bot dapat mengirimkan ribuan data sampah (junk data) secara otomatis dalam waktu singkat. Ini dapat membanjiri database, menghabiskan penyimpanan server, dan mengganggu operasional admin dalam memilah data valid.

### b. Request Flooding (Banjir Permintaan)
- **Masalah:** Tidak adanya pembatasan frekuensi pengiriman formulir (rate limiting) yang ketat pada endpoint API.
- **Dampak:** Penyerang dapat melakukan serangan Denial of Service (DoS) sederhana dengan membanjiri server dengan permintaan HTTP berulang-ulang, yang dapat menyebabkan server menjadi lambat atau tidak responsif bagi pengguna lain.

### c. Input Validation Bypass (Bypass Validasi Input)
- **Masalah:** Validasi di sisi klien (browser) saja tidak cukup karena dapat dimanipulasi.
- **Dampak:** Data yang tidak valid atau berbahaya (seperti skrip jahat/XSS) bisa masuk ke sistem jika validasi sisi server tidak ketat.

---

## 2. Implementasi Keamanan (Security Implementation)

Berikut adalah langkah-langkah teknis yang telah diterapkan untuk memitigasi risiko di atas:

### a. Integrasi Captcha (mews/captcha)
- **Deskripsi:** Menambahkan verifikasi gambar acak yang harus dimasukkan pengguna sebelum mengirim formulir.
- **Fungsi:** Memastikan bahwa pengirim data adalah manusia, bukan bot otomatis. Bot umumnya kesulitan membaca teks pada gambar yang terdistorsi.
- **Implementasi:**
    - **Form Buku Tamu:** `GuestBookController.php` & `guest-book.blade.php`
    - **Form Reservasi:** `EventController.php` & `booking/index.blade.php`
    - **Form Pengaduan:** `ComplainController.php` & `complain/index.blade.php`
    - **Form Lapor Artikel:** `ArticleController.php` & `blog/detail.blade.php`

### b. Rate Limiting (Throttle Middleware)
- **Deskripsi:** Membatasi jumlah permintaan yang dapat dikirim oleh satu alamat IP dalam periode waktu tertentu.
- **Konfigurasi:** Maksimal **3 permintaan per 1 menit** (`throttle:3,1`) untuk semua rute pengiriman formulir publik.
- **Fungsi:** Mencegah *spam flooding* dan serangan *brute force*. Jika pengguna mencoba mengirim lebih dari 3 kali dalam semenit, mereka akan diblokir sementara (HTTP 429 Too Many Requests).
- **Implementasi:** `routes/web.php`

### c. Server-Side Validation (Validasi Sisi Server)
- **Deskripsi:** Memastikan semua data yang diterima server divalidasi ulang, termasuk kode Captcha.
- **Fungsi:** Mencegah manipulasi formulir dari sisi klien. Meskipun antarmuka dimanipulasi, server akan menolak data jika Captcha salah atau format input tidak sesuai.
- **Pesan Error:** Menggunakan pesan Bahasa Indonesia yang ramah pengguna (User Friendly).

---

## 3. Status Pembaruan (Update Status)

Perubahan saat ini telah diterapkan di lingkungan **Lokal (Development)** di path:
`c:\laragon\www\muspen`

**PENTING:** Perubahan ini **BELUM** otomatis aktif di server Production (Live Website) kecuali Anda melakukan proses deployment.

---

## 4. Panduan Deployment (Deployment Guide)

Untuk menerapkan perubahan ini ke server Production, ikuti langkah-langkah berikut:

### Langkah 1: Push Kode ke Repository (Git)
Jalankan perintah berikut di terminal lokal (Visual Studio Code / Terminal):

```bash
# Tambahkan semua file yang berubah
git add .

# Simpan perubahan dengan pesan commit
git commit -m "Security Update: Menambahkan Captcha dan Rate Limiting pada semua form publik"

# Kirim ke repository (GitHub/GitLab/Bitbucket)
git push origin main
```
*(Catatan: Ganti `main` dengan nama branch utama Anda jika berbeda, misal `master`)*

### Langkah 2: Update di Server Production
Masuk ke server Anda (melalui SSH atau Terminal Hosting), lalu arahkan ke direktori proyek website.

> **Catatan:** Sesuaikan path di bawah dengan lokasi proyek Anda di server (contoh: `/var/www/html/muspen.kominfo.go.id/public_html`).

```bash
# Masuk ke direktori proyek
cd /var/www/html/muspen.kominfo.go.id/public_html

# Pastikan Anda berada di folder yang benar (harus ada file 'artisan')
ls -l artisan

# Ambil perubahan terbaru dari git
git pull origin main

# Update dependensi (jika ada library baru, seperti mews/captcha)
composer install --optimize-autoloader --no-dev

# Bersihkan cache konfigurasi & view (PENTING untuk Laravel)
php artisan config:cache
php artisan route:cache
php artisan view:clear

# (Opsional) Restart queue worker jika menggunakan antrian
php artisan queue:restart
```

### Langkah 3: Verifikasi
Setelah deployment, buka website production dan coba kirim salah satu formulir (misal: Buku Tamu). Pastikan:
1. Gambar Captcha muncul.
2. Jika kode Captcha salah, muncul pesan error.
3. Jika kode Captcha benar, data terkirim sukses.
