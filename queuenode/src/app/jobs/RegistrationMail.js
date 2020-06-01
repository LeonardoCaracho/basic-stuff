import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: 'Queue test <leo@leo.com>',
            to: `${user.name}<${user.email}>`,
            subject: 'Cadastro de usuario',
            html: `Olá, ${user.name} bie venue!`
        })
    }
}