import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

function Modal(props: Props) {
  const { children } = props

  return <div>{children}</div>
}

export default Modal
