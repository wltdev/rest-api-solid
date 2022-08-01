import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { UpdateUserUseCase } from './UpdateUserUseCase'
import { User } from '@/entities/User'

describe('Creating user', () => {
  let upateUserUseCase: UpdateUserUseCase

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    upateUserUseCase = new UpdateUserUseCase(
      postgresUsersRepository
    )
  })

  it('should be able to create a new  user', async () => {
    const userData = new User({
      name: 'Testing',
      email: 'testing@email.com',
      password: '123456'
    })

    const id = 'asdasdasd'

    const user = await upateUserUseCase.execute(id, userData)

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create an existing user', async () => {
    const userData = new User({
      name: 'Testing',
      email: 'testing@email.com',
      password: '123456'
    })
    const id = 'asdasdasd'

    await expect(upateUserUseCase.execute(id, userData)).rejects.toEqual(
      new Error('User already exists')
    )
  })
})
