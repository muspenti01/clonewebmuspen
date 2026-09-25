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
Tombol refresh memungkinkan pengguna meminta gambar captcha baru jika yang sebelumnya sulit dibaca.

```javascript
$('#reload-captcha').click(function() {
    $.ajax({
        type: 'GET',
        url: '{{ route("captcha.refresh") }}',
        success: function(data) {
            $('.captcha-image').html(data.captcha);
        }
    });
});
```

## 4. Keamanan Tambahan

### Honeypot Field
Kami menambahkan field tersembunyi (`hp`) yang tidak terlihat oleh pengguna manusia. Jika field ini diisi (biasanya oleh bot), validasi akan gagal.

```html
<input type="text" name="hp" style="display:none">
```

Validasi di controller: `'hp' => 'nullable|max:0'`

## 5. Pesan Notifikasi
Seluruh pesan notifikasi (sukses dan gagal) telah diterjemahkan ke dalam Bahasa Indonesia untuk memudahkan pengguna.

- **Sukses**: "Komentar berhasil dikirim! Menunggu moderasi admin."
- **Gagal**: "Terjadi kesalahan. Silakan coba lagi."
- **Validasi**: "Kode captcha salah.", "Isi komentar wajib diisi.", dll.
