import React from 'react'

// Ant Design imports
import 'antd/dist/antd.css'
import { DownOutlined } from '@ant-design/icons'
import {
  PageHeader, Menu, Button, Dropdown,
} from 'antd'

import { Container } from './styles'

interface Props {
  subtitle: string,
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
)

const Header: React.FC <Props> = ({ subtitle }) => (
  <Container>
    <PageHeader
      ghost={false}
      title="TRACTIAN"
      subTitle={subtitle}
      extra={[
        <Button
          key="1"
          onClick={() => window.location.href = '/assets'}
        >
          Ativos
        </Button>,

        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Mais recursos <DownOutlined />
          </a>
        </Dropdown>,
      ]}
    />
  </Container>
)

export default Header
