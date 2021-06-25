import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const UsersPage: React.FC = () => (
  <Container>
    <Header subtitle="Usuários" />
    <Body />
    <Footer />
  </Container>
)

export default UsersPage
