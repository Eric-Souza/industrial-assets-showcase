import React from 'react'

// Ant Design imports
import { Card, Select, message } from 'antd'

// Highcharts imports
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Container, CardData } from './styles'

const { Meta } = Card
const { Option } = Select

const Body = ({
  allAssets,
  allCompanies,
  allUnits,
  allUsers,
  assetStatus,
  assetLastUptimeYear,
  assetLastUptimeMonth,
  assetLastUptimeDay,
  assetLastUptimeHour,
  assetLastUptimeMinute,
  assetsLastUptimeSeconds,
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

      // Highcharts config
      let assetColor = ''

      if (asset.healthscore < 60) assetColor = '#ff2c2c'
      if (asset.healthscore >= 60 && asset.healthscore < 75) assetColor = '#ffd900'
      if (asset.healthscore >= 75) assetColor = '#2a8d3a'

      const chartOptions = {
        title: {
          categories: [`${assetStatus}`],
          text: `Saúde do ${asset.name}`,
        },

        series: [{
          name: 'Saúde do ativo',
          type: 'column',
          data: [asset.healthscore],
        }],

        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: 'Saúde (%)',
          },
        },

        xAxis: {
          categories: [`${assetStatus}`],
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
              Empresa responsável: {' '}
              <Select
                defaultValue={asset.companyId === 1 ? 'Empresa Teste' : 'Empresa Desconhecida'}
                style={{ width: 150 }}
              >
                {allCompanies.map((company) => (
                  <Option key={company.name} value={company.name}>{company.name}</Option>
                ))}
              </Select>

              <br />

              Unidade responsável: {' '}
              <Select
                defaultValue={asset.unitId === 1 ? 'Unidade Jaguar' : 'Unidade Tobias'}
                style={{ width: 150 }}
                onChange={() => message.info('Unidade atualizada!')}
              >
                {allUnits.map((unit) => (
                  <Option key={unit.name} value={unit.name}>{unit.name}</Option>
                ))}
              </Select>
              <br />

              Usuário atribuido: {' '}
              <Select
                defaultValue="Nenhum"
                style={{ width: 150 }}
                onChange={() => message.info('Usuário atualizado!')}
              >
                {allUsers.map((user) => (
                  <Option key={user.name} value={user.name}>{user.name}</Option>
                ))}
              </Select>
              <br />

              <h4>Dados Gerais</h4>

              Identificador: {' '} {asset.id}
              <br />

              Status: {' '}
              {assetStatus}
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
              {asset.metrics.totalCollectsUptime.toFixed(2)} unidades de tempo
              <br />

              Tempo total ativo: {' '}
              {asset.metrics.totalUptime.toFixed(2)} unidades de tempo
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
