import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const CompaniesPage: React.FC = () => (
  <Container>
    <Header subtitle="Empresas" />
    <Body />
    <Footer />
  </Container>
)

export default CompaniesPage
