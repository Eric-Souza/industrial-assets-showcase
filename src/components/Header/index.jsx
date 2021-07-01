import React, { useState } from 'react'

// Ant Design imports
import 'antd/dist/antd.css'
import {
  PageHeader, Button, Modal,
} from 'antd'

import { Container, DataList } from './styles'

const Header = ({
  subtitle,
  allAssets,
  allCompanies,
  allUnits,
  allUsers,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Container>
      <PageHeader
        ghost={false}
        title="TRACTIAN"
        subTitle={subtitle}
        extra={[
          <>
            <Button type="primary" onClick={() => setIsModalVisible(true)}>
              Todos os dados
            </Button>

            <Modal
              title="Todos os dados"
              visible={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}
            >

              <DataList>
                <h3> Ativos </h3>

                {allAssets.map((asset) => (
                  <span>{asset.name}</span>
                ))}
              </DataList>

              <DataList>
                <h3> Unidades </h3>

                {allUnits.map((unit) => (
                  <span>{unit.name}</span>
                ))}
              </DataList>

              <DataList>
                <h3> Usuários </h3>

                {allUsers.map((user) => (
                  <span>{user.name}</span>
                ))}
              </DataList>

              <DataList>
                <h3> Empresas </h3>

                {allCompanies.map((company) => (
                  <span>{company.name}</span>
                ))}
              </DataList>
            </Modal>
          </>,
        ]}
      />
    </Container>
  )
}

export default Header
