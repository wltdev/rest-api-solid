import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { IMailProvider, IMessage } from '../IMailProvider'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '5e5c2e335fc40c',
        pass: '6ec4728423af43'
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
