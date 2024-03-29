import bcrypt from 'bcrypt'

import { User } from '@/entities/User'
import { IMailProvider } from '@/providers/IMailProvider'
import { IUsersRepository } from '@/repositories/IUsersRespository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    data.password = bcrypt.hashSync(data.password, 10)
    const user = new User(data)

    const doc = await this.usersRepository.save(user)

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: data.name,
    //     email: data.email
    //   },
    //   from: {
    //     name: 'Testing My API',
    //     email: 'testing@app.com'
    //   },
    //   subject: 'Welcome to the jungle',
    //   body: '<p>Account created successful</p>'
    // })

    return doc
  }
}
