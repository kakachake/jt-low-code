import { Button, Image } from 'antd'

const antdComps = {
  'antd-button': (props: any) => {
    return <Button {...props} />
  },
  'antd-image': (props: any) => {
    return <Image {...props} />
  }
}

export default antdComps
