import { Props } from './types'

function Modal(props: Props) {
  const { children } = props

  return <div>{children}</div>
}

export default Modal
