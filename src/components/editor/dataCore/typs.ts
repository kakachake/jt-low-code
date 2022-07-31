import comps from './comps'

export interface FieldNode {
  // 获取到comps中每个comp的key当作fieldNode的type
  type: keyof typeof comps
  module: 'base' | 'antd'
  props: Record<string, any>
  canDrop?: boolean
}
