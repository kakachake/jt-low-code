import { DeleteOutlined } from '@ant-design/icons'
import { FC, MouseEventHandler } from 'react'
import { FieldCompNode } from '../dataCore/types'
import { useEditorContext } from '../editorProvider/EditorProvider'
import CompRender from './CompRender'
import style from './EditorCompRender.module.scss'

interface IEditorCompRender {
  comp: FieldCompNode
}

const EditorCompRender: FC<IEditorCompRender> = ({ comp }) => {
  const { selectedComps, setSelectComp, removeSelectComp, removeComp } = useEditorContext()
  const isSelected = selectedComps.includes(comp.compId)
  const handleSelect: MouseEventHandler<HTMLDivElement> = (e) => {
    !isSelected ? setSelectComp(comp) : removeSelectComp(comp)
    e.stopPropagation()
  }
  const handleDelete: MouseEventHandler<HTMLDivElement> = (e) => {
    removeComp(comp.compId)
    e.stopPropagation()
  }

  return (
    <div onClick={handleSelect} className={`${style.EditorCompWrap} ${isSelected ? style.selected : ''}`}>
      <CompRender comp={comp} />
      {!!isSelected && (
        <div onClick={handleDelete} className={style.delete}>
          <DeleteOutlined />
        </div>
      )}
    </div>
  )
}

export default EditorCompRender
