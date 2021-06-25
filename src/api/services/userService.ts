import tractianApi from '../api'

export async function getUsers() {
  const users = await tractianApi.get('/users')

  return users
}

export async function getUserById(id: number) {
  const user = await tractianApi.get(`/users/${id}`)

  return user
}
