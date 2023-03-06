import View from '@ioc:Adonis/Core/View'

View.global('nl2br', function (text: any) {
    return text.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
})