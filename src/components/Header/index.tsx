/* eslint-disable no-return-assign */
import React from 'react'

// Ant Design imports
import 'antd/dist/antd.css'
import { PageHeader, Button } from 'antd'

import { Container } from './styles'

interface Props {
  subtitle: string,
}

const Header: React.FC <Props> = ({ subtitle }) => (
  <Container>
    <PageHeader
      ghost={false}
      title="TRACTIAN"
      subTitle={subtitle}
      extra={[
        <Button
          disabled={subtitle === 'Ativos'}
          key="4"
          onClick={() => window.location.href = '/assets'}
        >
          Ativos
        </Button>,

        <Button
          disabled={subtitle === 'Usuários'}
          key="3"
          onClick={() => window.location.href = '/users'}
        >
          Usuários
        </Button>,

        <Button
          disabled={subtitle === 'Unidades'}
          key="2"
          onClick={() => window.location.href = '/units'}
        >
          Unidades
        </Button>,

        <Button
          disabled={subtitle === 'Empresas'}
          key="1"
          onClick={() => window.location.href = '/companies'}
        >
          Empresas
        </Button>,
      ]}
    />
  </Container>
)

export default Header
