<h1 align="center">muspen.komdigi.go.id</h1>
<p align="center">Aplikasi Website Muspen (Laravel 8 + Backpack)</p>

## Ringkas
Muspen adalah aplikasi berbasis Laravel yang menampilkan forum/artikel, koleksi, event, booking, dan fitur lain yang dikelola melalui Backpack Admin.

## Perubahan Keamanan Terbaru
Fokus: memitigasi celah pada fitur komentar yang sebelumnya hanya memvalidasi Captcha di sisi klien.

- Validasi Captcha dipindahkan ke sisi server menggunakan paket `mews/captcha`.
- Antarmuka Captcha pada form komentar kini menggunakan gambar dari backend dan bisa di-refresh dengan klik.
- Rate limiting diterapkan pada endpoint komentar: maksimum 3 komentar/menit per alamat IP.

Rujukan kode:
- Validasi server-side: `app/Http/Controllers/CommentController.php`
- UI Captcha: `resources/views/landing-page/blog/detail.blade.php`
- Rate limit: `routes/web.php`

## Teknologi
- PHP 8.x / Laravel 8.x
- Backpack CRUD
- mews/captcha
- Sanctum, Socialite, Intervention Image, Maatwebsite Excel, dsb.

## Persiapan Lokal
- Salin `.env.example` menjadi `.env` lalu sesuaikan konfigurasi database/app.
- Jalankan:
  - `composer install`
  - `php artisan key:generate`
  - `php artisan migrate` (opsional sesuai skenario)
- Pastikan folder `storage` dan `bootstrap/cache` dapat ditulis.

## Menjalankan Aplikasi
- `php artisan serve` atau gunakan stack server lokal (Laragon/XAMPP).
- Akses halaman publik dan admin (Backpack) sesuai konfigurasi route.

## Catatan Keamanan
- Captcha wajib diverifikasi di server sebelum komentar disimpan.
- Pembatasan laju diterapkan pada endpoint komentar untuk mencegah spam.
- Jangan pernah commit kredensial atau file `.env`. Pastikan `.env` berada di `.gitignore`.

## Deployment Otomatis (CI/CD)
Proyek ini menggunakan GitLab CI/CD untuk deployment otomatis ke server produksi.
Setiap perubahan pada branch `main` akan otomatis di-deploy.
Panduan lengkap: [docs/PANDUAN-CI-CD.md](docs/PANDUAN-CI-CD.md)

## Lisensi
Kode sumber mengikut ketentuan lisensi dari masing-masing paket pihak ketiga. Untuk detail Laravel dan paket lain, lihat lisensi terkait.

