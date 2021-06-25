import React, { useEffect } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'

import { getUsers } from '../../api/services/userService'

const UsersPage: React.FC = () => {
  const getAllUsers = async () => {
    const users = await getUsers()
    console.log('All users:', users.data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <Container>
      <Header subtitle="Usuários" />
      Usuários
      <Footer />
    </Container>
  )
}

export default UsersPage
