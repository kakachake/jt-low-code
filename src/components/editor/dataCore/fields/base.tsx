import { FieldNode } from '../types'

const baseFields: FieldNode[] = [
  {
    type: 'div',
    module: 'base',
    props: {
      className: '',
      children: ['div组件']
    }
  },
  {
    type: 'button',
    module: 'base',
    props: {
      className: '',
      children: ['button组件']
    }
  },
  {
    type: 'input',
    module: 'base',
    props: {
      className: ''
    }
  }
]

export default baseFields
