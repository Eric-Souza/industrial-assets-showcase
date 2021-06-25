import React, { useEffect } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'

import { getUnits } from '../../api/services/unitsService'

const UnitsPage: React.FC = () => {
  const getAllUnits = async () => {
    const units = await getUnits()
    console.log('All units:', units.data)
  }

  useEffect(() => {
    getAllUnits()
  }, [])

  return (
    <Container>
      <Header subtitle="Unidades" />
      Unidades
      <Footer />
    </Container>
  )
}

export default UnitsPage
