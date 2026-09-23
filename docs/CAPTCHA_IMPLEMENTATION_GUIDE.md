# Dokumentasi Implementasi Captcha dan Keamanan Komentar

Dokumen ini menjelaskan langkah-langkah implementasi keamanan pada fitur komentar di website Muspen, mencakup penggunaan `mews/captcha`, validasi server-side, rate limiting, dan penanganan AJAX.

## 1. Instalasi Library Captcha
Kami menggunakan library `mews/captcha` untuk menyediakan fitur captcha yang aman dan mudah diintegrasikan dengan Laravel.

### Instalasi via Composer
```bash
composer require mews/captcha
```

### Konfigurasi Service Provider dan Alias
Pada file `config/app.php`:
```php
'providers' => [
    // ...
    Mews\Captcha\CaptchaServiceProvider::class,
],
'aliases' => [
    // ...
    'Captcha' => Mews\Captcha\Facades\Captcha::class,
],
```

## 2. Implementasi Backend (Server-Side)

### Validasi pada Controller
Pada `app/Http/Controllers/CommentController.php`, validasi dilakukan menggunakan metode `$request->validate()`. Aturan validasi mencakup pengecekan input captcha yang dikirim oleh pengguna.

```php
$request->validate([
    'name' => 'required|string|max:100',
    'body' => 'required|string|min:15|max:5000',
    'email' => 'required|email',
    'article_id' => 'required|integer',
    'captcha' => 'required|captcha', // Validasi captcha
    'hp' => 'nullable|max:0', // Honeypot untuk bot spam
], [
    'captcha.required' => 'Kode captcha wajib diisi.',
    'captcha.captcha' => 'Kode captcha salah. Silakan coba lagi.',
    // Pesan error lainnya dalam Bahasa Indonesia
]);
```

### Rate Limiting
Untuk mencegah serangan brute-force atau spam massal, kami menerapkan pembatasan jumlah permintaan (rate limiting) pada rute penyimpanan komentar.

Pada `routes/web.php`:
```php
Route::post('/comment/store', [CommentController::class, 'store'])
    ->name('comment.store')
    ->middleware('throttle:3,1'); // Maksimal 3 komentar per menit per IP
```

## 3. Implementasi Frontend (Client-Side)

### Tampilan Form Komentar
Pada file `resources/views/landing-page/blog/detail.blade.php`, form komentar menampilkan gambar captcha yang dapat diperbarui (refresh) tanpa memuat ulang halaman.

```html
<div class="form-group">
    <label>Kode Keamanan <span class="required">*</span></label>
    <div class="captcha-wrapper">
        <span class="captcha-image">{!! captcha_img('flat') !!}</span>
        <button type="button" class="btn btn-sm btn-refresh" id="reload-captcha">&#x21bb;</button>
    </div>
    <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode di atas" required>
    <div id="captcha-error" class="text-danger mt-1" style="display:none;"></div>
</div>
```

### Penanganan AJAX
Pengiriman komentar dilakukan secara asinkron menggunakan jQuery AJAX untuk pengalaman pengguna yang lebih baik (tanpa reload halaman).

```javascript
$('#commentForm').on('submit', function(e) {
    e.preventDefault();
    // ... logika pengiriman data ...
    $.ajax({
        // ...
        success: function(response) {
            // Tampilkan pesan sukses
            alert(response.message);
            // Reset form dan refresh captcha
            $('#commentForm')[0].reset();
            $('#reload-captcha').click();
        },
        error: function(xhr) {
            // Tampilkan pesan error validasi (termasuk captcha salah)
            if (xhr.status === 422) {
                var errors = xhr.responseJSON.errors;
                // Loop error dan tampilkan di bawah field terkait
            }
        }
    });
});
```

### Fitur Refresh Captcha
Fitur ini memungkinkan pengguna untuk memuat ulang gambar captcha jika gambar sulit dibaca.

```javascript
$('#reload-captcha').click(function() {
    $.ajax({
        type: 'GET',
        url: 'reload-captcha',
        success: function(data) {
            $('.captcha-image').html(data.captcha);
        }
    });
});
```
# Dokumentasi Keamanan & Implementasi Captcha (mews/captcha)

**Proyek:** Website Museum Penerangan (Muspen)  
**Modul:** Fitur Komentar & Interaksi Publik  
**Status:** Production Ready  
**Tingkat Keamanan:** High (Server-Side Validation)

---

## 1. Latar Belakang & Masalah
Sebelumnya, validasi captcha pada website ini menggunakan metode **Client-Side (JavaScript)**. Metode ini memiliki kelemahan fatal:
- **Kunci Jawaban Terekspos:** Logika validasi berjalan di browser pengguna, sehingga bot pintar bisa membaca kunci jawaban.
- **Bypass Mudah:** Penyerang bisa mematikan JavaScript atau memanipulasi request API untuk mengirim komentar tanpa melewati validasi captcha.
- **Risiko Spam:** Website rentan dibanjiri komentar spam otomatis.

## 2. Solusi: Server-Side Captcha
Untuk mengatasi masalah tersebut, sistem diganti menggunakan library **mews/captcha** yang bekerja di sisi server (Laravel Backend).

### Arsitektur Keamanan
1.  **Generate Gambar:** Server membuat gambar acak yang berisi kode unik.
2.  **Session Storage:** Kode jawaban yang benar disimpan secara **terenkripsi di Session Server**, TIDAK dikirim ke browser.
3.  **User Input:** Pengguna hanya melihat gambar dan diminta mengetik ulang apa yang dilihat.
4.  **Validasi:** Saat form dikirim, server membandingkan input pengguna dengan data di Session.
    - **Cocok:** Proses lanjut (Simpan Komentar).
    - **Gagal:** Proses berhenti, kembalikan error 422.

---

## 3. Implementasi Teknis

### A. Dependensi
Library yang digunakan adalah standar industri untuk Laravel:
```json
// composer.json
"require": {
    "mews/captcha": "^3.3"
}
```

### B. Tampilan (Frontend)
File: `resources/views/landing-page/blog/detail.blade.php`

Kode ini menampilkan gambar captcha yang dinamis. Setiap kali halaman dimuat (atau gambar diklik), server akan membuat soal baru.
```html
<!-- Gambar Captcha -->
<img src="{{ captcha_src('flat') }}" alt="captcha" onclick="this.src='{{ captcha_src('flat') }}'+Math.random()" style="cursor:pointer" title="Klik untuk refresh">

<!-- Input User -->
<input type="text" name="captcha" class="form-control @error('captcha') is-invalid @enderror" required>

<!-- Pesan Error -->
@error('captcha')
    <div class="text-danger">Captcha salah!</div>
@enderror
```

### C. Validasi (Backend)
File: `app/Http/Controllers/CommentController.php`

Validator Laravel memastikan field `captcha` wajib diisi dan harus cocok dengan session.
```php
public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email',
        'body' => 'required|string',
        
        // Aturan 'captcha' ini otomatis mengecek kebenaran input user
        'captcha' => 'required|captcha' 
    ]);

    // Jika lolos, simpan komentar...
}
```

---

## 4. Konfigurasi & Kustomisasi
Konfigurasi captcha diatur di file `config/captcha.php`. Anda bisa mengubah tingkat kesulitan atau tampilan di sini.

**Contoh Profil 'flat' (yang digunakan saat ini):**
```php
'flat' => [
    'length'    => 4,      // Jumlah karakter (misal: 4 huruf)
    'width'     => 160,    // Lebar gambar
    'height'    => 46,     // Tinggi gambar
    'quality'   => 90,     // Kualitas gambar
    'lines'     => 6,      // Garis coretan (noise) agar susah dibaca bot
    'bgImage'   => false,  // Background polos
    'bgColor'   => '#ecf2f4',
    'fontColors'=> ['#2c3e50', '#c0392b', '#16a085', '#c0392b', '#8e44ad', '#303f9f', '#f57c00', '#795548'],
],
```

---

## 5. Troubleshooting (Masalah Umum)

### Masalah: "Captcha selalu salah padahal input benar"
**Penyebab:** Session tidak tersimpan atau hilang.
**Solusi:**
1.  Pastikan folder `storage/framework/sessions` bisa ditulisi (writable).
2.  Cek konfigurasi `.env`, pastikan `SESSION_DRIVER=file` (atau `database`/`redis` jika production).
3.  Pastikan browser menerima cookie session dari server.

### Masalah: "Gambar Captcha tidak muncul (Broken Image)"
**Penyebab:** Library GD PHP belum aktif.
**Solusi:**
1.  Pastikan ekstensi `gd` aktif di `php.ini` (`extension=gd`).
2.  Jalankan `php artisan config:clear` untuk membersihkan cache konfigurasi.

---

## 6. Pengujian Keamanan (Security Testing)
Untuk memastikan fitur ini aman, Anda bisa melakukan tes berikut:

1.  **Tes Bypass:** Coba kirim request POST langsung ke `/comment` tanpa parameter `captcha`.
    *   *Hasil:* Server harus menolak dengan status 422 (Unprocessable Entity).
2.  **Tes Brute Force:** Coba kirim ribuan request dengan kode acak.
    *   *Hasil:* Rate Limiter (`throttle:3,1`) akan memblokir IP setelah 3 percobaan gagal.
3.  **Tes Replay:** Coba gunakan kode captcha yang sudah pernah dipakai (valid) untuk request kedua.
    *   *Hasil:* Server harus menolak, karena kode captcha sekali pakai (one-time use).
