import { FC } from 'react'
import CompRender from '../compRender/CompRender'
import { FieldNode } from '../dataCore/typs'
import PannelItem from './Panneltem'

interface PannelProps {
  comps: FieldNode[]
}

const Pannel: FC<PannelProps> = ({ comps }) => {
  return (
    <div>
      {comps.map((comp) => {
        // return <PannelItem key={comp.type} comp={comp} />
        return <CompRender compWraps={[<PannelItem key={comp.type} />]} key={comp.type} comp={comp} />
      })}
    </div>
  )
}
export default Pannel
