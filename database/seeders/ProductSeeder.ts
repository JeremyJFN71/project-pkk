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
    ])
  }
}
