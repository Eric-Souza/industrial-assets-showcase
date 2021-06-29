/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react'

// Ant Design imports
import { Card } from 'antd'

import { Container } from './styles'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import { getAssets } from '../../api/services/assetsService'

const { Meta } = Card

const AssetsPage = () => {
  const [allAssets, setAllAssets] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getAllAssets = async () => {
    const assets = await getAssets()
    setAllAssets(assets.data)
    console.log('All assets:', assets)

    return setLoading(false)
  }

  useEffect(() => {
    getAllAssets()
  }, [])

  return (
    <>
      {isLoading ? <h3>Carregando...</h3>
        : (
          <Container>
            <Header subtitle="Ativos" />

            <Body>
              {allAssets.map((asset) => (
                <Card
                  className="card"
                  hoverable
                  cover={<img alt="example" src={asset.image} />}
                >
                  <Meta title={asset.name} description={asset.model === 'fan' ? 'Ventilador' : 'Motor'} />
                </Card>
              ))}
            </Body>

            <Footer />
          </Container>
        )}
    </>
  )
}

export default AssetsPage
