import { Props } from './types'

function Button(props: Props) {
  const { children } = props

  return <div>{children}</div>
}

export default Button
