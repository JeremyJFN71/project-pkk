import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
    public async index({ view }:HttpContextContract){
        return view.render('admin.login', {
            title: 'Login'
        })
    }

    public async authenticate({ auth, request, response, session }:HttpContextContract){
        request.validate(LoginValidator)

        const email = request.input('email')
        const password = request.input('password')

        if(await auth.attempt(email, password)){
            return response.redirect('/')
        }
        session.flash('errors', {login: 'Login Gagal'})
        return response.redirect('')
    }
}
