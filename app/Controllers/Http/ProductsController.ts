import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import I18n from '@ioc:Adonis/Addons/I18n'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.query().preload('images').orderBy('id', 'desc')

    return view.render('product', {
      title: 'Product',
      products,
      I18n,
    })
  }

  public async show({ view, params }: HttpContextContract) {
    const product = await Product.find(params.id)
    await product?.load('images')

    return view.render('item', {
      title: 'Product',
      product,
      I18n,
    })
  }
}
