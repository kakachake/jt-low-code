import { FC } from 'react'
import { Link } from 'react-router-dom'

const Index: FC = () => {
  return (
    <div>
      <Link to={'/dashboard'}>dashboard</Link>
    </div>
  )
}

export default Index
