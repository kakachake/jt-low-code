import { FieldNode } from '../types'

const baseFields: FieldNode[] = [
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
    // $schema: {
    //   type: 'object',
    //   properties: {
    //     className: {
    //       type: 'string',
    //       title: 'className'
    //     }
    //   }
    // }
  }
]

const antdFields: FieldNode[] = [
  {
    type: 'antd-button',
    module: 'antd',
    props: {
      className: '',
      children: ['按钮组件']
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

export { baseFields, antdFields }
