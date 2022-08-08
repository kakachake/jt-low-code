import { FC } from 'react'
import CompRender from '../compRender/CompRender'
import { FieldCompNodeAll, UnionFieldNodeAll } from '../dataCore/types'
import DragWrap from '../dragWrap/DragWrap'
import PannelItem from './Panneltem'

interface IPannelProps {
  comps: UnionFieldNodeAll[]
}

const Pannel: FC<IPannelProps> = ({ comps }) => {
  return (
    <div>
      {comps.map((comp) => {
        return (
          <DragWrap item={comp as FieldCompNodeAll} key={comp.type}>
            <PannelItem name={comp.type}>
              <CompRender comp={comp as FieldCompNodeAll} />
            </PannelItem>
          </DragWrap>
        )
      })}
    </div>
  )
}
export default Pannel
