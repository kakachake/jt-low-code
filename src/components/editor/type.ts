import { FieldCompNode, FieldCompNodeAll } from './dataCore/types'

interface ICanvas {
  type: 'root'
  children: FieldCompNodeAll[]
  props: {
    width: number
  }
}

//最终需要提交的数据类型
interface ILowCodeType {
  id?: string
  name: string
  description?: string
  canvas: ICanvas
}

export type { ILowCodeType }
