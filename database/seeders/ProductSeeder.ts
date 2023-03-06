import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await prisma.product.create({
      data: {
        name: 'Anari Girls',
        description: `- ANARI merupakan nama brand produk kami. ANARI sendiri merupakan singkatan dari nama kami, yaitu Asia, Nasywa, dan Rini
- Ukuran: 35cm x 39 cm
- Bahan: Kanvas
- Warna: Broken White
- Cocok dibawa ke sekolah dan kantor karena ukurannya yang tidak terlalu besar dan terlalu kecil
`,
        wa_number: '085715530645',
        price: '12000',
        images: {
          createMany: {
            data: [
              {
                image: '/uploads/Picsart_23-03-03_21-17-08-347 - Rini_rahmawati.png'
              }
            ]
          }
        }
      }
    })

    await prisma.product.create({
      data: {
        name: 'Cute Astronaut T-Shirt',
        description: `T-Shirt Original by camil's collection, berbahan Cotton Combed 30s High Quality. Tersedia berbagai pilihan warna, ukuran (S, M, L, XL).`,
        wa_number: '081291125062',
        price: '30000',
        images: {
          createMany: {
            data: [
              {
                image: '/uploads/T-Shirt Design - Cahya Triamelia.png'
              }
            ]
          }
        }
      }
    })

    await prisma.product.create({
      data: {
        name: 'SIJA AIThreads Black T-Shirt',
        description: `Kaos tema AI Threads adalah kaos dengan desain yang terinspirasi oleh perkembangan teknologi kecerdasan buatan (AI) dan Sistem Infromasi Jaringan dan Aplikasi(SIJA). Kaos ini menggunakan gambar atau grafik yang menunjukkan berbagai penjelasan tentang Kelas XII SIJA 2 dan teknologi AI.`,
        wa_number: '085717919259',
        price: '89999',
        images: {
          createMany: {
            data: [
              {
                image: '/uploads/front and back.png'
              },
              {
                image: '/uploads/Front.png'
              },
              {
                image: '/uploads/Back.png'
              },
            ]
          }
        }
      }
    })

    await prisma.product.create({
      data: {
        name: "O'Sweats",
        description: `Sweater yang terbuat dari bahan babyterry berkualitas. Tersedia berbagai banyak ukuran, mulai dari ukuran S, M, L, XL. Bahan yang digunakan adem. Tersedia berbagai varian warna, seperti abu-abu, merah, dan hitam. Dapat request inisial nama, dan gambarnya juga bisa kustom lho.`,
        wa_number: '088212701317',
        price: '50000',
        images: {
          createMany: {
            data: [
              {
                image: '/uploads/Origin Japanese - Nurul Auliya Rahman.png'
              },
            ]
          }
        }
      }
    })

    await prisma.product.create({
      data: {
        name: 'Tote bag',
        description: `Tas jinjing (totebag) bernama Lafeyo, yang diambil dari ketiga nama anggota kelompok, memiliki bahan serat kanvas, dengan desain yang simple dan kekinian. </3`,
        wa_number: '081291125070',
        price: '49900',
        images: {
          createMany: {
            data: [
              {
                image: '/uploads/Screenshot_2023-03-06-09-23-40-88_99c04817c0de5652397fc8b56c3b3817-removebg-preview - Feyza Ramadhana.png'
              },
              {
                image: '/uploads/Screenshot_2023-03-07-00-27-19-22_dba69a5e82e939c3ddef13f99a115ca3-removebg-preview - Feyza Ramadhana.png'
              }
            ]
          }
        }
      }
    })
  }
}