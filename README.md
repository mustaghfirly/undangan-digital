# Undangan Digital Pernikahan

Template undangan pernikahan digital satu halaman dengan pasangan fiktif **Nadia & Syahrul**. Dibuat sebagai contoh portofolio jasa pembuatan website.

🔗 **Demo:** https://mustaghfirly.github.io/NAMA-REPO/

## Fitur

- **Cover "Buka Undangan"** dengan nama tamu otomatis dari link (`?to=Nama`)
- **Hitung mundur** menuju hari acara
- Detail **akad dan resepsi** lengkap dengan tombol Google Maps
- **Konfirmasi kehadiran (RSVP)** yang terkirim lewat WhatsApp
- **Amplop digital** dengan tombol salin nomor rekening
- **Responsif**, nyaman dibuka dari HP

## Teknologi

- HTML5
- CSS3 (CSS variables, Grid, Flexbox)
- JavaScript (vanilla, tanpa framework)
- Google Fonts (Cormorant Garamond, Nunito Sans)

## Struktur Folder

```
undangan-digital/
├── index.html
├── style.css
└── script.js
```

## Cara Menjalankan

1. Clone repository:
   ```
   git clone https://github.com/mustaghfirly/NAMA-REPO.git
   ```
2. Buka folder proyek.
3. Buka `index.html` di browser, atau pakai ekstensi **Live Server** di VS Code.

## Cara Menyesuaikan untuk Klien

| Yang diganti | Lokasi |
|---|---|
| Nama pasangan | `index.html` (cover, hero, footer) |
| Tanggal dan jam acara | `index.html` dan variabel `target` di `script.js` |
| Lokasi dan link Google Maps | `index.html` |
| Nomor WhatsApp penerima RSVP | variabel `WA` di `script.js` |
| Nomor rekening | `index.html` |
| Warna | bagian `:root` di `style.css` |

**Membuat link per tamu:** tambahkan `?to=Nama Tamu` di akhir alamat, contoh `index.html?to=Budi%20Santoso`. Satu undangan bisa dibagikan dengan link berbeda untuk setiap tamu.

## Catatan

Ini adalah proyek contoh. Nama, lokasi, nomor WhatsApp, dan rekening di dalamnya fiktif.

## Dibuat oleh

**Rul**: Mahasiswa Informatika yang sedang membangun portofolio web.
GitHub: [@mustaghfirly](https://github.com/mustaghfirly)
