import { DeleteOutlined } from '@ant-design/icons'
import { FC, MouseEventHandler, useState } from 'react'
import { GetCompsType } from '../dataCore/comps/type'
import { FieldCompNodeAll } from '../dataCore/types'
import DragDropWrap from '../dragWrap/DragDropWrap'
import { useEditorContext } from '../editorProvider/EditorProvider'
import CompRender from './CompRender'
import style from './EditorCompRender.module.scss'

interface IEditorCompRender {
  comp: FieldCompNodeAll
}

const EditorCompRender: FC<IEditorCompRender> = ({ comp }) => {
  const { selectedComps, setSelectComp, removeSelectComp, removeComp } = useEditorContext()
  const [hover, setHover] = useState(false)
  const isSelected = selectedComps.includes(comp.compId)
  const handleSelect: MouseEventHandler<HTMLDivElement> = (e) => {
    setSelectComp(comp)
    e.stopPropagation()
  }
  const handleDelete: MouseEventHandler<HTMLDivElement> = (e) => {
    removeComp(comp.compId)
    e.stopPropagation()
  }

  return (
    <div
      onClick={handleSelect}
      className={`${style.EditorCompWrap} ${isSelected ? style.selected : ''} ${hover ? style.selected : ''} `}
    >
      <DragDropWrap comp={comp} setHover={setHover}>
        <CompRender comp={comp} mode="edit" />
      </DragDropWrap>
      {!!isSelected && (
        <div onClick={handleDelete} className={style.delete}>
          <DeleteOutlined />
        </div>
      )}
    </div>
  )
}

export default EditorCompRender
