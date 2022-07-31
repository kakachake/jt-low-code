import { FC } from 'react'
import { Link } from 'react-router-dom'

const Index: FC = () => {
  return (
    <div>
      <Link to={'/editor'}>editor</Link>
    </div>
  )
}

export default Index
