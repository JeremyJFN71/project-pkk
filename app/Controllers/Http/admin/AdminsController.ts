import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminsController {
    public async index({ view }:HttpContextContract){
        return view.render('admin/admin', {
            title: 'Admin'
        })
    }
}
