import { FC, ReactElement } from 'react'
import style from './Pannel.module.scss'

interface IPannelItemProps {
  children?: ReactElement
}

const PannelItem: FC<IPannelItemProps> = ({ children }) => {
  return (
    <div className={style.pannelItemWrap}>
      <div className={style.comp}>{children}</div>
    </div>
  )
}
export default PannelItem
