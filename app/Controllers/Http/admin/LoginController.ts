import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
    public async index({ view }:HttpContextContract){
        return view.render('admin/login', {
            title: 'Login'
        })
    }

    public async authenticate({ auth, request, response, session }:HttpContextContract){
        await request.validate(LoginValidator)

        const email = request.input('email')
        const password = request.input('password')
        
        try {
            await auth.attempt(email, password)
            response.redirect('/admin')
        } catch {
            session.flash('errors', {login: 'Login Gagal'})
            return response.redirect('/admin/login')
        }
    }

    public async logout({auth, response}:HttpContextContract){
        await auth.logout()
        response.redirect('/admin/login')
    }
}
