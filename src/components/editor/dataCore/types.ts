import { Schema, SchemaBase } from 'form-render'
import comps from './comps'
type GetType<T> = T extends (arg: infer P) => void ? P : never
type PropsMap<type, M extends keyof typeof comps> = type extends infer A extends keyof typeof comps[M]
  ? GetType<typeof comps[M][A]>
  : never

type CompsTypeByModule<M extends keyof typeof comps> = {
  [key in keyof typeof comps[M]]: FieldNode<key, M>
}

export type UnionFieldNode<M extends keyof typeof comps> = CompsTypeByModule<M>[keyof CompsTypeByModule<M>]

export type UnionFieldNodeAll = UnionFieldNode<'antd'> | UnionFieldNode<'base'>

export interface FieldNode<type, M extends keyof typeof comps> {
  // 获取到comps中每个comp的key当作fieldNode的type
  type: type
  module: M
  props: PropsMap<type, M>
  canDrop?: boolean
}

// FieldNode<'a'|'b'|'c'>和
// FieldNode<'a'> | FieldNode<'b'> | FieldNode<'c'>类型不同

// export type UnionFieldNode = FieldNode<keyof typeof comps>

export type FieldCompNode<M extends keyof typeof comps> = {
  // 放置到画布上的组件唯一ID
  compId: string
  children: CompsType[keyof CompsType][]
  parentId?: string
  parent?: CompsType[keyof CompsType]
} & UnionFieldNode<M>

type CompsType = {
  [key in keyof typeof comps]: FieldCompNode<key>
}
export type FieldCompNodeAll = CompsType[keyof CompsType]

export type ICompSchema<T extends keyof typeof comps> = {
  [key in keyof typeof comps[T]]?: Record<string, Schema>
}
export type UnionFieldCompNodeAll = FieldCompNodeAll[]
