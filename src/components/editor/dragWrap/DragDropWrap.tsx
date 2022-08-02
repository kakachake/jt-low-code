import { FC, ReactElement, useEffect, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { FieldCompNode } from '../dataCore/types'
import type { Identifier, XYCoord } from 'dnd-core'
import { EDITOR_COMP } from '../type'
import { useEditorContext } from '../editorProvider/EditorProvider'

interface IDragDropWrapProps {
  children: ReactElement
  comp: FieldCompNode
  setHover: (hover: boolean) => void
}

const DragDropWrap: FC<IDragDropWrapProps> = ({ children, comp, setHover }) => {
  const { addComps } = useEditorContext()
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId, isOver }, drop] = useDrop<
    FieldCompNode,
    void,
    {
      handlerId: Identifier | null
      isOver: boolean
    }
  >({
    accept: [EDITOR_COMP],
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
      isOver: monitor.isOver({
        shallow: true
      })
    }),
    hover: (item, monitor) => {
      // console.log(item)
    },
    canDrop: (item, monitor) => {
      return comp?.canDrop ?? false
    },
    drop: (item, monitor) => {
      const isOver = monitor.isOver({ shallow: true })
      if (!isOver) return
      if (!item?.compId) {
        addComps(item, comp)
      } else {
        console.log('move')
      }
    }
  })
  useEffect(() => {
    setHover(isOver)
  }, [isOver])
  const [{ isDragging, opacity }, drag, dragPreview] = useDrag({
    type: EDITOR_COMP,
    item: () => {
      return { ...comp }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  })
  if (comp.canDrop) {
    drop(drag(ref))
  } else {
    drag(ref)
  }
  return (
    <div ref={dragPreview}>
      <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
        {children}
      </div>
    </div>
  )
}

export default DragDropWrap
