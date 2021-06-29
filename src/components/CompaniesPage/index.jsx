import React, { useEffect } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'

import { getCompanies } from '../../api/services/companiesService'

const CompaniesPage = () => {
  const getAllCompanies = async () => {
    const companies = await getCompanies()
    console.log('All companies:', companies.data)
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  return (
    <Container>
      <Header subtitle="Empresas" />
      Empresas
      <Footer />
    </Container>
  )
}

export default CompaniesPage
