import { FC } from 'react'
import { useDrop } from 'react-dnd'
import EditorCompRender from '../compRender/EditorCompRender'
import { FieldCompNode } from '../dataCore/types'
import { useEditorContext } from '../editorProvider/EditorProvider'
import { EDITOR_COMP } from '../const'
import style from './Canvas.module.scss'

interface ICanvasProps {}

const Canvas: FC<ICanvasProps> = () => {
  const { comps, addComps, options } = useEditorContext()
  const [{ canDrop, isOver }, drop] = useDrop<
    FieldCompNode,
    void,
    {
      isOver: boolean
      canDrop: boolean
    }
  >({
    accept: EDITOR_COMP,
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true
      }),
      canDrop: monitor.canDrop()
    }),
    drop: (item, monitor) => {
      const isOver = monitor.isOver({
        shallow: true
      })

      if (!item?.compId && isOver) {
        // 新增
        addComps(item)
      }
    }
  })

  return (
    <div
      ref={drop}
      style={{
        width: options.width
      }}
      className={style.canvasWrap}
    >
      {comps.map((comp) => {
        return <EditorCompRender key={comp.compId} comp={comp} />
      })}
      {isOver ? 'true' : 'fasle'}
    </div>
  )
}
export default Canvas
