import React, { useEffect } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'

import { getAssets } from '../../api/services/assetsService'

const AssetsPage: React.FC = () => {
  const getAllAssets = async () => {
    const assets = await getAssets()
    console.log('All assets:', assets.data)
  }

  useEffect(() => {
    getAllAssets()
  }, [])

  return (
    <Container>
      <Header subtitle="Ativos" />
      Ativos
      <Footer />
    </Container>
  )
}

export default AssetsPage
