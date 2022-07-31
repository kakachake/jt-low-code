import { FC } from 'react'
import style from './Loading.module.css'

const Loading: FC = () => {
  return (
    <div className={style.loadingWrap}>
      <div className={style.loadingContent}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
