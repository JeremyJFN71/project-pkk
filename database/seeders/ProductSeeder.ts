import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    // Category
    await Category.createMany([
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
      {
        name: 'Dakimura',
        slug: 'dakimura'
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
        description: `Kaos tema AI Threads adalah kaos dengan desain yang terinspirasi oleh perkembangan teknologi kecerdasan buatan (AI) dan Sistem Infromasi Jaringan dan Aplikasi(SIJA). Kaos ini menggunakan gambar atau grafik yang menunjukkan berbagai penjelasan tentang Kelas XII SIJA 2 dan teknologi AI.
SIZE XL, L, M dan S`,
        category_id: 1,
        wa_number: '085717919259',
        price: 69999
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
      {
        name: 'Varsity Jacket Pria',
        description: `Spesifikasi :
Material Pakaian : cotton fleece gramasi 300 
Bahan lengan : oscar
Waterproof
Kualitas  lembut dan halus

Size yang tersedia : 
Size M
Size L
Size XL

NB : Barang yang sudah dibeli tidak dapat dikembalikan atau ditukar, kecuali kesalahan dari pihak kami`,
        category_id: 3,
        wa_number: '0895610484439',
        price: 450000
      },
      {
        name: 'Hoodie Simple',
        description: `Sweater yang terbuat dari bahan berkualitas. Tersedia berbagai banyak ukuran, mulai dari ukuran S, M, L, XL. Bahan yang digunakan adem tapi juga hangat. Hanya tersedia warna hitam namun bisa di Kustom gambar yang diinginkan.`,
        category_id: 3,
        wa_number: '085719735090',
        price: 80000
      },
      {
        name: 'Hoodie BlackSoft SIJA',
        description: `Hoodie BlackSoft SIJA
Deskripsi Produk
- Bahannya dari Fleece
- Tidak Panas
- Lebih Cepat Kering

Size:
Size S
Size M
Size L
Size XL`,
        category_id: 3,
        wa_number: '087889990002',
        price: 75000
      },
      {
        name: 'Weebs T-Shirt',
        description: `T-shirt simple yang menyajikan banyak WAIFU yang membuat keseharian anda menjadi lebih berwarna dan selalu ceria`,
        category_id: 1,
        wa_number: '082310738309',
        price: 120000
      },
      {
        name: 'Dakimakura Marin',
        description: `Bantal yang sangad nyaman, serta membantu membahagiakan diri anda yang kesepian karena JONES karena desain character Marin chan yang sangad KAWAIHH yang membuat siapa saja tidak tahan untuk meniduri bantal tersebut :).`,
        category_id: 4,
        wa_number: '082310738309',
        price: 320000
      },
      {
        name: 'Baju',
        description: `1. Bahan katun asli (cek testimoni dari pembeli sebelumnya dan review langsung dari kita, ya!)
Dijamin, bahan kaos gak akan buat kamu gerah karena mengandung katun asli         2. hasil akhirnya: lembut, nyaman dipakai, dan ringan
3. Varian warna: mejikuhibiniu, termasuk warna-warna soft (cek katalog kita yuk!)
Lengan pendek dan lengan panjang (request to us!)`,
        category_id: 1,
        wa_number: '081283338556',
        price: 95000
      },
    ])

    // Product Image
    await ProductImage.createMany([
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679740851/xii-sija-2-store/Anari.png.png',
        product_id: 1
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679740945/xii-sija-2-store/Cute%20Astronaut%20T-Shirt.png.png',
        product_id: 2
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679744872/xii-sija-2-store/Althap%20-%20front%20and%20back.png.png',
        product_id: 3
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679744875/xii-sija-2-store/Althap%20-%20Front.png.png',
        product_id: 3
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679744867/xii-sija-2-store/Althap%20-%20Back.png.png',
        product_id: 3
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745115/xii-sija-2-store/O%27Sweats.png.png',
        product_id: 4
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745268/xii-sija-2-store/Tote%20Bag%201.png.png',
        product_id: 5
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745271/xii-sija-2-store/Tote%20Bag%202.png.png',
        product_id: 5
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745501/xii-sija-2-store/Gamers%20Clothes%201.png.png',
        product_id: 6
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745504/xii-sija-2-store/Gamers%20Clothes%202.png.png',
        product_id: 6
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745581/xii-sija-2-store/Youpy.png.png',
        product_id: 7
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745705/xii-sija-2-store/Totebag%20Kanvas%20Custom%201.jpg.jpg',
        product_id: 8
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745707/xii-sija-2-store/Totebag%20Kanvas%20Custom%202.jpg.jpg',
        product_id: 8
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745710/xii-sija-2-store/Totebag%20Kanvas%20Custom%203.png.png',
        product_id: 8
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745713/xii-sija-2-store/Totebag%20Kanvas%20Custom%204.png.png',
        product_id: 8
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745859/xii-sija-2-store/Varsity%20Jacket%20Pria%201.png.png',
        product_id: 9
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679745861/xii-sija-2-store/Varsity%20Jacket%20Pria%202.png.png',
        product_id: 9
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746253/xii-sija-2-store/Hoodie%20Simple.jpg.jpg',
        product_id: 10
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746460/xii-sija-2-store/Hoodie%20BlackSoft%20SIJA%20-Depan.jpg.jpg',
        product_id: 11
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746455/xii-sija-2-store/Hoodie%20BlackSoft%20SIJA%20-%20Belakang.jpg.jpg',
        product_id: 11
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746457/xii-sija-2-store/Hoodie%20BlackSoft%20SIJA%20-%20Samping%20Kanan.jpg.jpg',
        product_id: 11
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746458/xii-sija-2-store/Hoodie%20BlackSoft%20SIJA%20-%20Samping%20Kiri.jpg.jpg',
        product_id: 11
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746791/xii-sija-2-store/Weebs%20T-Shirt%20-%20DESAIN%20BAJU%20GWEHHH.png.png',
        product_id: 12
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746794/xii-sija-2-store/Weebs%20T-Shirt%20-%20HAREM%21%21.png.png',
        product_id: 12
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679746788/xii-sija-2-store/Weebs%20T-Shirt%20-%20Beauty%20Of.png.png',
        product_id: 12
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679747095/xii-sija-2-store/Dakimakura%20Marin%20-%20Dakimakura%20MARIN.png.png',
        product_id: 13
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679747191/xii-sija-2-store/Baju%201.jpg.jpg',
        product_id: 14
      },
      {
        image: 'https://res.cloudinary.com/dhdylo0de/image/upload/v1679747193/xii-sija-2-store/Baju%202.jpg.jpg',
        product_id: 14
      },
    ])
  }
}
