import React, { useEffect, useState } from 'react'

import { Spin } from 'antd'

import { Container } from './styles'

import Header from '../../Header'
import Body from '../../Body'
import Footer from '../../Footer'

import { getAssets, getCompanies } from '../../../api/services'

// Data formatting
const assetStatus = ''

// Time formatting
const assetLastUptimeYear = ''
const assetLastUptimeMonth = ''
const assetLastUptimeDay = ''
const assetLastUptimeHour = ''
const assetLastUptimeMinute = ''
const assetsLastUptimeSeconds = ''

const assetCollectsUptime = ''
const assetTotalUptime = ''

// Highcharts config
const options = {
  title: {
    text: 'My chart',
  },

  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5],
  }],
}

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

            <Body
              allAssets={allAssets}
              allCompanies={allCompanies}
              isLoading={isLoading}
              assetStatus={assetStatus}
              assetLastUptimeYear={assetLastUptimeYear}
              assetLastUptimeMonth={assetLastUptimeMonth}
              assetLastUptimeDay={assetLastUptimeDay}
              assetLastUptimeHour={assetLastUptimeHour}
              assetLastUptimeMinute={assetLastUptimeMinute}
              assetsLastUptimeSeconds={assetsLastUptimeSeconds}
              assetCollectsUptime={assetCollectsUptime}
              assetTotalUptime={assetTotalUptime}
              options={options}
            />

            <Footer />
          </Container>
        )}
    </>
  )
}

export default MainPage
