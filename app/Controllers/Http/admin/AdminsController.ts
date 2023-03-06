import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

import ProductValidator from 'App/Validators/ProductValidator'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'

export default class AdminsController {
    public async index({ view }:HttpContextContract){
        const products = await Product.query().preload('images').orderBy('id', 'desc')

        return view.render('admin/admin', {
            title: 'Admin',
            products,
        })
    }

    public async create({view}: HttpContextContract) {
        return view.render('admin/admin-create', {
            title: 'Product'
        })
    }
    
    public async store({request, response, session}: HttpContextContract) {
        // Validation
        const images = request.files('images', {extnames: ['jpg', 'jpeg', 'png', 'jfif']})
        if(!images[0]){
            session.flash('images', 'Kolom Gambar Produk wajib diisi')
        }
        for (let image of images) {
            if(!image.isValid){
            session.flash('images', 'File harus berekstensi jpg, jpeg, png, atau jfif')
            }
        }
        await request.validate(ProductValidator)

        
        // Create product
        const product = await Product.create({
            name: request.input('name'),
            description: request.input('description'),
            wa_number: request.input('wa_number'),
            price: request.input('price'),
        })
        
        // Create Product Image
        for (let image of images) {      
            await image.move(Application.tmpPath('uploads'))
            await ProductImage.create({
                image: `/uploads/${image.fileName}`,
                product_id: product.id,
            })
        }

        // Redirect
        return response.redirect('/admin')
    }

    public async show({}: HttpContextContract) {}

    public async edit({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
