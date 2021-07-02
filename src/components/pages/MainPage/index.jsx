import React, { useEffect, useState } from 'react'

import { Spin } from 'antd'

import { Container } from './styles'

import Header from '../../Header'
import Body from '../../Body'
import Footer from '../../Footer'

import {
  getAssets, getCompanies, getUnits, getUsers,
} from '../../../api/services'

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

const MainPage = () => {
  const [allAssets, setAllAssets] = useState([])
  const [allCompanies, setAllCompanies] = useState([])
  const [allUnits, setAllUnits] = useState([])
  const [allUsers, setAllUsers] = useState([])

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

    // Units
    const units = await getUnits()
    setAllUnits(units.data)
    console.log('All units:', units.data)

    // Users
    const users = await getUsers()
    setAllUsers(users.data)
    console.log('All users:', users.data)

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
            <Header
              subtitle="Ativos"
              allAssets={allAssets}
              allCompanies={allCompanies}
              allUnits={allUnits}
              allUsers={allUsers}
            />

            <Body
              allAssets={allAssets}
              allCompanies={allCompanies}
              allUnits={allUnits}
              allUsers={allUsers}
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
            />

            <Footer />
          </Container>
        )}
    </>
  )
}

export default MainPage
