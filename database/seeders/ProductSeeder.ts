import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    // Category
    Category.createMany([
      {
        name: 'Baju',
        slug: 'baju'
      },
      {
        name: 'Tas',
        slug: 'tas'
      },
      {
        name: 'Jaket',
        slug: 'jaket'
      },
    ])

    // Product
    await Product.createMany([
      {
        name: 'Anari Girls',
        description: `- ANARI merupakan nama brand produk kami. ANARI sendiri merupakan singkatan dari nama kami, yaitu Asia, Nasywa, dan Rini
- Ukuran: 35cm x 39 cm
- Bahan: Kanvas
- Warna: Broken White
- Cocok dibawa ke sekolah dan kantor karena ukurannya yang tidak terlalu besar dan terlalu kecil`,
        category_id: 2,
        wa_number: '085715530645',
        price: 12000
      },
      {
        name: 'Cute Astronaut T-Shirt',
        description: `T-Shirt Original by camil's collection, berbahan Cotton Combed 30s High Quality. Tersedia berbagai pilihan warna, ukuran (S, M, L, XL).`,
        category_id: 1,
        wa_number: '081291125062',
        price: 30000
      },
      {
        name: 'SIJA AIThreads Black T-Shirt',
        description: `Kaos tema AI Threads adalah kaos dengan desain yang terinspirasi oleh perkembangan teknologi kecerdasan buatan (AI) dan Sistem Infromasi Jaringan dan Aplikasi(SIJA). Kaos ini menggunakan gambar atau grafik yang menunjukkan berbagai penjelasan tentang Kelas XII SIJA 2 dan teknologi AI.`,
        category_id: 1,
        wa_number: '085717919259',
        price: 89999
      },
      {
        name: "O'Sweats",
        description: `Sweater yang terbuat dari bahan babyterry berkualitas. Tersedia berbagai banyak ukuran, mulai dari ukuran S, M, L, XL. Bahan yang digunakan adem. Tersedia berbagai varian warna, seperti abu-abu, merah, dan hitam. Dapat request inisial nama, dan gambarnya juga bisa kustom lho.`,
        category_id: 3,
        wa_number: '088212701317',
        price: 50000
      },
      {
        name: 'Tote bag',
        description: `Tas jinjing (totebag) bernama Lafeyo, yang diambil dari ketiga nama anggota kelompok, memiliki bahan serat kanvas, dengan desain yang simple dan kekinian. </3`,
        category_id: 2,
        wa_number: '081291125070',
        price: 49900
      },
    ])

    // Product Image
    await ProductImage.createMany([
      {
        image: '/uploads/Picsart_23-03-03_21-17-08-347 - Rini_rahmawati.png',
        product_id: 1
      },
      {
        image: '/uploads/T-Shirt Design - Cahya Triamelia.png',
        product_id: 2
      },
      {
        image: '/uploads/front and back.png',
        product_id: 3
      },
      {
        image: '/uploads/Front.png',
        product_id: 3
      },
      {
        image: '/uploads/Back.png',
        product_id: 3
      },
      {
        image: '/uploads/Origin Japanese - Nurul Auliya Rahman.png',
        product_id: 4
      },
      {
        image: '/uploads/Screenshot_2023-03-06-09-23-40-88_99c04817c0de5652397fc8b56c3b3817-removebg-preview - Feyza Ramadhana.png',
        product_id: 5
      },
      {
        image: '/uploads/Screenshot_2023-03-07-00-27-19-22_dba69a5e82e939c3ddef13f99a115ca3-removebg-preview - Feyza Ramadhana.png',
        product_id: 5
      },
    ])
  }
}
