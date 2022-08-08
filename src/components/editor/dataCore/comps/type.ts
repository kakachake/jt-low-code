import comps from '.'

export interface DefaultProps {
  style?: React.CSSProperties
  children?: React.ReactNode
  className?: string
}

export type GetCompsType = keyof typeof comps

export interface BtnProps extends DefaultProps {
  data: {
    value: string
  }
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
