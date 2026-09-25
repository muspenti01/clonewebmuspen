# SOP Deployment Website Koleksi Museum (Server Komdigi)

Dokumen ini berisi panduan standar operasional (SOP) untuk melakukan deployment aplikasi web berbasis Laravel ke server VPS Komdigi.

**Target Lingkungan:**
- **OS Server:** Ubuntu 20.04/22.04 LTS (atau CentOS 7/8)
- **Web Server:** Nginx
- **Database:** MySQL/MariaDB
- **Bahasa:** PHP 8.1+
- **Akses:** SSH (Terminal)

---

## 1. Persiapan Lokal (Sebelum Deploy)

Sebelum melakukan perubahan di server, pastikan kode di lokal sudah aman:

1.  **Cek Environment (.env):**
    Pastikan tidak ada kredensial rahasia (password DB, API Key) yang ter-commit ke Git.
2.  **Kompilasi Aset (Opsional):**
    Jika menggunakan Vite/Mix, jalankan build di lokal jika server tidak memiliki Node.js.
    ```bash
    npm run build
    ```
3.  **Push Kode Terbaru:**
    Pastikan semua perubahan sudah di-push ke repository Git (GitHub/GitLab/Bitbucket).
    ```bash
    git add .
    git commit -m "Pesan perubahan"
    git push origin main
    ```

---

## 2. Akses ke Server

Masuk ke server menggunakan SSH:

```bash
ssh username@ip-server-komdigi
# Masukkan password jika diminta
```

*Catatan: Jika menggunakan SSH Key, pastikan key sudah terdaftar.*

---

## 3. Proses Deployment (Update Aplikasi)

Lakukan langkah ini setiap kali ada pembaruan kode.

### A. Masuk ke Direktori Proyek
```bash
cd /var/www/nama-folder-proyek
```

### B. Tarik Kode Terbaru (Git Pull)
```bash
git pull origin main
```
*Jika ada konflik file, selesaikan dulu atau gunakan `git reset --hard` (HATI-HATI: menghapus perubahan di server).*

### C. Update Dependencies (Jika ada perubahan library)
Hanya jalankan jika Anda mengubah `composer.json` atau `package.json`.

**PHP (Composer):**
```bash
composer install --optimize-autoloader --no-dev
```

**Node.js (NPM) - Opsional:**
```bash
npm install && npm run build
```

### D. Migrasi Database
Jalankan jika ada perubahan struktur database (tabel baru/kolom baru).
**PENTING:** Selalu backup database sebelum menjalankan ini.

```bash
php artisan migrate --force
```

### E. Optimasi Cache
Bersihkan dan buat ulang cache agar konfigurasi terbaru terbaca.

```bash
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### F. Restart Queue Worker (Jika menggunakan Queue)
```bash
php artisan queue:restart
```

---

## 4. Setup Awal (Hanya untuk Deployment Pertama Kali)

Lakukan langkah ini **HANYA** jika proyek baru pertama kali ditaruh di server.

1.  **Clone Repository:**
    ```bash
    cd /var/www
    git clone https://github.com/username/repo-koleksi.git nama-folder
    ```

2.  **Setup Permission:**
    ```bash
    sudo chown -R www-data:www-data /var/www/nama-folder
    sudo chmod -R 775 /var/www/nama-folder/storage
    sudo chmod -R 775 /var/www/nama-folder/bootstrap/cache
    ```

3.  **Setup Environment:**
    ```bash
    cp .env.example .env
    nano .env
    # Sesuaikan DB_DATABASE, DB_USERNAME, DB_PASSWORD, APP_URL
    ```

4.  **Generate Key & Storage Link:**
    ```bash
    php artisan key:generate
    php artisan storage:link
    ```

5.  **Konfigurasi Nginx:**
    Buat file konfigurasi di `/etc/nginx/sites-available/nama-domain` dan symlink ke `sites-enabled`.

---

## 5. Troubleshooting (Masalah Umum)

### Error 500 (Server Error)
- Cek log error Laravel:
  ```bash
  tail -f storage/logs/laravel.log
  ```
- Cek permission folder `storage`:
  ```bash
  ls -la storage
  # Harus milik www-data
  ```

### Halaman Putih (Blank Screen)
- Biasanya karena error PHP yang tersembunyi. Coba nyalakan debug sementara di `.env` (Hanya sebentar!):
  `APP_DEBUG=true`
- Jangan lupa kembalikan ke `false` setelah ketemu masalahnya.

### Gambar Tidak Muncul
- Cek symlink storage:
  ```bash
  php artisan storage:link
  ```
- Pastikan folder `public/storage` ada.

---

**Dibuat oleh:** Tim Teknis Muspen
**Tanggal Update:** 2024