import { FieldNode, UnionFieldNode } from '../types'

const baseFields: UnionFieldNode[] = [
  {
    type: 'div',
    module: 'base',
    props: {
      className: '',
      children: ['div组件'],
      style: {
        display: 'flex'
      }
    },
    canDrop: true
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

export { baseFields }
