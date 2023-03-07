import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

import ProductValidator from 'App/Validators/ProductValidator'
import Product from 'App/Models/Product'
import ProductImage from 'App/Models/ProductImage'
import Category from 'App/Models/Category'

export default class AdminsController {
    public async index({ view }:HttpContextContract){
        const products = await Product.query().preload('images').orderBy('id', 'desc')

        return view.render('admin/admin', {
            title: 'Admin',
            products,
        })
    }

    public async create({view}: HttpContextContract) {
        const categories = await Category.query().orderBy('name', 'asc')

        return view.render('admin/admin-create', {
            title: 'Admin',
            categories
        })
    }
    
    public async store({request, response, session}: HttpContextContract) {
        // Validation
        const images = request.files('images', {
            extnames: ['jpg', 'jpeg', 'png', 'jfif']
        })
        if(!images[0]){
            session.flash('images', 'Kolom Gambar Produk wajib diisi')
        }
        for (let image of images) {
            if(!image.isValid){
            session.flash('images', 'File harus berekstensi jpg, jpeg, png, atau jfif')
            }
        }
        await request.validate(ProductValidator)

        if(!images[0]){
            return response.redirect('/admin/create')
        }
        // End of validation

        
        // Create product
        const product = await Product.create({
            name: request.input('name'),
            description: request.input('description'),
            category_id: request.input('category_id'),
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

    public async edit({ view, params }: HttpContextContract) {
        const product = await Product.find(params.id)
        const categories = await Category.query().orderBy('name', 'asc')

        return view.render('admin/admin-edit', {
            title: 'Admin',
            product,
            categories
        })
    }

    public async update({ request, session, response, params }: HttpContextContract) {
        // Validation
        const images = request.files('images', {
            extnames: ['jpg', 'jpeg', 'png', 'jfif']
        })
        if(!images[0]){
            session.flash('images', 'Kolom Gambar Produk wajib diisi')
        }
        for (let image of images) {
            if(!image.isValid){
            session.flash('images', 'File harus berekstensi jpg, jpeg, png, atau jfif')
            }
        }
        await request.validate(ProductValidator)

        if(!images[0]){
            return response.redirect(`/admin/${params.id}/edit`)
        }
        // End of validation
    }

    public async destroy({params, response}: HttpContextContract) {
        const product = await Product.find(params.id)
        product?.delete()

        return response.redirect('/admin')
    }
}
