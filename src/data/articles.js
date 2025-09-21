// src/data/articles.js
// Hardcoded dummy data untuk halaman literasi keuangan / article detail

export const CATEGORIES = [
  { key: "all", label: "Semua Kategori" },
  { key: "anggaran", label: "Anggaran" },
  { key: "investasi", label: "Investasi" },
  { key: "utang", label: "Utang" },
  { key: "dana-darurat", label: "Dana Darurat" },
];

export const ARTICLES = [
  {
    id: 1,
    title: "Dana Darurat: Bagaimana dan Di Mana Mempersiapkannya",
    category: "dana-darurat",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Pelajari cara menyiapkan dana darurat, berapa idealnya, dan di instrumen apa menyimpannya supaya tetap aman dan likuid.",
  },
  {
    id: 2,
    title: "5 Alasan Kenapa Uang Perlu Bekerja untuk Kita",
    category: "anggaran",
    image: "/images/duit.jpg",
    excerpt:
      "Jangan hanya menabung — pelajari mengapa membuat uang bekerja (investasi sederhana) penting untuk kebebasan finansial.",
  },
  {
    id: 3,
    title:
      "7 Tujuan Investasi yang Wajib Kamu Miliki untuk Masa Depan Sukses dan Sejahtera",
    category: "investasi",
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Tujuan investasi yang jelas membantu menentukan strategi, horizon, dan alokasi aset yang tepat untukmu.",
  },
  {
    id: 4,
    title: "Cara Melunasi Hutang dengan Perencanaan Keuangan",
    category: "utang",
    image: "/images/Menu-Knowledge.jpg",
    excerpt:
      "Langkah praktis mengatur anggaran dan strategi pembayaran hutang agar utang cepat kelar dan tidak membebani.",
  },
];

export const ARTICLE_DETAILS = {
  1: {
    id: 1,
    title: "Dana Darurat: Bagaimana dan Di Mana Mempersiapkannya",
    category: "Dana Darurat",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1600&auto=format&fit=crop",
    content: `Dana darurat adalah salah satu pilar utama dalam perencanaan keuangan pribadi. Dana ini berfungsi sebagai penyangga ketika terjadi kondisi tak terduga, seperti kehilangan pekerjaan, sakit, kecelakaan, atau kebutuhan mendesak lainnya. Tanpa dana darurat, kita cenderung terjebak pada hutang ketika keadaan darurat muncul.

Berapa Besar Dana Darurat yang Ideal?
Besarnya dana darurat berbeda untuk setiap orang, tetapi umumnya:
- Lajang: 3–6 kali pengeluaran bulanan.
- Menikah tanpa anak: 6–9 kali pengeluaran bulanan.
- Menikah dengan anak: 9–12 kali pengeluaran bulanan.

Contoh: Jika pengeluaran bulanan keluarga adalah Rp5 juta, maka dana darurat yang ideal sekitar Rp45–60 juta.

Di Mana Menyimpan Dana Darurat?
Dana darurat harus mudah diakses, aman, dan tidak berisiko tinggi. Beberapa pilihan instrumen:
1. **Tabungan Bank**  
   Paling aman, likuid, dan mudah diakses kapan saja.
2. **Deposito Jangka Pendek**  
   Memberi bunga sedikit lebih tinggi dari tabungan, tetapi tetap relatif likuid.
3. **Reksa Dana Pasar Uang**  
   Cocok untuk menjaga nilai dana darurat dengan potensi imbal hasil lebih tinggi dari tabungan, namun tetap aman.

Tips Menyusun Dana Darurat
1. Sisihkan minimal 10% dari penghasilan bulanan untuk dana darurat.
2. Pisahkan rekening khusus agar tidak tercampur dengan uang harian.
3. Mulai dari nominal kecil tetapi konsisten.
4. Jangan gunakan dana darurat untuk hal konsumtif (belanja, liburan).

### Mengapa Dana Darurat Penting?
- Memberikan rasa aman saat kondisi darurat terjadi.  
- Mencegah penggunaan hutang konsumtif.  
- Membantu menjaga stabilitas keuangan keluarga.  

Ingat, dana darurat bukan tentang jumlah besar yang langsung terkumpul, tetapi tentang konsistensi menyisihkan sebagian penghasilan hingga target tercapai.`,
    keyPoints: [
      "Idealnya 3–12 kali pengeluaran bulanan, tergantung kondisi keluarga",
      "Simpan di instrumen likuid dan aman (tabungan, deposito, reksa dana pasar uang)",
      "Bangun secara bertahap dengan disiplin menyisihkan penghasilan",
      "Pisahkan rekening dana darurat agar tidak tercampur",
      "Gunakan hanya untuk kondisi darurat, bukan kebutuhan konsumtif",
    ],
  },

  2: {
    id: 2,
    title: "5 Alasan Kenapa Uang Perlu Bekerja untuk Kita",
    category: "Anggaran",
    image: "/images/duit.jpg",
    content: `Banyak orang masih mengandalkan tabungan saja, padahal uang yang hanya disimpan di bank lama-lama nilainya bisa tergerus inflasi. Uang perlu “bekerja” lewat instrumen investasi agar bisa berkembang. Berikut 5 alasan utama:

1. **Mengalahkan Inflasi**  
   Nilai mata uang terus menurun dari tahun ke tahun. Dengan investasi, nilai uangmu bisa tumbuh lebih cepat dibanding inflasi.

2. **Mencapai Tujuan Keuangan**  
   Dari membeli rumah, dana pensiun, hingga liburan, semuanya bisa lebih cepat tercapai dengan return investasi.

3. **Membangun Aset & Kekayaan**  
   Uang yang bekerja secara otomatis menambah asetmu, sehingga kamu tidak hanya bergantung pada gaji.

4. **Sumber Penghasilan Pasif**  
   Investasi seperti reksa dana, saham, atau properti bisa memberi dividen atau sewa sebagai penghasilan tambahan.

5. **Kebebasan Finansial**  
   Dengan uang yang bekerja untukmu, kamu bisa mengurangi ketergantungan pada pekerjaan utama dan punya pilihan hidup lebih luas.`,
    keyPoints: [
      "Mengalahkan inflasi",
      "Mencapai tujuan keuangan lebih cepat",
      "Membangun aset jangka panjang",
      "Menciptakan penghasilan pasif",
      "Mewujudkan kebebasan finansial",
    ],
  },

  3: {
    id: 3,
    title:
      "7 Tujuan Investasi yang Wajib Kamu Miliki untuk Masa Depan Sukses dan Sejahtera",
    category: "Investasi",
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop",
    content: `Investasi tanpa tujuan yang jelas akan membuat kita bingung memilih produk, risiko, dan jangka waktu. Berikut 7 tujuan utama investasi yang wajib kamu pertimbangkan:

1. **Dana Darurat**  
   Harus tersedia agar tidak mengganggu keuangan utama.

2. **Pendidikan Anak**  
   Biaya sekolah dan kuliah makin mahal, investasi jangka panjang bisa membantu.

3. **Dana Pensiun**  
   Agar tetap sejahtera di masa tua tanpa bergantung pada anak.

4. **Membeli Rumah atau Properti**  
   Salah satu tujuan paling umum dan realistis untuk investasi.

5. **Perlindungan dari Inflasi**  
   Dengan investasi, nilai kekayaanmu tidak habis dimakan inflasi.

6. **Membangun Bisnis**  
   Investasi bisa dialihkan menjadi modal usaha.

7. **Kebebasan Finansial**  
   Tujuan tertinggi dari investasi: bisa hidup nyaman tanpa harus terus bekerja.`,
    keyPoints: [
      "Dana darurat",
      "Dana pendidikan anak",
      "Dana pensiun",
      "Beli rumah atau properti",
      "Lindungi aset dari inflasi",
      "Modal membangun bisnis",
      "Kebebasan finansial",
    ],
  },

  4: {
    id: 4,
    title: "Cara Melunasi Hutang dengan Perencanaan Keuangan",
    category: "Utang",
    image: "/images/Menu-Knowledge.jpg",
    content: `Hutang sering jadi beban finansial kalau tidak dikelola dengan baik. Dengan perencanaan keuangan yang tepat, hutang bisa cepat lunas. Berikut langkah-langkahnya:

1. **Catat Semua Hutang**  
   Tulis jumlah, bunga, dan jatuh tempo tiap hutang agar lebih jelas.

2. **Prioritaskan Hutang Bunga Tinggi**  
   Lunasi yang bunganya paling tinggi dulu agar beban berkurang signifikan.

3. **Gunakan Metode Debt Snowball / Avalanche**  
   Pilih strategi yang cocok: melunasi hutang kecil dulu (snowball) atau hutang bunga tinggi dulu (avalanche).

4. **Buat Anggaran Realistis**  
   Alokasikan minimal 20-30% dari penghasilan untuk pembayaran hutang.

5. **Tambahkan Sumber Penghasilan**  
   Cari side job atau usaha kecil untuk menambah dana pelunasan.

6. **Hindari Hutang Baru**  
   Stop menggunakan kartu kredit atau meminjam lagi sebelum hutang lama selesai.`,
    keyPoints: [
      "Catat seluruh hutang secara detail",
      "Prioritaskan hutang dengan bunga tinggi",
      "Gunakan strategi snowball atau avalanche",
      "Buat anggaran khusus untuk pembayaran hutang",
      "Cari tambahan penghasilan dan hindari hutang baru",
    ],
  },
};
