import React, { useEffect, useState } from 'react'

// Ant Design imports
import { Card, Spin } from 'antd'

import { Container } from './styles'

import Header from '../../Header'
import Body from '../../Body'
import Footer from '../../Footer'

import { getAssets, getCompanies } from '../../../api/services'

const { Meta } = Card

// Data formatting
let assetStatus = ''

// Time formatting
let assetLastUptimeYear = ''
let assetLastUptimeMonth = ''
let assetLastUptimeDay = ''
let assetLastUptimeHour = ''
let assetLastUptimeMinute = ''
let assetsLastUptimeSeconds = ''

const assetCollectsUptime = ''
const assetTotalUptime = ''

const MainPage = () => {
  const [allAssets, setAllAssets] = useState([])
  const [allCompanies, setAllCompanies] = useState([])

  const [isLoading, setLoading] = useState(true)

  const getData = async () => {
    // Assets
    const assets = await getAssets()
    setAllAssets(assets.data)
    console.log('All assets:', assets.data)

    // Companies
    const companies = await getCompanies()
    setAllCompanies(companies.data)
    console.log('All companies:', companies.data)

    return setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {isLoading ? (
        <Container>
          <div className="loading">
            <h2>Carregando...</h2>
            <Spin />
          </div>
        </Container>
      )

        : (
          <Container>
            <Header subtitle="Ativos" />

            <Body>
              {allAssets.map((asset) => {
                if (asset.status === 'inOperation') assetStatus = 'em operação'
                if (asset.status === 'inAlert') assetStatus = 'em alerta'
                if (asset.status === 'inDowntime') assetStatus = 'inativa'

                const formattedDate = asset.metrics.lastUptimeAt.split('T').splice(0, 1).toString()
                const formattedTime = asset.metrics.lastUptimeAt.split('T').splice(1, 1).toString().split('.').splice(0, 1).toString()

                assetLastUptimeYear = formattedDate.split('-').splice(0, 1)
                assetLastUptimeMonth = formattedDate.split('-').splice(1, 1)
                assetLastUptimeDay = formattedDate.split('-').splice(2, 1)
                assetLastUptimeHour = formattedTime.split(':').splice(0, 1)
                assetLastUptimeMinute = formattedTime.split(':').splice(1, 1)
                assetsLastUptimeSeconds = formattedTime.split(':').splice(2, 1)

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

                      Identificador: {' '} {asset.id}

                      <br />

                      Responsável: {' '}
                      {allCompanies.map((company) => {
                        if (asset.companyId === company.id) return <span className="companyName">{company.name}</span>

                        return <span>empresa desconhecida</span>
                      })}

                      <br />

                      Status: {' '}
                      {assetStatus}

                      <br />

                      Sensor: {' '}
                      {asset.sensors.map((sensor) => <span>{sensor}</span>)}

                      <br />

                      {asset.specifications.maxTemp ? (
                        <div>
                          Temperatura máxima: {' '}
                          {asset.specifications.maxTemp}
                          <br />
                        </div>
                      )
                        : ''}

                      {asset.specifications.rpm ? (
                        <div>
                          Rotações por minuto: {' '}
                          {asset.specifications.rpm}

                          <br />
                        </div>
                      )
                        : ''}

                      {asset.specifications.rpm ? (
                        <div>
                          Potência: {' '}
                          {asset.specifications.power}
                        </div>
                      )
                        : ''}

                      Ativo por último às: {' '}
                      {assetLastUptimeHour}h, {' '} {' '}
                      {assetLastUptimeMinute}m e {' '} {' '}
                      {assetsLastUptimeSeconds}s {' '} {' '} {' '}
                      de {' '}
                      {assetLastUptimeDay}/{assetLastUptimeMonth}/{assetLastUptimeYear}

                      <br />

                      Coletado por último há: {' '}
                      {assetCollectsUptime}

                      <br />

                      Tempo total ativo: {' '}
                      {assetTotalUptime}

                      <br />

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

export default MainPage
