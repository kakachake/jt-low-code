import { ICompSchema } from '../types'
import { styleSchema } from './style'

const baseSchema: ICompSchema<'base'> = {
  div: {
    style: {
      ...styleSchema
    }
  },
  button: {
    style: {
      ...styleSchema
    },
    data: {
      type: 'object',
      description: '数据',
      properties: {
        value: {
          type: 'string',
          title: '按钮名'
        }
      }
    }
  }
}

export default baseSchema
