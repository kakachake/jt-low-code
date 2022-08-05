import { FieldNode, UnionFieldNode } from '../types'

const antdFields: UnionFieldNode[] = [
  {
    type: 'antd-button',
    module: 'antd',
    props: {
      className: '',
      children: ['按钮组件', '按钮组件', '按钮组件']
    }
  },
  {
    type: 'antd-image',
    module: 'antd',
    props: {
      width: 100,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    }
  }
]

export { antdFields }
