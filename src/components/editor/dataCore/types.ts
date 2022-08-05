import comps from './comps'
type GetType<T> = T extends (arg: infer P) => void ? P : never
type PropsMap<type> = type extends infer A extends keyof typeof comps ? GetType<typeof comps[A]> : never

export interface FieldNode<type> {
  // 获取到comps中每个comp的key当作fieldNode的type
  type: type
  module: 'base' | 'antd'
  props: PropsMap<type>
  canDrop?: boolean
}

// FieldNode<'a'|'b'|'c'>和
// FieldNode<'a'> | FieldNode<'b'> | FieldNode<'c'>类型不同

type CompsType = {
  [key in keyof typeof comps]: FieldNode<key>
}

export type UnionFieldNode = CompsType[keyof CompsType]

export type FieldCompNode = {
  // 放置到画布上的组件唯一ID
  compId: string
  children: FieldCompNode[]
  parentId?: string
} & UnionFieldNode
