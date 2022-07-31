import { Menu } from 'antd'
import { FC, useState } from 'react'
import { defaultSelectedKeys, menus } from './menuConfig'
import style from './EditorMenu.module.scss'

interface EditorMenuProps {}

const EditorMenu: FC<EditorMenuProps> = () => {
  const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKeys[0])
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Menu
          style={{
            height: '100%'
          }}
          inlineCollapsed={true}
          items={menus}
          onSelect={({ key }) => {
            setSelectedKeys(key)
          }}
          defaultSelectedKeys={defaultSelectedKeys}
        />
      </div>
      <div className={style.comps}>
        <div>{menus.find((menu) => menu.key === selectedKeys)?.pannel}</div>
      </div>
    </div>
  )
}

export default EditorMenu
