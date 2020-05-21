interface IMailTo {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[]
}

interface IMessageDTO { //data transfer object DDD - comos os dados trafegam
    to: IMailTo,
    message: IMailMessage
}

interface IMailService { //implementa interfaces
    sendMail(request: IMessageDTO): void
}

class EmailService implements IMailService {
    sendMail({ to, message }: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService