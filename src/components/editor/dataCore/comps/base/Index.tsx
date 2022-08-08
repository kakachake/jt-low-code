import { BtnProps, DefaultProps } from '../type'

const baseComps = {
  div: (props: DefaultProps) => {
    return <div {...props} />
  },
  button: (props: BtnProps) => {
    return <button {...props}>{props.data?.value}</button>
  },
  input: (props: DefaultProps) => {
    return <input {...props} />
  }
}

export default baseComps
