## Panduan Berkontribusi di Project "Landing Page UNIICODE"

### Persiapan Awal

1. **Fork Repositori**: Klik tombol "Fork" di pojok kanan atas dari repositori asli.

2. **Clone Repositori**: Buka terminal kamu, lalu jalankan perintah:

   ```bash
   git clone https://github.com/usernamekamu/Landing-Page-UNIICODE.git
   ```

   Ganti `usernamekamu` dengan username GitHub kamu, ya.

3. **Tambahkan Remote Upstream**: Biar lebih mudah nanti kalau mau sinkron dengan repo asli.
   ```bash
   git remote add upstream https://github.com/aslinya/Landing-Page-UNIICODE.git
   ```
   Ganti `aslinya` dengan username atau organisasi yang memiliki repo asli.

### Mulai Berkontribusi

1. **Pilih Issue atau Fitur**: Cek issues atau list fitur yang belum dikerjakan. Kalau mau kerjaan yang lebih, bisa diskusi sama tim.

2. **Buat Branch Baru**: Jangan lupa, jangan kerja di branch `main` atau `master`, ya!

   ```bash
   git checkout -b nama-branch-baru
   ```

3. **Koding Sesuai Issue atau Fitur**: Lakukan perubahan atau tambahan kode sesuai yang dibutuhkan. Jangan ngasal, ya! 😡

4. **Commit Perubahan**: Setelah selesai, jangan lupa commit.

   ```bash
   git add .
   git commit -m "Tulis pesan commit yang jelas di sini"
   ```

5. **Push Ke Forked Repository**: Upload perubahan ke GitHub.
   ```bash
   git push origin nama-branch-baru
   ```

### Pull Request (PR)

1. **Buat Pull Request**: Buka halaman GitHub forked repositori kamu, pilih "New Pull Request".

2. **Review dan Submit**: Pastikan perubahanmu sudah oke dan sesuai dengan yang dibutuhkan, baru submit PR.

3. **Tunggu Review**: Tim akan review kode kamu. Kalau ada masalah, ya diperbaiki.

4. **Merge atau Closed**: Kalau sudah oke, PR kamu akan di-merge. Kalau nggak, ya ditutup. Simple.
