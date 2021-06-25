import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const AssetsPage: React.FC = () => (
  <Container>
    <Header subtitle="Ativos" />
    <Body />
    <Footer />
  </Container>
)

export default AssetsPage
