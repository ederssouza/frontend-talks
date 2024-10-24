import { Props } from './types'

function Button(props: Props) {
  const { children, loading, ...rest } = props

  return <button {...rest}>{loading ? 'Loading...' : children}</button>
}

export default Button
