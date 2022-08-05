import { Button, Image, ImageProps } from 'antd'
import { DefaultProps } from '../type'

const antdComps = {
  'antd-button': (props: DefaultProps) => {
    return <Button {...props} />
  },
  'antd-image': (props: ImageProps) => {
    return <Image {...props} />
  }
}

export default antdComps
