import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Product.createMany([
      {
        name: 'Laptop HP Elitebook 840 G6',
        description: `Processor: Intel Core i5 8th Gen
RAM: 16 GB
ROM: 512 GB SSD`,
        wa_number: '088289570068',
        price: 10000000,
      }
    ])

    await ProductImage.createMany([
      {
        image: '/uploads/laptop.jpg',
        product_id: 1
      }
    ])
  }
}
