import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Product.createMany([
      {
        name: 'Pemandangan Indah',
        description: `Beberapa pemandangan`,
        wa_number: '088289570068',
        price: 999999999,
      },
      {
        name: 'SIJA AIThreads Black T-Shirt',
        description: `Kaos tema AI Threads adalah kaos dengan desain yang terinspirasi oleh perkembangan teknologi kecerdasan buatan (AI) dan Sistem Infromasi Jaringan dan Aplikasi(SIJA). Kaos ini menggunakan gambar atau grafik yang menunjukkan berbagai penjelasan tentang Kelas XII SIJA 2 dan teknologi AI.`,
        wa_number: '085717919259',
        price: 89999,
      },
      {
        name: 'Anari Girls',
        description: `- ANARI merupakan nama brand produk kami. ANARI sendiri merupakan singkatan dari nama kami, yaitu Asia, Nasywa, dan Rini
- Ukuran: 35cm x 39 cm
- Bahan: Kanvas
- Warna: Broken White
- Cocok dibawa ke sekolah dan kantor karena ukurannya yang tidak terlalu besar dan terlalu kecil`,
        wa_number: '085715530645',
        price: 12000,
      },
      {
        name: 'Cute Astronaut T-Shirt',
        description: `T-Shirt Original by camil's collection, berbahan Cotton Combed 30s High Quality. Tersedia berbagai pilihan warna, ukuran (S, M, L, XL).`,
        wa_number: '081291125062',
        price: 30000,
      },
      {
        name: 'Totebag',
        description: `Tas jinjing (tote bag) bernama Lafeyo yang diambil dari ketiga nama anggota kelompok, mempunyai desain yang simple dan kekinian. Hope u like it </3`,
        wa_number: '081291125070',
        price: 49900,
      },
      {
        name: "O'Sweats",
        description: `Sweater yang terbuat dari bahan babyterry berkualitas. Tersedia berbagai banyak ukuran, mulai dari ukuran S, M, L, XL. Bahan yang digunakan adem. Tersedia berbagai varian warna, seperti abu-abu, merah, dan hitam. Dapat request inisial nama, dan gambarnya juga bisa kustom lho.`,
        wa_number: '085786939676',
        price: 50000,
      },
    ])

    await ProductImage.createMany([
      {
        image: '/uploads/Aesthetic Anime Wallpapers - WallpaperSafari.jfif',
        product_id: 1
      },
      {
        image: '/uploads/download (1).jfif',
        product_id: 1
      },
      {
        image: '/uploads/download.jfif',
        product_id: 1
      },
      {
        image: '/uploads/fdcb5aef-0cb3-471e-a0c7-64b7a3c2bdf6.jfif',
        product_id: 1
      },
      {
        image: '/uploads/sky-city-scenery-horizon-landscape-anime-uhdpaper.com-8K-131.jpg',
        product_id: 1
      },
      {
        image: '/uploads/Sunset love.jfif',
        product_id: 1
      },
      {
        image: '/uploads/wallpaperflare.com_wallpaper.jpg',
        product_id: 1
      },
      {
        image: '/uploads/kaos_PKK_Althafi Hilal Anshar - Althafi Hilal Anshar.png',
        product_id: 2
      },
      {
        image: '/uploads/Picsart_23-03-03_21-17-08-347 - Rini rahmawati.png',
        product_id: 3
      },
      {
        image: '/uploads/T-Shirt Design - Cahya Triamelia.png',
        product_id: 4
      },
      {
        image: '/uploads/AC9F8083-473B-4ECD-9251-F25F82EA659B - Nabila Oktavia.png',
        product_id: 5
      },
      {
        image: '/uploads/Origin Japanese - Nurul Auliya Rahman.png',
        product_id: 6
      },
    ])
  }
}
