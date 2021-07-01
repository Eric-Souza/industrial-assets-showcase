import React from 'react'

// Ant Design imports
import { Card } from 'antd'

// Highcharts imports
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Container, CardData } from './styles'

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
}) => (
  <Container>
    {allAssets.map((asset) => {
      if (asset.status === 'inOperation') assetStatus = 'em operação'
      if (asset.status === 'inAlert') assetStatus = 'em alerta'
      if (asset.status === 'inDowntime') assetStatus = 'inativo'

      // Date and time formatting
      const formattedDate = asset.metrics.lastUptimeAt.split('T').splice(0, 1).toString()
      const formattedTime = asset.metrics.lastUptimeAt.split('T').splice(1, 1).toString().split('.').splice(0, 1).toString()

      assetLastUptimeYear = formattedDate.split('-').splice(0, 1)
      assetLastUptimeMonth = formattedDate.split('-').splice(1, 1)
      assetLastUptimeDay = formattedDate.split('-').splice(2, 1)
      assetLastUptimeHour = formattedTime.split(':').splice(0, 1)
      assetLastUptimeMinute = formattedTime.split(':').splice(1, 1)
      assetsLastUptimeSeconds = formattedTime.split(':').splice(2, 1)

      let assetColor = ''

      if (asset.healthscore < 60) assetColor = '#ff2c2c'
      if (asset.healthscore >= 60 && asset.healthscore < 75) assetColor = '#ffd900'
      if (asset.healthscore >= 75) assetColor = '#2a8d3a'

      // Highcharts config
      const chartOptions = {
        title: {
          text: `${asset.name} Healthscore`,
        },

        series: [{
          name: 'Clique para sumir',
          type: 'column',
          data: [asset.healthscore],
        }],

        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: 'healthscore (%)',
          },
        },

        xAxis: {
          categories: [`${asset.name}`],
          title: { text: `${asset.healthscore}%` },
        },

        colors: [`${assetColor}`],
      }

      return (
        <Card
          key={asset.id}
          className="card"
          hoverable
          cover={<img alt="example" src={asset.image} />}
        >
          <Meta title={asset.name} description={asset.model === 'fan' ? 'Ventilador' : 'Motor'} />

          <CardData>
            <div className="assetOwners">
              Identificador: {' '} {asset.id}
              <br />

              Status: {' '}
              {assetStatus}
              <br />

              Empresa responsável: {' '}
              {allCompanies.map((company) => {
                if (asset.companyId === company.id) return <span className="lowercaseName">{company.name}</span>

                return <span>empresa desconhecida</span>
              })}
              <br />

              Unidade responsável: {' '}
              <span className="lowercaseName">{asset.unitId === 1 ? 'unidade Jaguar' : 'unidade Tobias'}</span>
              <br />

            </div>

            <div className="assetSpecs">
              <h4>Especificações</h4>

              Sensor: {' '}
              {asset.sensors.map((sensor) => <span>{sensor}</span>)}
              <br />

              {asset.specifications.maxTemp ? (
                <span>
                  Temperatura máxima: {' '}
                  {asset.specifications.maxTemp} °C
                </span>
              )
                : (
                  <span>
                    Temperatura máxima: {' '}
                    não informada
                  </span>
                )}
              <br />

              {asset.specifications.rpm ? (
                <span>
                  Rotações por minuto: {' '}
                  {asset.specifications.rpm} RPM

                </span>
              )
                : (
                  <span>
                    Rotações por minuto: {' '}
                    não informado
                  </span>
                )}
              <br />

              {asset.specifications.rpm ? (
                <span>
                  Potência: {' '}
                  {asset.specifications.power} Watts
                </span>
              )
                : (
                  <span>
                    Potência: {' '}
                    não informada
                  </span>
                )}
              <br />
            </div>

            <div className="assetLifeCycle">
              <h4>Ciclo de vida</h4>

              Ativo por último às: {' '}
              {assetLastUptimeHour}h, {' '} {' '}
              {assetLastUptimeMinute}m e {' '} {' '}
              {assetsLastUptimeSeconds}s {' '} {' '} {' '}
              de {' '}
              {assetLastUptimeDay}/{assetLastUptimeMonth}/{assetLastUptimeYear}
              <br />

              Tempo de atividade de coleta total: {' '}
              {assetCollectsUptime}
              <br />

              Tempo total ativo: {' '}
              {assetTotalUptime}
              <br />

            </div>

            <div className="chart">
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
              />
            </div>

          </CardData>
        </Card>
      )
    })}
  </Container>
)

export default Body
