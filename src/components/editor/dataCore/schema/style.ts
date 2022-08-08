import { Schema } from 'form-render'

export const styleSchema: Schema = {
  type: 'object',
  description: '样式',
  properties: {
    backgroundColor: {
      type: 'string',
      title: '背景颜色',
      placeholder: '背景色',
      format: 'color'
    },
    color: {
      type: 'string',
      title: '文字颜色',
      placeholder: '文字颜色',
      format: 'color'
    }
  }
}
