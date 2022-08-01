import { FC } from 'react'
import CompRender from '../compRender/CompRender'
import { FieldNode } from '../dataCore/types'
import DragWrap from '../dragWrap/DragWrap'
import PannelItem from './Panneltem'

interface IPannelProps {
  comps: FieldNode[]
}

const Pannel: FC<IPannelProps> = ({ comps }) => {
  return (
    <div>
      {comps.map((comp) => {
        // return <PannelItem key={comp.type} comp={comp} />
        return (
          <DragWrap item={comp} key={comp.type}>
            <PannelItem>
              <CompRender comp={comp} />
            </PannelItem>
          </DragWrap>
        )
      })}
    </div>
  )
}
export default Pannel
