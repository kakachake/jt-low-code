export interface DefaultProps {
  style?: React.CSSProperties
  children?: React.ReactNode
  className?: string
}

export interface BtnProps extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
