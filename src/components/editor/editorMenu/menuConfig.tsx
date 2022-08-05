import { AppstoreOutlined, BuildOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { ReactElement } from 'react'
import { baseFields, antdFields } from '../dataCore/fields/'
import Pannel from '../pannel/Pannel'
type MenuItem = Required<MenuProps>['items'][number] & {
  pannel: ReactElement
}

export const menus: MenuItem[] = [
  { label: '常规组件', key: 'item-1', icon: <BuildOutlined />, pannel: <Pannel comps={baseFields} /> },
  { label: 'antd', key: 'item-2', icon: <AppstoreOutlined />, pannel: <Pannel comps={antdFields} /> }
]

export const defaultSelectedKeys = ['item-1']
