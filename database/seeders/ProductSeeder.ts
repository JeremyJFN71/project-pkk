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
    ])

    // Product Image
    await ProductImage.createMany([
      {
        image: '/uploads/cley8lwqi000fhc7y62z01p2p.png',
        product_id: 1
      },
    ])
  }
}
