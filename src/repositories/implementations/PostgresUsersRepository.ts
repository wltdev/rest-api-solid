import { User } from '@/entities/User'
import { IUsersRepository } from '../IUsersRespository'

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [
    { id: 'test-fake', name: 'User Test', email: 'test@email.com', password: '123123' }
  ]

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email)

    return user
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)

    return user
  }

  async save(user: User): Promise<User> {
    this.users.push(user)
    const doc = this.users.find((item) => item.email === user.email)
    return doc
  }
}
