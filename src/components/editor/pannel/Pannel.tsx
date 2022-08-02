import { FC } from 'react'
import CompRender from '../compRender/CompRender'
import { FieldCompNode, FieldNode } from '../dataCore/types'
import DragWrap from '../dragWrap/DragWrap'
import PannelItem from './Panneltem'

interface IPannelProps {
  comps: FieldNode[]
}

const Pannel: FC<IPannelProps> = ({ comps }) => {
  return (
    <div>
      {(comps as FieldCompNode[]).map((comp) => {
        // return <PannelItem key={comp.type} comp={comp} />
        return (
          <DragWrap item={comp} key={comp.type}>
            <PannelItem name={comp.type}>
              <CompRender comp={comp} />
            </PannelItem>
          </DragWrap>
        )
      })}
    </div>
  )
}
export default Pannel
