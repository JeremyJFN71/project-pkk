import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ view, i18n }: HttpContextContract) {
    const products = await Product.query().preload('images').orderBy('id', 'desc')

    return view.render('product', {
      title: 'Product',
      products,
      i18n,
    })
  }

  public async show({ view, params, i18n }: HttpContextContract) {
    const product = await Product.find(params.id)
    await product?.load('images')

    return view.render('item', {
      title: 'Product',
      product,
      i18n,
    })
  }
}
