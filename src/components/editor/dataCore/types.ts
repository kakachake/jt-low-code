import comps from './comps'

export interface FieldNode {
  // 获取到comps中每个comp的key当作fieldNode的type
  type: keyof typeof comps
  module: 'base' | 'antd'
  props: Record<string, any>
  canDrop?: boolean
}

export interface FieldCompNode extends FieldNode {
  // 放置到画布上的组件唯一ID
  compId: string
  children: FieldCompNode[]
}
