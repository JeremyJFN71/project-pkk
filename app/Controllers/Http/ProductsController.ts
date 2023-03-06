import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.query().preload('images').orderBy('id', 'desc')

    return view.render('product', {
      title: 'Product',
      products
    })
  }

  public async show({ view, params, request }: HttpContextContract) {
    const product = await Product.find(params.id)
    await product?.load('images')
    const href = `https://wa.me/62${product?.wa_number}/?text=Saya%20ingin%20membeli%20${product?.name}%0A${request.completeUrl()}`

    return view.render('item', {
      title: 'Product',
      product,
      href,
    })
  }
}
