import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const MainPage: React.FC = () => (
  <Container>
    <Header />
    <Body />
    <Footer />
  </Container>
)

export default MainPage
