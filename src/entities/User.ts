export class User {
  public readonly id?: string

  public name: string
  public email: string
  public password?: string
  public groups?: Array<any>

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
