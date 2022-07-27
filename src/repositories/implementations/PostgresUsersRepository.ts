import { PrismaClient } from '@prisma/client'
import { User } from '@/entities/User'
import { IUsersRepository } from '../IUsersRespository'

export class PostgresUsersRepository implements IUsersRepository {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  private users: User[] = [
    { id: 'test-fake', name: 'User Test', email: 'test@email.com', password: '123123' }
  ]

  async findByEmail(email: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        email
      }
    })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        id
      }
    })

    return user
  }

  async save(payload: User): Promise<User> {
    const doc = await this.prismaClient.user.create({
      data: {
        ...payload
      }
    })

    return doc
  }
}
