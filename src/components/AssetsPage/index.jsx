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

let assetStatus = ''
let assetCompany = ''

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
              {allAssets.map((asset) => {
                if (asset.companyId === 1) assetCompany = 'empresa teste'

                if (asset.status === 'inOperation') assetStatus = 'em operação'
                if (asset.status === 'inAlert') assetStatus = 'em alerta'
                if (asset.status === 'inDowntime') assetStatus = 'inativa'

                return (
                  <Card
                    key={asset.id}
                    className="card"
                    hoverable
                    cover={<img alt="example" src={asset.image} />}
                  >
                    <Meta title={asset.name} description={asset.model === 'fan' ? 'Ventilador' : 'Motor'} />

                    <div>
                      <br />

                      Identificador:
                      {' '}
                      {asset.id}

                      <br />

                      Responsável:
                      {' '}
                      {assetCompany}

                      <br />

                      Status:
                      {' '}
                      {assetStatus}

                      <br />

                      Sensor:
                      {' '}
                      {asset.sensors.map((sensor) => <span>{sensor}</span>)}

                      <br />

                      {asset.specifications.maxTemp ? (
                        <div>
                          Temperatura máxima:
                          {' '}
                          {asset.specifications.maxTemp}
                          <br />
                        </div>
                      )
                        : ''}

                      {asset.specifications.rpm ? (
                        <div>
                          Rotações por minuto:
                          {' '}
                          {asset.specifications.rpm}

                          <br />
                        </div>
                      )
                        : ''}

                      {asset.specifications.rpm ? (
                        <div>
                          Potência:
                          {' '}
                          {asset.specifications.power}
                        </div>
                      )
                        : ''}

                    </div>
                  </Card>
                )
              })}
            </Body>

            <Footer />
          </Container>
        )}
    </>
  )
}

export default AssetsPage
