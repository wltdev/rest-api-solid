export interface IUpdateUserRequestDTO {
  name: string
  email: string
  password?: string
  groups?: Array<{ id: string }>
}
