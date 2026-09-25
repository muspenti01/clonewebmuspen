# Laporan Konten Statis (Hardcoded) Website Muspen

Dokumen ini berisi daftar bagian konten pada website yang bersifat **STATIS** (hardcoded). Bagian-bagian ini tidak dapat diedit melalui Dashboard Admin dan harus diubah langsung melalui kode sumber (source code).

## Tabel Daftar Konten Statis

| No | Halaman | Bagian (Section) | Lokasi File | Baris Kode (Perkiraan) | Keterangan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Beranda (Home)** | **Banner Utama** (Animasi & Gambar) | `resources/views/landing-page/index.blade.php` | 64-75 | Gambar-gambar animasi di banner utama (TV, kamera, karakter, dll) bersifat statis. |
| 2 | **Beranda (Home)** | **Judul "Koleksi" & Deskripsi** | `resources/views/landing-page/index.blade.php` | 134-138 | Judul "Koleksi" dan deskripsinya tertulis langsung di kode. |
| 3 | **Beranda (Home)** | **Judul "Event"** | `resources/views/landing-page/index.blade.php` | 213-216 | Judul "Event" tertulis langsung. |
| 4 | **Beranda (Home)** | **Judul "Forum"** | `resources/views/landing-page/index.blade.php` | 247-250 | Judul "Forum" tertulis langsung. |
| 5 | **Beranda (Home)** | **Peta Muspen & Maket** | `resources/views/landing-page/index.blade.php` | 173-221 | Bagian maket gedung (tab Outdoor, Lantai 1, Lantai 2) dan iframe Sketchfab bersifat statis. |
| 6 | **Tentang Kami** | **Judul "Tentang Kami"** | `resources/views/landing-page/about-us.blade.php` | 7-11 | Judul halaman statis. |
| 7 | **Tentang Kami** | **Bagian "Prestasi"** | `resources/views/landing-page/about-us.blade.php` | 227-250 | Judul "Prestasi" dan semua gambar-gambar penghargaan (carousel) bersifat statis. |
| 8 | **Tentang Kami** | **Bagian "Induk Asosiasi"** | `resources/views/landing-page/about-us.blade.php` | 294-300 | Judul, teks deskripsi panjang, dan LOGO (Kominfo/Komdigi) bersifat statis. |
| 9 | **Partner** | **Bagian "Induk Asosiasi"** | `resources/views/landing-page/partners.blade.php` | 33-40 | Duplikasi dari halaman Tentang Kami, teks dan logo juga statis di sini. |
| 10 | **Navbar (Menu)** | **Logo Website** | `resources/views/landing-page/_part/navbar.blade.php` | 7-19 | Logo header (hitam/putih) dipanggil langsung dari aset statis. |
| 11 | **Navbar (Menu)** | **Item Menu** | `resources/views/landing-page/_part/navbar.blade.php` | 21-29 | Daftar menu (Beranda, Jadwal, Koleksi, dll) tertulis manual di kode. |
| 12 | **Footer** | **Copyright** | `resources/views/landing-page/_part/footer.blade.php` | 35 | Teks "© Museum Penerangan RI 2022" tertulis statis. |

## Rekomendasi Tindakan

1.  **Penggantian Logo Kominfo ke Komdigi**:
    *   Edit file `resources/views/landing-page/about-us.blade.php` dan `resources/views/landing-page/partners.blade.php`.
    *   Ganti `src="assets/img/kominfo.png"` menjadi `src="assets/img/logo_komdigi.png"` (pastikan file logo baru sudah diupload ke folder `public/assets/img/`).

2.  **Update Tahun Copyright**:
    *   Edit `resources/views/landing-page/_part/footer.blade.php`.
    *   Ganti tahun manual (misal 2022) dengan kode dinamis: `{{ date('Y') }}`.

3.  **Manajemen Prestasi**:
    *   Saat ini harus edit manual di `resources/views/landing-page/about-us.blade.php`.
    *   Jika sering berubah, disarankan membuat fitur CRUD "Prestasi" di Admin Panel.