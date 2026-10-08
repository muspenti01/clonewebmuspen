# Panduan Penggunaan Dashboard Admin Website Museum Penerangan

Selamat datang di Dashboard Admin Website Museum Penerangan. Dokumen ini dirancang sebagai panduan praktis bagi pengguna (admin) untuk memahami dan mengelola konten website melalui panel administrasi.

---

## 1. Halaman Utama (Dashboard)

Setelah berhasil login, Anda akan diarahkan ke halaman **Dashboard**. Halaman ini memberikan ringkasan cepat mengenai statistik pengunjung museum:
- **Offline Visitor Today**: Jumlah pengunjung yang datang langsung ke museum hari ini.
- **Online Visitor Today**: Jumlah pengunjung yang mengakses website hari ini.
- **Grafik Mingguan**: Visualisasi data pengunjung (Offline vs Online) dalam satu minggu terakhir.
- **Statistik Total**: Angka akumulatif untuk Total Pengunjung, Koleksi, Event, dan Artikel yang ada di database.

---

## 2. Manajemen Konten Utama

Menu-menu ini digunakan untuk mengubah informasi publik yang tampil di website.

### **Teams (Tim & Staff)**
- **Fungsi**: Mengelola profil pegawai atau tim museum.
- **Kegunaan**: Menambah, mengedit, atau menghapus foto, nama, dan jabatan staff yang tampil di halaman "Tentang Kami" atau "Struktur Organisasi".

### **Galleries (Galeri Foto)**
- **Fungsi**: Mengunggah dokumentasi kegiatan atau foto-foto museum.
- **Kegunaan**: Foto yang diunggah di sini akan muncul di halaman Galeri website.

### **Collections (Koleksi Museum)**
Menu ini memiliki sub-menu:
1.  **Collections**: Tempat menginput data benda koleksi museum (Nama, Deskripsi, Foto).
2.  **Categories**: Mengelompokkan koleksi (misal: Radio, Kamera, Diorama).
    *   *Tips: Buat Kategori terlebih dahulu sebelum menginput Koleksi.*

### **CMS (Content Management System)**
Menu khusus untuk pengaturan konten spesifik:
1.  **Application**: Mengelola konten untuk aplikasi pendukung (jika ada).
2.  **Categories & Tags**: Pengaturan label dan kategori untuk konten CMS.
3.  **Location**: Mengelola data lokasi (misal untuk peta interaktif).

### **Partners (Mitra)**
- **Fungsi**: Menampilkan logo instansi atau perusahaan yang bekerjasama dengan Muspen.

### **Events (Kegiatan)**
- **Fungsi**: Mempublikasikan jadwal acara museum.
- **Kegunaan**: Admin dapat membuat event baru dengan detail tanggal, deskripsi, dan kuota peserta. Event ini akan muncul di kalender website agar pengunjung bisa mendaftar.

### **Muspen Updates**
- **Fungsi**: Menampilkan postingan media sosial terbaru (Instagram Reels/Post, TikTok, atau Twitter/X) di halaman beranda website.
- **Cara Pengisian Embed Code**:
  1. Buka postingan/reel di Instagram melalui browser.
  2. Klik ikon titik tiga (**...**) di kanan atas postingan > pilih **Sematkan (Embed)** > salin kode embed.
  3. Tempelkan ke kolom **Embed Code**. Tag `<script>` di bagian bawah akan otomatis dibersihkan oleh sistem agar aman dari pemblokiran firewall server.
- **Template Manual (Tinggal Ganti URL Postingan)**:
  Jika ingin membuat secara manual tanpa perlu copy dari Instagram:

  **1. Template untuk Instagram Feed / Foto / Video (`/p/`):**
  ```html
  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/KODE_POSTINGAN/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
    <div style="padding:16px;">
      <a href="https://www.instagram.com/p/KODE_POSTINGAN/" target="_blank">Lihat postingan ini di Instagram</a>
    </div>
  </blockquote>
  ```

  **2. Template untuk Instagram Reels (`/reel/`):**
  ```html
  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/KODE_REEL/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
    <div style="padding:16px;">
      <a href="https://www.instagram.com/reel/KODE_REEL/" target="_blank">Lihat reel ini di Instagram</a>
    </div>
  </blockquote>
  ```
  *(Cukup ganti bagian link `https://www.instagram.com/...` dengan URL postingan Instagram yang ingin ditampilkan).*

### **TV Links**
- **Fungsi**: Mengelola tautan video (misal Youtube) yang ditampilkan di area Muspen TV pada website.

---

## 3. Interaksi Pengguna & Laporan

### **Reports (Laporan)**
- **Fungsi**: Melihat laporan yang masuk terkait konten website atau aktivitas pengguna lain.

### **Complaints (Saran & Aduan)**
- **Fungsi**: Kotak masuk untuk pesan, saran, atau keluhan yang dikirim pengunjung melalui formulir "Hubungi Kami" atau "Pengaduan".
- **Tindakan**: Admin wajib mengecek menu ini secara berkala untuk merespons masukan masyarakat.

---

## 4. Manajemen Pengunjung (Visitor Management)

### **Visitors (Data Statistik)**
1.  **Onsite Visitors**: Data detail pengunjung fisik (Buku Tamu Digital).
2.  **Online Visitors**: Data trafik pengunjung website.

### **Reservasi (Pemesanan Kunjungan)**
Menu krusial untuk mengatur jadwal kunjungan rombongan atau perorangan:
1.  **Approval**: Halaman persetujuan. Admin harus menyetujui (Approve) atau menolak (Reject) permohonan kunjungan yang masuk.
2.  **Event**: Data pendaftar khusus untuk Event tertentu.
3.  **Terjadwal**: Daftar kunjungan yang sudah disetujui dan dijadwalkan.

### **Guest Book (Buku Tamu)**
- **Fungsi**: Rekap data buku tamu harian. Admin bisa melihat siapa saja yang hadir hari ini beserta detail instansi/asalnya.

### **Survey Data**
- **Fungsi**: Melihat hasil survei kepuasan pengunjung (IKM - Indeks Kepuasan Masyarakat) yang telah diisi oleh tamu.

---

## 5. Forum Diskusi

Website ini memiliki fitur Forum/Blog di mana pengguna bisa berinteraksi.
1.  **Approvals**: Memoderasi artikel atau postingan dari pengguna sebelum tayang di publik.
2.  **Categories & Tags**: Mengatur topik diskusi.
3.  **Articles**: Mengelola artikel resmi dari admin atau artikel pengguna.
4.  **Comments**: Memantau komentar netizen. Admin bisa menghapus komentar yang mengandung SPAM atau bahasa kasar.

---

## 6. Pengaturan Sistem (System & Settings)

Menu teknis untuk administrator utama (Super Admin).

### **System**
1.  **Users**: Mengelola akun admin lain (Tambah/Hapus admin).
2.  **Roles & Permissions**: Mengatur hak akses (siapa yang boleh edit, siapa yang hanya boleh lihat).
3.  **Logs**: Catatan aktivitas sistem (untuk audit keamanan).

### **Settings**
1.  **Info Perusahaan**: Mengubah alamat, nomor telepon, dan email museum yang tampil di footer website.
2.  **Social Media**: Mengatur link Facebook, Instagram, Twitter, dll.
3.  **Web Info**: Pengaturan umum website lainnya (Judul situs, deskripsi SEO, dll).

---

## Tips Keamanan untuk Admin
1.  **Password**: Gunakan password yang kuat dan ganti secara berkala.
2.  **Logout**: Selalu klik Logout (Keluar) setelah selesai bekerja, terutama jika menggunakan komputer umum.
3.  **Verifikasi**: Hati-hati saat menyetujui (Approve) artikel atau komentar di forum, pastikan tidak mengandung unsur SARA atau Hoax.
