import { FC, ReactElement } from 'react'
import style from './EditorLayout.module.scss'

interface EditorLayoutProps {
  Header: ReactElement
  Menu: ReactElement
  Editor: ReactElement
  Operation: ReactElement
}

const EditorLayout: FC<EditorLayoutProps> = ({ Header, Menu, Editor, Operation }) => {
  return (
    <>
      <div className={style['editor-header']}>{Header}</div>
      <div className={style['editor-container']}>
        <div className={style.menu}>{Menu}</div>
        <div className={style.editor}>{Editor}</div>
        <div className={style.operation}>{Operation}</div>
      </div>
    </>
  )
}

export default EditorLayout
