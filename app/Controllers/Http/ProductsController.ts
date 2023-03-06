import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await prisma.product.findMany({include: {images: true}})

    return view.render('product', {
      title: 'Product',
      products
    })
  }

  public async show({ view, params, request }: HttpContextContract) {
    const product = await prisma.product.findUnique({
      where:{
        id: params.id
      }, include: {images: true}})
    const href = `https://wa.me/62${product?.wa_number}/?text=Saya%20ingin%20membeli%20${product?.name}%0A${request.completeUrl()}`

    return view.render('item', {
      title: 'Product',
      product,
      href,
    })
  }
}
