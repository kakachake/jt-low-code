import { FieldNode, UnionFieldNode } from '../types'

const baseFields: UnionFieldNode<'base'>[] = [
  {
    type: 'div',
    module: 'base',
    props: {
      className: '',
      children: ['div组件'],
      style: {
        display: 'flex',
        backgroundColor: 'red'
      }
    },
    canDrop: true
  },
  {
    type: 'button',
    module: 'base',
    props: {
      className: '',
      data: {
        value: '按钮组件'
      }
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
