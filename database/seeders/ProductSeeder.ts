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
      {
        name: 'Gamers Clothes',
        description: `memiliki berbagai macam ukuran, mulai dari ukuran anak-anak hingga dewasa, sehingga cocok untuk dipakai oleh siapa saja yang merupakan penggemar game. Bahan kaos yang digunakan biasanya adalah katun atau polyester yang nyaman dipakai dan tidak mudah kusut.

DETAIL:
- Regular Fit
- Material 100% cotton combed 30s
- unisex [ bisa untuk pria / wanita ]
- Dibuat dengan kualitas jahitan dan sablon terbaik
- Sablon Waterbase Plastisol [ bisa di setrika ]`,
        category_id: 3,
        wa_number: '087786805771',
        price: 250000
      },
      {
        name: 'Youpy',
        description: `- YOUPY adalah merupakan nama brand produk kami, YOUPY sendiri merupakan nama mengarang dari sebuah permen tetapi huruf dibedakan.
- Ukuran : 35cm x 39cm
- Bahan : kanvas
- Warna : Broken White
- Cocok dibawa`,
        category_id: 2,
        wa_number: '085691377175',
        price: 15000
      },
      {
        name: 'Totebag Kanvas Custom',
        description: `SEBELUM BERBELANJA PASTIKAN MEMBACA DESKRIPSI PRODUK. 
Kami Menyediakan Totebag berbahan Kanvas dengan kualitas sablon yang bagus dan tidak mudah luntur. Dengan penawaran beberapa pilihan ukuran untuk anda :
1. 40 x 30
2. 30 x 20
Kami juga menyediakan jasa Custom Produk dengan desain foto atau gambar sesuai dengan permintaan Customer. 
NOTE : 
— Untuk Desain custom harap mengirim foto dalam format PNG dengan resolusi minimal 1920 x 2880 melalui Chat Admin. 
— Harap rekam video unboxing apabila terjadi kerusakan pada produk, bisa dilakukan retur melalui chat admin`,
        category_id: 2,
        wa_number: '0895330883277',
        price: 20000
      },
    ])

    // Product Image
    await ProductImage.createMany([
      {
        image: '/uploads/cleydijsj0001k07ydjr37mhr.png',
        product_id: 1
      },
      {
        image: '/uploads/cleydnr6a00015o7ygxtm0gem.png',
        product_id: 2
      },
      {
        image: '/uploads/cleye9z69000w5o7yhwdw6cyi.png',
        product_id: 3
      },
      {
        image: '/uploads/cleye9z5c000v5o7yg6vcd2pd.png',
        product_id: 3
      },
      {
        image: '/uploads/cleye9z7b000x5o7y6rc6e6pl.png',
        product_id: 3
      },
      {
        image: '/uploads/cleyds65h00095o7y0mjw8v6u.png',
        product_id: 4
      },
      {
        image: '/uploads/cleye3bka000c5o7yd6jcdn6x.png',
        product_id: 5
      },
      {
        image: '/uploads/cleye3bkp000d5o7yfocsgl3n.png',
        product_id: 5
      },
      {
        image: '/uploads/cleye4tav000g5o7yc7ac20rm.png',
        product_id: 6
      },
      {
        image: '/uploads/cleye4tb9000h5o7y5uk34gwh.png',
        product_id: 6
      },
      {
        image: '/uploads/cleye6984000j5o7y49sr1d0x.png',
        product_id: 7
      },
      {
        image: '/uploads/cleye7ojs000o5o7yhe5tb8pc.jpg',
        product_id: 8
      },
      {
        image: '/uploads/cleye7ok6000p5o7ycvzw4tos.jpg',
        product_id: 8
      },
      {
        image: '/uploads/cleye7okk000q5o7yespxhbgw.png',
        product_id: 8
      },
      {
        image: '/uploads/cleye7okw000r5o7ye06s2f2j.png',
        product_id: 8
      },
    ])
  }
}
