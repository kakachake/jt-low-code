import { FC } from 'react'
import { useDrag } from 'react-dnd'
import comps from '../dataCore/comps'
import { FieldNode } from '../dataCore/types'
import { EDITOR_COMP } from '../type'

interface IDragWrapProps {
  children: React.ReactElement
  item: any
}

const DragWrap: FC<IDragWrapProps> = ({ children, item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: EDITOR_COMP,
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  const opacity = isDragging ? 0.5 : 1
  return (
    <div
      style={{
        opacity
      }}
      ref={drag}
    >
      {children}
    </div>
  )
}

export default DragWrap
