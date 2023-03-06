import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class AdminsController {
    public async index({ view }:HttpContextContract){
        const products = await Product.query().preload('images')
        return view.render('admin/admin', {
            title: 'Admin',
            products
        })
    }
}
