import React from 'react'

// Ant Design imports
import { Card } from 'antd'

// Highcharts imports
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Container } from './styles'

const { Meta } = Card

const Body = ({
  allAssets,
  allCompanies,
  assetStatus,
  assetLastUptimeYear,
  assetLastUptimeMonth,
  assetLastUptimeDay,
  assetLastUptimeHour,
  assetLastUptimeMinute,
  assetsLastUptimeSeconds,
  assetCollectsUptime,
  assetTotalUptime,
  options,
}) => (
  <Container>
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

            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />

          </div>
        </Card>
      )
    })}
  </Container>
)

export default Body
