// src/data/exercises.js
import { courses } from "./courses";

// helper ambil nama topik
const getTopic = (courseId, topicIndex) => {
  const course = courses.find(c => c.id === courseId);
  return course ? course.topics[topicIndex].name : "";
};

export const EXERCISES = {
  // 1. Adobe Photoshop (Course 1, Topic 0)
  "1-0": [
    {
      id: 1,
      question: "Adobe Photoshop berbasis?",
      options: ["Vektor", "Raster", "3D Modeling"],
      correct: 1,
      topic: getTopic(1, 0),
    },
    {
      id: 2,
      question: "File default Adobe Photoshop berekstensi?",
      options: [".AI", ".PSD", ".JPG"],
      correct: 1,
      topic: getTopic(1, 0),
    },
    {
      id: 3,
      question: "Shortcut undo di Photoshop adalah?",
      options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + Shift + Z"],
      correct: 0,
      topic: getTopic(1, 0),
    },
    {
      id: 4,
      question: "Layer mask digunakan untuk?",
      options: [
        "Menghapus layer",
        "Menyembunyikan bagian layer tanpa menghapus permanen",
        "Mengubah warna layer",
      ],
      correct: 1,
      topic: getTopic(1, 0),
    },
    {
      id: 5,
      question: "Mode warna standar untuk cetak?",
      options: ["RGB", "CMYK", "Grayscale"],
      correct: 1,
      topic: getTopic(1, 0),
    },
  ],

  // 2. Adobe Illustrator (Course 1, Topic 1)
  "1-1": [
    {
      id: 1,
      question: "Adobe Illustrator berbasis?",
      options: ["Raster", "Vektor", "Bitmap"],
      correct: 1,
      topic: getTopic(1, 1),
    },
    {
      id: 2,
      question: "File default Illustrator berekstensi?",
      options: [".AI", ".PSD", ".INDD"],
      correct: 0,
      topic: getTopic(1, 1),
    },
    {
      id: 3,
      question: "Tool membuat bentuk dasar?",
      options: ["Pen Tool", "Shape Tool", "Brush Tool"],
      correct: 1,
      topic: getTopic(1, 1),
    },
    {
      id: 4,
      question: "Kelebihan desain vektor?",
      options: [
        "Tidak pecah saat diperbesar",
        "Lebih detail warna",
        "Lebih kecil ukuran selalu",
      ],
      correct: 0,
      topic: getTopic(1, 1),
    },
    {
      id: 5,
      question: "Format ekspor vektor dari Illustrator?",
      options: ["PNG", "SVG", "JPEG"],
      correct: 1,
      topic: getTopic(1, 1),
    },
  ],

  // 3. Branding (Course 1, Topic 2)
  "1-2": [
    {
      id: 1,
      question: "Branding adalah?",
      options: [
        "Logo perusahaan",
        "Proses membangun citra di mata konsumen",
        "Iklan di media sosial",
      ],
      correct: 1,
      topic: getTopic(1, 2),
    },
    {
      id: 2,
      question: "Elemen penting dalam branding?",
      options: ["Logo", "Warna", "Janji ke konsumen"],
      correct: 2,
      topic: getTopic(1, 2),
    },
    {
      id: 3,
      question: "Branding berbeda dengan?",
      options: ["Logo", "Pemasaran", "Strategi"],
      correct: 0,
      topic: getTopic(1, 2),
    },
    {
      id: 4,
      question: "Tujuan branding?",
      options: [
        "Meningkatkan persepsi positif konsumen",
        "Membuat database",
        "Mengatur laporan keuangan",
      ],
      correct: 0,
      topic: getTopic(1, 2),
    },
    {
      id: 5,
      question: "Branding mencakup?",
      options: ["Produk", "Layanan", "Pengalaman konsumen"],
      correct: 2,
      topic: getTopic(1, 2),
    },
  ],

  // 4. Typography (Course 1, Topic 3)
  "1-3": [
    {
      id: 1,
      question: "Tipografi adalah seni mengatur?",
      options: ["Warna", "Huruf", "Foto"],
      correct: 1,
      topic: getTopic(1, 3),
    },
    {
      id: 2,
      question: "Tujuan utama tipografi?",
      options: [
        "Membuat teks mudah dibaca",
        "Mempercepat loading website",
        "Mengurangi ukuran file",
      ],
      correct: 0,
      topic: getTopic(1, 3),
    },
    {
      id: 3,
      question: "Font termasuk bagian dari?",
      options: ["Tipografi", "Ilustrasi", "Branding"],
      correct: 0,
      topic: getTopic(1, 3),
    },
    {
      id: 4,
      question: "Jenis huruf sans-serif dicirikan oleh?",
      options: ["Tanpa kait", "Dengan kait", "Hiasan tebal"],
      correct: 0,
      topic: getTopic(1, 3),
    },
    {
      id: 5,
      question: "Kerning adalah?",
      options: [
        "Jarak antar huruf",
        "Tinggi huruf",
        "Lebar paragraf",
      ],
      correct: 0,
      topic: getTopic(1, 3),
    },
  ],

  // 5. Content Planning (Course 2, Topic 0)
  "2-0": [
    {
      id: 1,
      question: "Content Planning adalah?",
      options: [
        "Mengatur postingan konten",
        "Menganalisis laporan keuangan",
        "Mengedit foto",
      ],
      correct: 0,
      topic: getTopic(2, 0),
    },
    {
      id: 2,
      question: "Langkah awal content planning?",
      options: ["Menentukan audiens", "Membeli iklan", "Menambah follower"],
      correct: 0,
      topic: getTopic(2, 0),
    },
    {
      id: 3,
      question: "Tools untuk content planning?",
      options: ["Google Calendar", "Canva", "Photoshop"],
      correct: 0,
      topic: getTopic(2, 0),
    },
    {
      id: 4,
      question: "Tujuan content planning?",
      options: [
        "Konsistensi postingan",
        "Meningkatkan like",
        "Mengurangi biaya server",
      ],
      correct: 0,
      topic: getTopic(2, 0),
    },
    {
      id: 5,
      question: "Output dari content planning?",
      options: ["Calendar konten", "Desain logo", "Email pelanggan"],
      correct: 0,
      topic: getTopic(2, 0),
    },
  ],

  // 6. Social Media Strategy (Course 2, Topic 1)
  "2-1": [
    {
      id: 1,
      question: "Social Media Strategy adalah?",
      options: [
        "Strategi pemasaran di media sosial",
        "Strategi keuangan",
        "Strategi HRD",
      ],
      correct: 0,
      topic: getTopic(2, 1),
    },
    {
      id: 2,
      question: "Langkah penting dalam strategi media sosial?",
      options: ["Menentukan tujuan", "Membeli domain", "Coding website"],
      correct: 0,
      topic: getTopic(2, 1),
    },
    {
      id: 3,
      question: "Indikator keberhasilan strategi?",
      options: ["Engagement", "Jumlah iklan", "Harga domain"],
      correct: 0,
      topic: getTopic(2, 1),
    },
    {
      id: 4,
      question: "Platform utama strategi B2B?",
      options: ["LinkedIn", "TikTok", "Pinterest"],
      correct: 0,
      topic: getTopic(2, 1),
    },
    {
      id: 5,
      question: "Strategi sosial harus selaras dengan?",
      options: ["Tujuan bisnis", "Warna logo", "Ukuran file"],
      correct: 0,
      topic: getTopic(2, 1),
    },
  ],

  // 7. Analytics (Course 2, Topic 2)
  "2-2": [
    {
      id: 1,
      question: "Analytics di media sosial berguna untuk?",
      options: [
        "Mengukur efektivitas kampanye",
        "Mengedit foto",
        "Menghitung keuangan",
      ],
      correct: 0,
      topic: getTopic(2, 2),
    },
    {
      id: 2,
      question: "Tools analytics populer?",
      options: ["Google Analytics", "Word", "Excel"],
      correct: 0,
      topic: getTopic(2, 2),
    },
    {
      id: 3,
      question: "Engagement rate dihitung dari?",
      options: ["Like, komentar, share", "Jumlah postingan", "Jumlah akun"],
      correct: 0,
      topic: getTopic(2, 2),
    },
    {
      id: 4,
      question: "Data analytics membantu?",
      options: [
        "Mengambil keputusan berbasis data",
        "Membuat logo",
        "Membangun jaringan",
      ],
      correct: 0,
      topic: getTopic(2, 2),
    },
    {
      id: 5,
      question: "CTR dalam analytics berarti?",
      options: [
        "Click Through Rate",
        "Customer Target Rate",
        "Content Trend Report",
      ],
      correct: 0,
      topic: getTopic(2, 2),
    },
  ],

  // 8. Copywriting (Course 2, Topic 3)
  "2-3": [
    {
      id: 1,
      question: "Copywriting adalah seni?",
      options: [
        "Menulis teks promosi",
        "Mengedit gambar",
        "Menganalisis data",
      ],
      correct: 0,
      topic: getTopic(2, 3),
    },
    {
      id: 2,
      question: "Tujuan utama copywriting?",
      options: [
        "Meyakinkan pembaca untuk bertindak",
        "Menambah follower",
        "Meningkatkan SEO",
      ],
      correct: 0,
      topic: getTopic(2, 3),
    },
    {
      id: 3,
      question: "Kalimat CTA dalam copywriting berarti?",
      options: ["Call to Action", "Call to Audience", "Click to Agree"],
      correct: 0,
      topic: getTopic(2, 3),
    },
    {
      id: 4,
      question: "Copywriting berbeda dengan content writing karena?",
      options: [
        "Lebih persuasif",
        "Lebih panjang",
        "Lebih teknis",
      ],
      correct: 0,
      topic: getTopic(2, 3),
    },
    {
      id: 5,
      question: "Elemen penting dalam copywriting?",
      options: ["Headline", "Footer", "Background"],
      correct: 0,
      topic: getTopic(2, 3),
    },
  ],
  
  // 9. Hidroponik (Course 3, Topic 0)
  "3-0": [
    {
      id: 1,
      question: "Hidroponik adalah metode tanam tanpa?",
      options: ["Tanah", "Air", "Pupuk"],
      correct: 0,
      topic: getTopic(3, 0),
    },
    {
      id: 2,
      question: "Media tanam hidroponik umum?",
      options: ["Rockwool", "Tanah liat", "Pasir pantai"],
      correct: 0,
      topic: getTopic(3, 0),
    },
    {
      id: 3,
      question: "Kelebihan hidroponik?",
      options: [
        "Menghemat air",
        "Lebih mahal pupuk",
        "Hanya bisa di lahan luas",
      ],
      correct: 0,
      topic: getTopic(3, 0),
    },
    {
      id: 4,
      question: "Nutrisi hidroponik disebut?",
      options: ["AB Mix", "Fertilizer", "Compost"],
      correct: 0,
      topic: getTopic(3, 0),
    },
    {
      id: 5,
      question: "Jenis tanaman cocok hidroponik?",
      options: ["Sayuran daun", "Padi", "Jagung"],
      correct: 0,
      topic: getTopic(3, 0),
    },
  ],

  // 10. Organic Farming (Course 3, Topic 1)
  "3-1": [
    {
      id: 1,
      question: "Pertanian organik mengutamakan?",
      options: [
        "Bahan alami",
        "Pestisida kimia",
        "Rekayasa genetik",
      ],
      correct: 0,
      topic: getTopic(3, 1),
    },
    {
      id: 2,
      question: "Tujuan utama pertanian organik?",
      options: [
        "Menjaga kesehatan tanah dan lingkungan",
        "Produksi massal cepat",
        "Mengurangi tenaga kerja",
      ],
      correct: 0,
      topic: getTopic(3, 1),
    },
    {
      id: 3,
      question: "Contoh pupuk organik?",
      options: ["Kompos", "Urea", "ZA"],
      correct: 0,
      topic: getTopic(3, 1),
    },
    {
      id: 4,
      question: "Pertanian organik menghindari?",
      options: [
        "Pestisida kimia",
        "Rotasi tanaman",
        "Pupuk kandang",
      ],
      correct: 0,
      topic: getTopic(3, 1),
    },
    {
      id: 5,
      question: "Label produk organik menunjukkan?",
      options: [
        "Produk ramah lingkungan",
        "Produk impor",
        "Produk GMO",
      ],
      correct: 0,
      topic: getTopic(3, 1),
    },
  ],
};
