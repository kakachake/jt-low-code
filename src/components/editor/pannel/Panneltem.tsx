import { FC, ReactElement } from 'react'
import style from './Pannel.module.scss'

interface IPannelItemProps {
  children?: ReactElement
  name: string
}

const PannelItem: FC<IPannelItemProps> = ({ children, name }) => {
  return (
    <div className={style.pannelItemWrap}>
      <div className={style.comp}>{children}</div>
      <div className={style.compDesc}>{name}</div>
    </div>
  )
}
export default PannelItem
