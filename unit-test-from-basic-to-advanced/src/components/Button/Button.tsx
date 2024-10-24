import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

function Button(props: Props) {
  const { children } = props

  return <div>{children}</div>
}

export default Button