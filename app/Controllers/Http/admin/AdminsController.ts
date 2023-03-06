import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

import ProductValidator from 'App/Validators/ProductValidator'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class AdminsController {
    public async index({ view }:HttpContextContract){
        const products = await prisma.product.findMany({include: {images: true}})

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

        // Product Image
        let yea: any = []
        for (let image of images) {
            await image.move(Application.tmpPath('uploads'))
            yea.push({
                image: `/uploads/${image.fileName}`
            })
        }
        
        // Create product
        const product = await prisma.product.create({
            data: {
                name: request.input('name'),
                description: request.input('description'),
                wa_number: request.input('wa_number'),
                price: request.input('price'),
                images: {
                    createMany: {
                        data: yea
                    }
                }
            }
        })

        console.log(product)

        // Redirect
        return response.redirect('/admin')
    }

    public async show({}: HttpContextContract) {}

    public async edit({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
